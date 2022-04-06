







<template lang="pug">
div.LOC_NDI_Button
	led-button(:appendIcon="item.icon" :disabled="disabled" :clickHandler="clickHandler")
		slot
			slot(name="buttonText")
</template>









<script>

	import LEDButton from '@/components/AudioMixer/Buttons/LEDButton'
	
	import ClickSounds from '@/sounds/ClickSounds.js'
	import wait from '@/functions/wait'

	const { log, error, warn } = console


	export default {
		name : 'NDIButton',
		_tag : 'ndi-button',

		components : {
			[LEDButton._tag] : LEDButton
		},

		data : ()=>({}),
		
		computed : {},
		
		methods : {
			...ClickSounds,
			clickHandler () {

			}
		},


		props : ['group','name','device','item'],
		mixins : [],
		setup () {},
		async mounted () {}
	}
</script>









<style lang="stylus" scoped></style>









<style lang="stylus"></style>

