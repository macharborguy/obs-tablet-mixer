<template lang="pug">
div.d-flex.flex-row.ChannelRow
	channel-block(v-for="device of ChannelBlocks" :device="device")
</template>


<script>


import ChannelBlock from '../ChannelBlock'

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
}
</script>



<style lang="stylus" scoped>

$background-color = #FDF6EC

.ChannelRow
	width 100%
	overflow hidden
	overflow-x auto
	background-color $background-color
	position relative
	align-items stretch
	display flex
	flex-direction row
	height 420px

</style>


<style lang="stylus"></style>


