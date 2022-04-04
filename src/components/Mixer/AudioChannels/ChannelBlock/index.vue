












<template lang="pug">
.ChannelBlock
	header {{ device.name }}
	
	.FaderBlock
		.MainOut.FaderGroup
			InputSlider(vertical='vertical' min=0 max=100 value=0)
		.Monitors.FaderGroup(v-if="device.mons.length>0")
			InputSlider(v-for="mon of device.mons" :key="mon" :device="device" :mon="mon" vertical='vertical' min=0 max=100 value=2)
		.NDIOut.FaderGroup(v-if="device.ndiout.length>0")
			InputSlider(v-for="ndi of device.ndiout" :key="ndi" :device="device" :ndi="ndi" vertical='vertical' min=0 max=100 value=2)
		.Ducks.FaderGroup(v-if="device.ducks.length>0")
			InputSlider(v-for="duck of device.ducks" :key="duck" :device="device" :duck="duck" vertical='vertical' min=0 max=100 value=2)
		
	
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


























<style lang="stylus">




.ChannelBlock
	height 100%
	border-left 1px solid rgba(black,9%)
	
	> header
		color darken(white,10%)
		text-shadow 0 1px 1px darken(darken(white,10%),40%)
		font-weight bold
		text-align center
		margin-bottom 5px
		font-size 1.2em
		background-color rgba(black,80%)
		margin 0 10px 5px
		border-bottom-left-radius 5px
		border-bottom-right-radius 5px
	
	.FaderBlock
		display flex
		height calc(100% - 80px)
		box-sizing border-box
		justify-content space-around
		margin 0 10px

		.FaderGroup
			display flex
			margin 0 10px 0 0
			background none
			border-radius 0

			&:last-child
				margin 0
			
			.loc-input-slider--wrap.vertical
				height 100%
				width auto
				background-color rgba(black,20%)
				border-radius 3px
				padding-bottom 20px

				> header
					padding 3px
					background-color rgba(255,255,255,0.25)
					color black
					margin-bottom 10px
					text-align center
					border-top-right-radius 3px
					border-top-left-radius 3px
					text-align center
				
				border-right 1px solid rgba(black,15%)

				&:last-child
					border-right 0

				&:last-child:not(&:first-child)
					border-top-left-radius 0
					border-bottom-left-radius 0

					> header
						border-top-left-radius 0

				&:first-child:not(&:last-child)
					border-top-right-radius 0
					border-bottom-right-radius 0
					
					> header
						border-top-right-radius 0
						
						
</style>

