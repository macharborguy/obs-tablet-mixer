







<template lang="pug">
div.LOC_Channel_Block
	header Channel Block Heading
	fader-block
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
		props : [],
		mixins : [],
		setup () {},
		async mounted () {}
	}
</script>









<style lang="stylus" scoped>

.LOC_Channel_Block
	border-right 1px solid rgba(black,35%)
	> header
		text-align center

</style>









<style lang="stylus"></style>

