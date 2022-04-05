







<template lang="pug">
div.LOC_Fader_Group
	fader-group-header(:title="title")
	fader-input(vertical="vertical" title="To Discord")
</template>









<script>
	import FGH from './FaderGroupHeader'
	import Fader from './Fader'

	export default {
		name : 'FaderGroup',
		_tag : 'fader-group',
		components : {
			[FGH._tag] : FGH,
			[Fader._tag] : Fader
		},
		data : ()=>({}),
		computed : {},
		methods : {},
		props : ['title'],
		mixins : [],
		setup () {},
		async mounted () {}
	}
</script>









<style lang="stylus" scoped>

.LOC_Fader_Group
	// color black

</style>









<style lang="stylus"></style>

