






<template lang="pug">
div.LOC_Main_Fader
	header Main
	section.button_wrap
		main-button.button(:device="device")
			template(#buttonText)
	fader-input(
		vertical="vertical"
		:device="device"
		:handler="HandleSlide"
		min=".05"
		max="1"
		step="0.001"
		:theValue="volume"
	)

</template>









<script>
	import Fader from '@/components/AudioMixer/Faders/Fader'
	import MainButton from '@/components/AudioMixer/Main/MainButton'

	import wait from '@/functions/wait'
	import { forever } from 'async'
	import { throttle } from 'underscore'


	const { log, error, warn } = console

	


	const SetVolume = throttle((obs,source,pos)=>{
		obs.send('SetVolume',{
			source,
			volume : pos,
			useDecibel : false
		})
	}, 100)





	const data		= ()=>({
		volume : 0
	})
	const computed	= {}
	const methods	= {
		HandleSlide ({srcElement:{valueAsNumber : pos}}) {
			SetVolume(this.$OBSWS, this.device.source, pos)
		}
	}
	const props		= ['device']


	export default {
		name : 'MainFader',
		_tag : 'main-fader',
		components : {
			[Fader._tag] : Fader,
			[MainButton._tag] : MainButton
		},

		data, computed, methods, props,


		mixins : [],
		setup () {},
		async mounted () {
			while (!this.$OBSWS._connected) await wait(50)
			
			this.$OBSWS.send('GetVolume',{
				source : this.device.source,
				useDecibel : false
			}).then((data)=>{
				this.volume = data.volume
			})
		}
	}
</script>









<style lang="stylus" scoped>
.LOC_Main_Fader
	border-radius 5px
	margin-right 5px
	background-color #1A1A1A
	
	&:last-child
		margin-right 0


	> header
		margin-bottom 0
		text-align center
		color darken(white,30%)
		font-size 0.9em
		font-weight 1000
		text-shadow 0 1px 0 lighten(black,30%)
		line-height 200%
		transform translateY(2px)
		font-variant small-caps

	section.button_wrap
		margin 0 5px 10px
	
	
</style>









<style lang="stylus"></style>

