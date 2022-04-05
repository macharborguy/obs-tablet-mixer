







<template lang="pug">
div.LOC_Main_Button
	led-button()
		slot
			slot(name="buttonText")
</template>









<script>

	import LEDButton from '@/components/AudioMixer/Buttons/LEDButton'

	export default {
		name : 'MainButton',
		_tag : 'main-button',

		components : {
			[LEDButton._tag] : LEDButton
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









<style lang="stylus" scoped></style>









<style lang="stylus"></style>

