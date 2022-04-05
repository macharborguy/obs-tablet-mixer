







<template lang="pug">
div.LOC_Channel_Block
	header {{device.name}}
	fader-block(:device="device")
</template>









<script>
	import FaderBlock from './FaderBlock'

	export default {
		name : 'ChannelBlock',
		_tag : 'channel-block',
		components : {
			[FaderBlock._tag] : FaderBlock
		},
		data : ()=>({}),
		computed : {},
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
	> header
		text-align center

</style>









<style lang="stylus"></style>

