







<template lang="pug">
div
	channel-row
</template>









<script>
	import ChannelRow from './Channels/ChannelRow'
	import Manager from './Manager'


	let MixerManager



	export default {
		name			: 'AudioMixer',
		_tag			: 'audio-mixer',
		components		: {
			[ChannelRow._tag] : ChannelRow
		},
		data			: ()=>({}),
		computed		: {},
		methods			: {},
		props			: [],
		mixins			: [],
		setup			() {},
		beforeCreate	() {
			MixerManager = Manager({
				emitter : this.emitter
			})
		},
		created			() {},
		beforeMount		() {},
		async mounted	() {}
	}
</script>











<style lang="stylus" scoped></style>









<style lang="stylus"></style>

