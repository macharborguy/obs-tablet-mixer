






<template lang="pug">
div
	v-btn(
		@touchstart="clickDown"
		@touchend="clickUp"
		@click="clickHandle"
		:color="ActiveColor"
		variant="contained"
		:disabled="disabled"
		:prepend-icon="prependedIcon"
		:append-icon="appendedIcon"
	)
		slot
</template>








<script>

	import ClickSounds from '@/sounds/ClickSounds.js'
	import wait from '@/functions/wait'

	const { log, error, warn } = console

	export default {
		name : 'LEDButton',
		_tag : 'led-button',
		
		props : ['device','filter'],

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
			}
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









<style lang="stylus" scoped></style>









<style lang="stylus"></style>

