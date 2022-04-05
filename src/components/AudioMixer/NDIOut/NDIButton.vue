







<template lang="pug">
div.LOC_NDI_Button
	led-button(:appendIcon="item.icon")
		slot
			slot(name="buttonText")
</template>









<script>

	import LEDButton from '@/components/AudioMixer/Buttons/LEDButton'
	import wait from '@/functions/wait'

	export default {
		name : 'NDIButton',
		_tag : 'ndi-button',

		components : {
			[LEDButton._tag] : LEDButton
		},

		data : ()=>({}),
		
		computed : {},
		methods : {},
		props : ['group','name','device','item'],
		mixins : [],
		setup () {},
		async mounted () {}
	}
</script>









<style lang="stylus" scoped></style>









<style lang="stylus"></style>

