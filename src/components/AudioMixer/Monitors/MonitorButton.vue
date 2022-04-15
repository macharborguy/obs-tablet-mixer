







<template lang="pug">
div.LOC_Monitor_Button
	led-button(
		:appendIcon="item.icon"
		:active="active"
		:disabled="disabled"
	)
		slot
			slot(name="buttonText")
</template>






:group="group" :name="name" :device="device"

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
		name : 'MonitorButton',
		_tag : 'monitor-button',

		components : {
			[LEDButton._tag] : LEDButton
		},

		data,
		props,
		
		computed : {},
		methods : {
			
			handler () {
				const switchTo		= (!this.active)
				const payload		= {
					sourceName		: this.device.source,
					filterName		: this.item.filterName,
					filterEnabled	: switchTo
				}

				this.$OBSWS.send('SetSourceFilterVisibility', payload).then(({status})=>{
					if (status==='ok') this.active = switchTo
				}).catch(err=>error(err))
			}
		},
		mixins : [],
		setup () {},
		async mounted () {
			while (!this.$OBSWS._connected) await wait(50)

			this.emitter.emit('register-mixer-component',{
				name	: `${this.device.slug}--${this.name}--${this.item.slug}--btn`,
				type	: 'btn',
				comp	: this
			})


			this.emitter.on('filter_visibility_state_change',filter=>{
				const OfSameSource = !!(filter.sourceName===this.device.source)
				const HasSameName = !!(filter.filterName===this.item.filterName)

				if (OfSameSource && HasSameName) this.active = filter.filterEnabled
			})
		}
	}
</script>









<style lang="stylus" scoped></style>









<style lang="stylus"></style>

