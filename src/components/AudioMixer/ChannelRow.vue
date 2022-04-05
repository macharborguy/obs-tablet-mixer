







<template lang="pug">
div.LOC_Channel_Row
	channel-block(v-for="device of ChannelBlocks" :device="device" :key="device.name")
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
		computed : {
			ChannelBlocks () {
				return [...this.$store.state.devices]
			}
		},
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
	overflow-x scroll

</style>









<style lang="stylus"></style>

