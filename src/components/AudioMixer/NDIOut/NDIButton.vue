







<template lang="pug">
div.LOC_NDI_Button
	led-button(
		:appendIcon="item.icon"
	)
		slot
			slot(name="buttonText")
</template>









<script>

	import LEDButton from '@/components/AudioMixer/Buttons/LEDButton'
	
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
		
		methods : {},


		props : ['group','name','device','item'],
		mixins : [],
		setup () {},
		async mounted () {
			while (!this.$OBSWS._connected) await wait(50)
			this.emitter.emit('register-mixer-component',{
				name	: `${this.device.slug}--${this.name}--${this.item.slug}--btn`,
				type	: 'btn',
				comp	: this,
			})
		}
	}
</script>









<style lang="stylus" scoped></style>









<style lang="stylus"></style>

