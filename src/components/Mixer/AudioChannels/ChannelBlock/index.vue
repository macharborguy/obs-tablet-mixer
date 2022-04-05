












<template lang="pug">

.ChannelBlock
	
	header {{ device.name }}
	
	.FaderBlock
		.MainOut.FaderGroup
			.FaderGroup_Wrap
				InputSlider(vertical='vertical' step="0.5" min=0 max=100 value=0)
					div Main
		.Monitors(v-if="device.mons.length>0").FaderGroup
			header
				v-col
					v-row
						v-spacer
						div Mon.
						v-spacer
						v-icon(size="x-small") mdi-window-minimize
			.FaderGroup_Wrap
				InputSlider(v-for="mon of device.mons" :key="mon" :device="device" :mon="mon" vertical='vertical' step="0.5"  min=0 max=100 value=2)
					div Mon
		.NDIOut(v-if="device.ndiout.length>0").FaderGroup
			header
				v-col
					v-row
						v-spacer
						div NDI
						v-spacer
						v-icon(size="x-small")  mdi-window-minimize
			.FaderGroup_Wrap
				InputSlider(v-for="ndi of device.ndiout" :key="ndi" :device="device" :ndi="ndi" vertical='vertical' step="0.5"  min=0 max=100 value=2)
					div NDI
		.Ducks(v-if="device.ducks.length>0").FaderGroup
			header
				v-col
					v-row
						v-spacer
						div Ducks
						v-spacer
						v-icon(size="x-small")  mdi-window-minimize
			.FaderGroup_Wrap
				InputSlider(v-for="duck of device.ducks" :key="duck" :device="device" :duck="duck" vertical='vertical' step="0.5" min=0 max=100 value=2)
					div Duck

		
	
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
	border-left 1px solid rgba(black,9%)
	display flex
	flex-direction column
	padding-bottom 10px
	
	> header
		color darken(white,10%)
		text-shadow 0 1px 1px darken(darken(white,10%),40%)
		font-weight 200
		text-align center
		margin-bottom 5px
		font-size 1em
		background-color rgba(black,80%)
		margin 0 10px 10px
		border-bottom-left-radius 12px
		border-bottom-right-radius 12px
	
	.FaderBlock
		display flex
		flex-direction row
		box-sizing border-box
		justify-content space-around
		margin 0 10px

		.FaderGroup
			margin 0 10px 0 0
			background none
			border-radius 0

			> header
				text-align center
				font-size 0.8em

			&:last-child
				margin 0

			.FaderGroup_Wrap
				display flex
				flex-direction row
				//outline 1px solid rgba(cyan,50%)

				.loc-input-slider--wrap.vertical
					width auto
					background-color rgba(black,20%)
					padding-bottom 20px
					display flex
					flex-direction column
					border-right 1px solid rgba(black,15%)
					//outline 1px solid maroon


					> header
						padding 3px
						background-color rgba(255,255,255,0.25)
						color black
						text-align center
						text-align center
						margin-bottom 5px
						//outline 1px solid violet
					
					
					&:first-child
						// outline 3px solid red
						border-top-left-radius 12px
						border-bottom-left-radius 12px

					&:last-child
						// outline 3px solid green
						border-top-right-radius 12px
						border-bottom-right-radius 12px
						border-right 0

					&:not(&:first-child):not(&:last-child)
						// outline 3px solid lime
					



					.loc-input-slider
						height 200px
						box-sizing border-box
						
						
</style>

