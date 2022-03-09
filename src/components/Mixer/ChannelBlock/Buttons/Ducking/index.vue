<template lang="pug">
div.DuckingGroup(v-if="ducks.length>0")
	template(v-for="duck of ducks")
		ducking-button(:duck="duck" :device="device")
	
</template>

<script>
import DuckingButton from './button.vue'
import wait from '@/functions/wait'
const { log } = console

export default {
	name : 'DuckingGroup',
	_tag : 'ducking-group',

	components : {
		[DuckingButton._tag] : DuckingButton,
	},
	props : ['device','ducks'],
	data : ()=>({}),

	computed : {
		SourceName () {
			return {
				sourceName : this.device.source
			}
		}
	},

	async mounted () {
		while (!this.$OBSWS._connected) await wait(50)

		this.$OBSWS.on('SourceFilterVisibilityChanged',(filter)=>{
			if (filter.filterName.includes('Move')) return
			this.emitter.emit('filter_visibility_state_change', filter)
		})
	},
}
</script>


<style lang="stylus" scoped>

.DuckingGroup
	background-color rgba(30,0,0,0.7)
	border 1px solid rgba(0,0,0,0.3)
	margin 0 5px 5px
	padding 10px 0 0 0
	border-radius 8px

</style>

<style lang="stylus"></style>

