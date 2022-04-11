







<template lang="pug">
div
	channel-row
</template>









<script>
	import ChannelRow from './Channels/ChannelRow'
	import Manager from './Manager'

	import wait from '@/functions/wait'

	const { log, warn, error } = console

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
				emitter		: this.emitter,
				'$OBSWS'	: this.$OBSWS,
				'$store'	: this.$store
			})
		},
		created			() {},
		beforeMount		() {},
		async mounted	() {
			while (!this.$OBSWS._connected) await wait(50)
		}
	}
</script>











<style lang="stylus" scoped></style>









<style lang="stylus"></style>

