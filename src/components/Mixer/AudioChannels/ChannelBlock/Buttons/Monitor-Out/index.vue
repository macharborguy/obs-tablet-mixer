<template lang="pug">
div.MonitorOutGroup(v-if="mons.length>0")
	template(v-for="mon of mons")
		monitor-out-button(:mon="mon" :device="device")
	
</template>

<script>
import MonitorButton from './button.vue'
import wait from '@/functions/wait'

const { log } = console

export default {
	name : 'MonitorOut',
	_tag : 'monitor-out-group',
	components : {
		[MonitorButton._tag] : MonitorButton,
	},
	props : ['device','mons'],
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
		
		this.$OBSWS.send('GetSourceFilters',{
			...this.SourceName
		}).then(({filters})=>{
			this.emitter.emit('populate_initial_monitor_data', {filters,sourceName:this.device.source})
		})

		this.$OBSWS.on('SourceFilterVisibilityChanged',(filter)=>{
			if (filter.filterName.includes('Move')) return
			this.emitter.emit('filter_visibility_state_change', filter)
		})
	},
}
</script>


<style lang="stylus" scoped>

.MonitorOutGroup
	background-color rgba(30,0,0,0.7)
	border 1px solid alpha(yellow,0.5)
	box-shadow 0px 1px 0 2px alpha(black,0.75), 0px -1px 0 1px alpha(white,0.25)
	margin 0 5px 5px
	padding 10px 0 0 0
	border-radius 8px

</style>

<style lang="stylus"></style>

