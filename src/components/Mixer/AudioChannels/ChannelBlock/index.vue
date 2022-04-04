









<template lang="pug">
.ChannelBlock
	header
		div {{ device.name }}
	
	.FaderBlock
		.MainOut.FaderGroup
			InputSlider(vertical='vertical' min=0 max=10 value=0)
		.Monitors.FaderGroup
			InputSlider(vertical='vertical' min=0 max=10 value=2)
			InputSlider(vertical='vertical' min=0 max=10 value=5)
			InputSlider(vertical='vertical' min=0 max=10 value=7)
		
	
</template>

<script>

import LargeBlock		from './Blocks/Large'
import SmallBlock		from './Blocks/Small'
import InputSlider		from './Slider/InputSlider'

import SettingsPanel	from './SettingsPanel'

import AudioToLive		from './Buttons/Live'
import DuckingGroup		from './Buttons/Ducking'
import MonitorGroup		from './Buttons/Monitor-Out'
import NDIOutGroup		from './Buttons/NDI-Out'


import ChannelSlider	from './Slider'

import wait				from '@/functions/wait'
import { forever }		from 'async'


export default {
	name : 'ChannelBlock',
	_tag : 'channel-block',
	components : {
		[AudioToLive._tag]		: AudioToLive,
		[DuckingGroup._tag]		: DuckingGroup,
		[MonitorGroup._tag]		: MonitorGroup,
		[NDIOutGroup._tag]		: NDIOutGroup,
		[SettingsPanel._tag]	: SettingsPanel,
		[ChannelSlider._tag]	: ChannelSlider,
		LargeBlock,
		SmallBlock,
		InputSlider
	},
	props : ['device'],
	data : ()=>({
		show: false
	}),

	methods : {
		toggle () {
			this.show = !this.show
		}
	},
	beforeMount () {},
	async mounted () {}
}
</script>





<style lang="stylus" scoped>



.ChannelBlock
	outline 1px solid lime
	
	> header
		color white
		font-weight bold
	
	.FaderBlock
		display flex

		.FaderGroup
			display flex























</style>




<style lang="stylus" scoped></style>

<style lang="stylus"></style>

