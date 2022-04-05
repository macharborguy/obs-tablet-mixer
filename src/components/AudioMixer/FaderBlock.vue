







<template lang="pug">
div.LOC_Fader_Block
	main-fader
	
	template(v-if="device.mons.length>0")
		fader-group.Monitors(title="Mon.")
			fader-input(v-for="mon of device.mons" :device="device" :key="mon.name" :dataobj="mon" vertical="vertical")
	
	template(v-if="device.ndiout.length>0")
		fader-group.NDI(title="NDI")
			fader-input(v-for="ndi of device.ndiout" :device="device" :key="ndi.name" :dataobj="ndi"  vertical="vertical")
	
	template(v-if="device.ducks.length>0")
		fader-group.Ducks(title="Ducks")
			fader-input(v-for="duck of device.ducks" :device="device" :key="duck.name" :dataobj="duck"  vertical="vertical")
</template>








<script>
	import MainFader from './MainFader'
	import FaderGroup from './FaderGroup'
	import Fader from './Fader'

	export default {
		name : 'FaderBlock',
		_tag : 'fader-block',
		components : {
			[MainFader._tag] : MainFader,
			[FaderGroup._tag] : FaderGroup,
			[Fader._tag] : Fader
		},
		data : ()=>({}),
		computed : {},
		methods : {},
		props : ['device'],
		mixins : [],
		setup () {},
		async mounted () {}
	}
</script>









<style lang="stylus" scoped>

.LOC_Fader_Block
	display flex
	flex-direction row
	justify-content space-evenly

</style>









<style lang="stylus"></style>

