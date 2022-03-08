<template lang="pug">
v-btn(
	v-on:touchstart="clickDown"
	v-on:touchend="clickUp"
	@click="clickHandle"
	:color="ActiveColor"
	variant="contained"
	:append-icon="mon.icon"
	:disabled='disabled'
).mb-2 TO
</template>

<script>
import ClickSounds from '@/sounds/ClickSounds.js'
import wait from '@/functions/wait'

const { log } = console

export default {
	name : 'MonitorOut_Button',
	_tag : 'monitor-out-button',

	props : ['device','mon'],

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
				filterName : `To ${this.mon.name}`
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
		this.emitter.on('populate_initial_filter_data',filters=>{
			const filter = filters.find(({name})=>!!(name===`To ${this.mon.name}`))
			if (filter) {
				this.active = filter.enabled
				this.disabled = false
			}
		})

		this.emitter.on('filter_visibility_state_change',filter=>{
			const OfSameSource = !!(filter.sourceName===this.device.source)
			const HasSameName = !!(filter.filterName===`To ${this.mon.name}`)

			if (OfSameSource && HasSameName) this.active = filter.filterEnabled
		})
	},
}
</script>


<style lang="stylus" scoped></style>

<style lang="stylus"></style>

