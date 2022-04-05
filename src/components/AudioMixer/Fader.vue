






<template lang="pug">
div.LOC_Fader_Input
	header TO 
		v-icon(size="small") mdi-discord
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
		props : ['vertical', 'title', 'icon', 'disabled'],
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
	
	> input.vertical
		-webkit-appearance slider-vertical
</style>









<style lang="stylus"></style>

