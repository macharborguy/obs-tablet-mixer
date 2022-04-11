







<template lang="pug">
div.LOC_Main_Button
	led-button(
		:active="active"
		:disabled="disabled"
	)
		slot
			slot(name="buttonText")
</template>









<script>

	import LEDButton from '@/components/AudioMixer/Buttons/LEDButton'

	import wait from '@/functions/wait'

	const { log, error, warn } = console

	const data = ()=>({
		active : false,
		disabled : true
	})

	const props = ['group','name','device','item']



	export default {
		name : 'MainButton',
		_tag : 'main-button',

		components : {
			[LEDButton._tag] : LEDButton
		},

		data, props,
		
		computed : {},
		methods : {},
		mixins : [],
		setup () {},
		async mounted () {}
	}
</script>









<style lang="stylus" scoped>

div.LOC_Main_Button
	margin-bottom 6px

</style>









<style lang="stylus"></style>

