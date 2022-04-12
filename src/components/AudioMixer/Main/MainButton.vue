







<template lang="pug">
div.LOC_Main_Button
	led-button(
		:active="active"
		:disabled="disabled"
		:appendIcon="ButtonIcon"
		:color="ActiveColor"
	)
		slot
			slot(name="buttonText")
</template>









<script>

	import LEDButton from '@/components/AudioMixer/Buttons/LEDButton'

	import wait from '@/functions/wait'

	const { log, error, warn } = console

	const data = ()=>({
		muted : false,
		active : false,
		disabled : true
	})

	const props = ['group','name','device','item']

	const computed	= {
		ButtonIcon () {
			if (this.disabled===true) return 'mdi-question-network'
			if (this.muted===true) return 'mdi-volume-mute'
			return 'mdi-volume-high'
		},
		
		ActiveColor () {
			if (this.disabled === true) return 'grey'
			if (this.muted === true) return 'red'
			return 'green'
		}
	}

	export default {
		name : 'MainButton',
		_tag : 'main-button',

		components : {
			[LEDButton._tag] : LEDButton
		},

		data, props, computed,
		
		methods : {
			handler () {
				const payload = {
					source : this.device.source,
					mute : !this.muted
				}

				this.$OBSWS.send('SetMute',payload)
			}
		},
		mixins : [],
		setup () {},
		async mounted () {
			while (!this.$OBSWS._connected) await wait(50)

			this.$OBSWS.send('GetMute',{
				source : this.device.source
			}).then(payload=>{
				this.muted = payload.muted
				this.disabled = false
			}).catch(err=>error(err))

			this.$OBSWS.on('SourceMuteStateChanged',({sourceName,muted})=>{
				if (sourceName !== this.device.source) return
				this.muted = muted
			})

		}
	}
</script>









<style lang="stylus" scoped>

div.LOC_Main_Button
	margin-bottom 6px

</style>









<style lang="stylus"></style>

