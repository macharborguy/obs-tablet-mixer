






<template lang="pug">
div.LOC_Fader_Group_Header.px-2
	v-spacer
	| {{ title }}
	v-spacer
	v-icon(size="x-small").pt-1.ml-2 mdi-window-minimize
</template>








<script>

	export default {
		name : 'FaderGroupHeader',
		_tag : 'fader-group-header',
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

.LOC_Fader_Group_Header
	text-align center
	display flex
	align-items center
	justify-content space-between
	color darken(white,30%)
	font-size 0.8em
	text-shadow 0 1px 0 lighten(black,30%)
	line-height 200%
	transform translateY(2px)
	font-variant small-caps
	font-weight 700

</style>









<style lang="stylus"></style>

