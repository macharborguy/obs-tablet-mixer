







<template lang="pug">
div
	channel-row
</template>









<script>
	import ChannelRow from './Channels/ChannelRow'
	import Manager from './Manager'


	const MixerManager = Manager({})



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
		beforeCreate	() {},
		created			() {},
		beforeMount		() {
			this.emitter.on(
				'register-mixer-component',
				payload=>MixerManager.registerMixerComponent(payload)
			)
		},
		async mounted	() {}
	}
</script>









<style lang="stylus" scoped></style>









<style lang="stylus"></style>

