







<template lang="pug">
div.LOC_Channel_Row
	channel-block
	channel-block
	channel-block
</template>









<script>
	import ChannelBlock from './ChannelBlock'

	export default {
		name : 'ChannelRow',
		_tag : 'channel-row',
		components : {
			[ChannelBlock._tag] : ChannelBlock
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

.LOC_Channel_Row
	display flex
	flex-direction row

</style>









<style lang="stylus"></style>

