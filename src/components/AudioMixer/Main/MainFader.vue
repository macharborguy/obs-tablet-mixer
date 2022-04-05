






<template lang="pug">
div.LOC_Main_Fader
	header Main
	fader-input(vertical="vertical")

</template>









<script>
	import Fader from '@/components/AudioMixer/Faders/Fader'

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
	border-radius 5px
	margin-right 5px
	background-color #1A1A1A
	
	&:last-child
		margin-right 0


	> header
		margin-bottom 24px
		text-align center
		color darken(white,30%)
		font-size 0.9em
		font-weight 1000
		text-shadow 0 1px 0 lighten(black,30%)
		line-height 200%
		transform translateY(2px)
		font-variant small-caps

	
	
</style>









<style lang="stylus"></style>

