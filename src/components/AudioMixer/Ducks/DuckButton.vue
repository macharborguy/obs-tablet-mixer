







<template lang="pug">
div.LOC_Duck_Button
	led-button(
		:appendIcon="item.icon"
		:active="active"
		:disabled="disabled"
	)
		slot
			slot(name="buttonText")
</template>









<script>

	import LEDButton from '@/components/AudioMixer/Buttons/LEDButton'
	import wait from '@/functions/wait'

	const { log, warn, error } = console


	

	const data = ()=>({
		active : false,
		disabled : true
	})

	const props = ['group','name','device','item']





	export default {
		name : 'DuckButton',
		_tag : 'duck-button',

		components : {
			[LEDButton._tag] : LEDButton
		},

		data,
		props,


		computed : {},
		methods : {},
		mixins : [],
		setup () {},


		
		async mounted () {
			while (!this.$OBSWS._connected) await wait(50)

			this.emitter.emit('register-mixer-component',{
				name	: `${this.device.slug}--${this.name}--${this.item.slug}--btn`,
				type	: 'btn',
				comp	: this,
			})

			this.emitter.on('filter_visibility_state_change',filter=>{
				const OfSameSource = !!(filter.sourceName===this.device.source)
				const HasSameName = !!(filter.filterName===this.item.filterName)
				
				if (OfSameSource && HasSameName) {
					this.active = filter.filterEnabled
				}
			})

		}
	}
</script>









<style lang="stylus" scoped></style>









<style lang="stylus"></style>

