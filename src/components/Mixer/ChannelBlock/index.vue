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
					v-divider.mb-2

					monitor-out-group(:mons="device.mons" :device="device")
					
					v-divider.mb-2

					template(v-for="ndiout of device.ndiout")
						v-btn(
							color="green"
							:append-icon="ndiout.icon"
						) NDI
</template>

<script>

import AudioToLive from './Buttons/Live'
import MonitorGroup from './Buttons/Monitor-Out'

export default {
	name : 'ChannelBlock',
	_tag : 'channel-block',
	components : {
		[AudioToLive._tag] : AudioToLive,
		[MonitorGroup._tag] : MonitorGroup
	},
	props : ['device'],
	data : ()=>({}),

	beforeMount () {}
}
</script>





<style lang="stylus" scoped>
.ChannelBlock
	padding 20px 0 20px 20px

	&:last-child
		padding-right 20px

.FaderBlock
	width 220px !important
	margin-bottom 0
	padding-bottom 0
	padding 0
	box-sizing border-box
	box-shadow 0 2px 10px 2px black
	border-radius 16px
	border 5px solid #444444
	background url('@/assets/wood.jpg')

	.wrap
		background-color rgba(255,255,150,0.4)
		border-radius 11px
		box-shadow inset 0 0 3px 1px rgba(0,0,0,0.9), inset 0 0 5px 3px rgba(0,0,0,0.5)
		border-top-left-radius 0
		border-top-right-radius 0
	
	.v-row
		padding 0
		margin 0

	header.headerArea
		padding 0
		margin 0
		border 0
		background-color rgba(0,0,0,0.9)
		border-top-left-radius 10px
		border-top-right-radius 10px
		
		div
			text-align center
			color white
			font-weight bolder
			padding 3px

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

