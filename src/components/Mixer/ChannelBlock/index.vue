









<template lang="pug">
.ChannelBlock
	.FaderBlock
		header.headerArea
			div {{ device.name }}
		.wrap
			v-row
				v-col(cols=6).pt-4
					v-slider(
						direction="vertical"
						label="Mic"
						:thumb-size="36"
					)
				v-col(cols=6).py-2.pr-1.pt-4
					audio-to-live(:device="device")
					v-spacer.mb-2
					monitor-out-group(:mons="device.mons" :device="device")
					ndi-out-group(:ndiout="device.ndiout" :device="device")
					ducking-group(:ducks="device.ducks" :device="device")
</template>

<script>


import AudioToLive from './Buttons/Live'
import DuckingGroup from './Buttons/Ducking'
import MonitorGroup from './Buttons/Monitor-Out'
import NDIOutGroup from './Buttons/NDI-Out'

export default {
	name : 'ChannelBlock',
	_tag : 'channel-block',
	components : {
		[AudioToLive._tag]	: AudioToLive,
		[DuckingGroup._tag]	: DuckingGroup,
		[MonitorGroup._tag]	: MonitorGroup,
		[NDIOutGroup._tag]	: NDIOutGroup
	},
	props : ['device'],
	data : ()=>({}),

	beforeMount () {}
}
</script>





<style lang="stylus" scoped>
.ChannelBlock
	padding 0

	&:last-child
		padding-right 0

.FaderBlock
	width 250px !important
	margin-bottom 0
	padding-bottom 0
	padding 0
	box-sizing border-box
	padding 3px
	background url('@/assets/wood.jpg')
	background-size 120% 120%

	.wrap
		background-color rgba(20,0,0,0.7)
		border-radius 8px
		box-shadow inset 0 0 3px 1px rgba(0,0,0,0.9), inset 0 0 5px 3px rgba(0,0,0,0.5)
	
	.v-row
		padding 0
		margin 0

	header.headerArea
		padding 0
		margin 0
		border 0
		background-color rgba(255, 250, 242,0.5)
		border-radius 10px
		text-shadow 0 -1px 1px #7d3b2c
		margin-bottom 4px
		
		div
			text-align center
			color rgb(40,40,40)
			font-weight bolder
			padding 3px
			font-size 1.08em

	.v-col
		padding 0
		margin 0
		text-align center

	.v-input
		position relative
		left 55px
		margin-bottom 0
		padding-bottom 0
	
	.v-slider .v-slider-thumb__surface
		width 100px !important

</style>




<style lang="stylus" scoped></style>

<style lang="stylus"></style>

