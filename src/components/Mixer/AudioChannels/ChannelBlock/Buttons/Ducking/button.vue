<template lang="pug">
v-btn(
	v-on:touchstart="clickDown"
	v-on:touchend="clickUp"
	@click="clickHandle"
	:color="ActiveColor"
	variant="contained"
	:disabled='disabled'
	prepend-icon="mdi-duck"
	:append-icon="duck.icon"
).mb-2
</template>

<script>
import ClickSounds from '@/sounds/ClickSounds.js'
import wait from '@/functions/wait'

const { log } = console


export default {
	name	: 'Ducking_Button',
	_tag	: 'ducking-button',

	props : ['device','duck'],

	data	: ()=>({
		active		: false,
		disabled	: true
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
				filterName : this.duck.filter
			}
		},
	},

	methods : {
		...ClickSounds,
		clickHandle () {
			const switchTo = (!this.active)
			const payload = {
				...this.SourceName, ...this.FilterName,
				filterEnabled : switchTo
			};
			this.$OBSWS.send('SetSourceFilterVisibility',payload).then(({status})=>{
				if (status==='ok') this.active = switchTo
			})
		}
	},

	created () {

	},

	beforeMount () {
		this.emitter.on('populate_initial_duck_data',({filters,sourceName})=>{
			if (sourceName!==this.device.source) return;
			const filter = filters.find(({name})=>(name===this.duck.filter))
			if (filter) {
				this.active = filter.enabled
				this.disabled = false
			}
		})

		this.emitter.on('filter_visibility_state_change',filter=>{
			const OfSameSource = !!(filter.sourceName===this.device.source)
			const HasSameName = !!(filter.filterName===this.duck.filter)

			if (OfSameSource && HasSameName) this.active = filter.filterEnabled
		})
	},



}



export const store	= {
	namespaced		: true,
	state			: ()=>({}),
	getters			: {},
	actions			: {},
	mutations		: {},
	modules			: {}
}
</script>


<style lang="stylus" scoped>
</style>

<style lang="stylus">

.DuckingGroup
	.mdi-duck
		opacity 0.8

</style>

