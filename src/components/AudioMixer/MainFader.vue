






<template lang="pug">
div.LOC_Main_Fader
	header Main
	fader-input(vertical="vertical")

</template>









<script>
	import Fader from './Fader'

	export default {
		name : 'MainFader',
		_tag : 'main-fader',
		components : {
			[Fader._tag] : Fader
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
.LOC_Main_Fader
	> header
		text-align center
</style>









<style lang="stylus"></style>

