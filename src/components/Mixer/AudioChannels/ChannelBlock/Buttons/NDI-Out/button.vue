<template lang="pug">
v-btn(
	v-on:touchstart="clickDown"
	v-on:touchend="clickUp"
	@click="clickHandle"
	:color="ActiveColor"
	variant="contained"
	:append-icon="ndi.icon"
	:disabled='disabled'
).mb-2 NDI
</template>

<script>
import ClickSounds from '@/sounds/ClickSounds.js'
import wait from '@/functions/wait'

const { log } = console

export default {
	name : 'NDIOut_Button',
	_tag : 'ndi-out-button',

	props : ['device','ndi'],

	data : ()=>({
		active : false,
		disabled : true
	}),








	computed : {
		ActiveColor () {
			if (this.disabled === true) return 'grey'
			if (this.active === false) return 'red'
			return 'green'
		},

		SourceName () {
			return {
				sourceName : this.device.source
			}
		},

		FilterName () {
			return {
				filterName : `To ${this.ndi.name}`
			}
		},
	},






	methods : {
		...ClickSounds,
		clickHandle () {
			const payload = {
				...this.SourceName, ...this.FilterName,
				filterEnabled : !this.active
			};
			this.$OBSWS.send('SetSourceFilterVisibility',payload)
		}
	},


	beforeMount () {
		this.emitter.on('populate_initial_ndi_data',({filters,sourceName})=>{
			if (sourceName!==this.device.source) return;
			const filter = filters.find(({name})=>!!(name===`To ${this.ndi.name}`))
			if (filter) {
				this.active = filter.enabled
				this.disabled = false
			}
		})

		this.emitter.on('filter_visibility_state_change',filter=>{
			const OfSameSource = !!(filter.sourceName===this.device.source)
			const HasSameName = !!(filter.filterName===`To ${this.ndi.name}`)

			if (OfSameSource && HasSameName) this.active = filter.filterEnabled
		})
	},
}
</script>


<style lang="stylus" scoped></style>

<style lang="stylus"></style>

