







<template lang="pug">
div
	channel-row
</template>









<script>
	import ChannelRow from './ChannelRow'

	export default {
		name : 'AudioMixer',
		_tag : 'audio-mixer',
		components : {
			[ChannelRow._tag] : ChannelRow
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









<style lang="stylus" scoped></style>









<style lang="stylus"></style>

