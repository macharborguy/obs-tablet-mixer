






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
	> header
		color black
		text-align center
		padding 5px
		border-bottom 1px solid lighten(black,25%)
		margin-bottom 10px
	
	> input.vertical
		-webkit-appearance slider-vertical
		width 60px
		min-height 250px
		
</style>









<style lang="stylus"></style>

