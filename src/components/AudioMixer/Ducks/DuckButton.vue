







<template lang="pug">
div.LOC_Duck_Button
	led-button()
		slot
</template>









<script>

	import LEDButton from '@/components/AudioMixer/Buttons/LEDButton'

	export default {
		name : 'DuckButton',
		_tag : 'duck-button',

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

