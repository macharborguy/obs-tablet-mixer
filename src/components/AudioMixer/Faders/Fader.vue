






<template lang="pug">
div.LOC_Fader_Input
	header(v-if="dataobj && dataobj.icon") 
		v-icon(size="small") {{ dataobj.icon }}
	input(type="range" :class="useVertical" :disabled="disabled").Fader
</template>









<script>

	export default {
		name : 'FaderInput',
		_tag : 'fader-input',
		data : ()=>({}),
		computed : {
			useVertical () {
				return { vertical : this.vertical }
			}
		},
		methods : {},
		props : ['vertical', 'disabled', 'device', 'dataobj'],
		mixins : [],
		setup () {},
		async mounted () {}
	}
</script>









<style lang="stylus" scoped>
.LOC_Fader_Input
	min-width 70px
	> header
		color black
		text-align center
		padding 5px
		border-bottom 1px solid lighten(black,60%)
		margin-bottom 10px
		box-shadow inset 0 3px 0 0 darken(white,55%)
		
	&:first-child > header
		border-radius 5px 0 0 0

	&:last-child > header
		border-radius 0 5px 0 0

	&:first-child:last-child > header
		border-radius 5px 5px 0 0
	
	> input.vertical
		-webkit-appearance slider-vertical
		width 60px
		min-height 250px
		transform translateX(6px)
		
</style>









<style lang="stylus"></style>

