







<template lang="pug">
div.LOC_Channel_Block
	header {{ device.name }}
	section
		fader-block(:device="device")
		buttons-block(:device="device" :datagroups="datagroups")
</template>









<script>
	import FaderBlock from '@/components/AudioMixer/Faders/FaderBlock'
	import ButtonsBlock from '@/components/AudioMixer/Buttons/ButtonsBlock'

	import wait				from '@/functions/wait'
	import { forever }		from 'async'


	export default {
		name : 'ChannelBlock',
		_tag : 'channel-block',
		components : {
			[FaderBlock._tag] : FaderBlock,
			[ButtonsBlock._tag] : ButtonsBlock
		},
		data : ()=>({}),
		computed : {
			datagroups () {
				const { mons, ndiout, ducks } = this.device
				return { mons, ndiout, ducks }
			}
		},
		methods : {},
		props : ['device'],
		mixins : [],
		setup () {},
		async mounted () {}
	}
</script>









<style lang="stylus" scoped>

.LOC_Channel_Block
	border-right 1px solid rgba(black,35%)
	padding-bottom 36px
	box-sizing border-box
	
	> header
		text-align center
		background-color #1A1A1A
		margin 0 10px
		border-radius 0 0 6px 6px
		color lighten(black, 65%)
		font-weight 400px
		text-shadow 0 1px 0 lighten(black, 35%)
		padding 0 15px
	
	> section
		display flex
		flex-direction row
		margin 10px 10px 0 10px

</style>









<style lang="stylus"></style>

