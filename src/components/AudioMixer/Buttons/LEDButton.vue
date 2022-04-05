






<template lang="pug">
div.LOC_LED_Button
	v-btn(
		@touchstart="clickDown"
		@touchend="clickUp"
		@click="clickHandle"
		:color="ActiveColor"
		variant="contained"
		:disabled="disabled"
	)
		slot
		v-icon(v-if="appendIcon") {{ appendIcon }}

</template>








<script>

	import ClickSounds from '@/sounds/ClickSounds.js'
	import wait from '@/functions/wait'

	const { log, error, warn } = console

	export default {
		name : 'LEDButton',
		_tag : 'led-button',
		
		props : ['device','filter','prependIcon','appendIcon'],

		data : ()=>({
			active		: false,
			disabled	: true
		}),
		
		computed : {
			ActiveColor () {
				if (this.disabled===true) return 'grey'
				if (this.active===false) return 'red'
				return 'green'
			},
			SourceName () {
				return {
					sourceName : this.device.source
				}
			},
			FilterName () {
				return {
					filterName : this.filter.filter
				}
			},
		},

		methods : {
			...ClickSounds,
			clickHandle () {}
		},

		mixins : [],
		setup () {},
		beforeMount() {},
		async mounted () {}
	}
	
</script>









<style lang="stylus" scoped>

.v-btn
	font-size 0.6em
	display flex
	flex-direction row
	justify-content space-around
	text-align center
	flex-shrink 1

	&[disabled="disabled"]
		background-color red !important


</style>









<style lang="stylus"></style>

