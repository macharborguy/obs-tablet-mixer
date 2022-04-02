<template lang="pug">
v-slider.ChannelSlider(
	ref="ChannelSlider"
	@update:modelValue="HandleSlide"
	direction="vertical"
	label="Mic"
	:thumb-size="36"
	min="0"
	max="1"
	v-model="volume"
)
</template>

<script>
import wait from '@/functions/wait'
const { log, error, warn } = console
import { forever } from 'async'
import { throttle } from 'underscore'







const SetVolume = throttle((obs,source,pos)=>{
	obs.send('SetVolume',{
		source,
		volume : pos,
		useDecibel : false
	})
},100)



export default {
	name : 'ChannelSlider',
	_tag : 'loc-channel-slider',
	data : ()=>({
		volume : 0
	}),
	props : ['device'],
	computed : {},
	methods : {
		HandleSlide (pos) {
			SetVolume(this.$OBSWS, this.device.source, pos)
		}
	},

	setup () {},
	beforeMount () {},
	async mounted () {
		while (!this.$OBSWS._connected) await wait(50)
		this.$OBSWS.send('GetVolume',{
			source : this.device.source,
			useDecibel : true
		}).then((data)=>{
			this.volume = data.volume
		})
	}
}
</script>


<style lang="stylus" scoped></style>

<style lang="stylus">
.ChannelSlider
	.v-slider-track
		background-color black

	.v-slider-thumb--pressed
		.v-slider-thumb__surface
			border 3px solid #0080ff

	.v-slider-thumb__surface
		background #0a0809
		background linear-gradient(to bottom, #0a0809 0%, #0a0e0a 45%, #aebcbf 45%, #aebcbf 55%, #0a0e0a 55%, #0a0809 100%)
		width 70px
		border-radius 8px

		&:before, &:after, &::before, &::after
			display none !important

	.v-slider-thumb__ripple
		display none !important
</style>

