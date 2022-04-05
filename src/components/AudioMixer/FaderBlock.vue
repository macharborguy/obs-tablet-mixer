







<template lang="pug">
div.LOC_Fader_Block
	main-fader
	fader-group.Monitors(title="Mon.")
	fader-group.NDI(title="NDI")
	fader-group.Ducks(title="Ducks")
</template>








<script>
	import MainFader from './MainFader'
	import FaderGroup from './FaderGroup'

	export default {
		name : 'FaderBlock',
		_tag : 'fader-block',
		components : {
			[MainFader._tag] : MainFader,
			[FaderGroup._tag] : FaderGroup
		},
		data : ()=>({}),
		computed : {},
		methods : {},
		props : [],
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

