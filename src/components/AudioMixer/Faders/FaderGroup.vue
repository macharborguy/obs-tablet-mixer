







<template lang="pug">
div.LOC_Fader_Group(v-show="visible")
	fader-group-header(
		:title="title"
		@click="toggleVisibility"
		v-on:touchstart="clickDown"
		v-on:touchend="clickUp"
	)
	.faders
		slot
	
</template>









<script>
	import FGH				from './FaderGroupHeader'
	import wait				from '@/functions/wait'
	import ClickSounds		from '@/sounds/ClickSounds.js'

	const { log, warn, error } = console

	export default {
		name : 'FaderGroup',
		_tag : 'fader-group',
		components : {
			[FGH._tag] : FGH
		},
		data : ()=>({
			visible : false
		}),
		computed : {
			isVisible () {
				return !!this.visible
			}
		},
		methods : {
			...ClickSounds,
			toggleVisibility () {
				this.visible = !this.visible

				this.emitter.emit('toggle-group-visibility', {
					type : 'fader-group',
					comp : this,
					visibility : this.visible
				})
			},
			makeVisible		() {
				this.visible = true
			},
			makeHidden		() {
				this.visible = false
			}
		},
		props : ['title','slug','device'],
		mixins : [],
		setup () {},


		async mounted () {
			while (!this.$OBSWS._connected) await wait(50)

			this.emitter.emit('register-mixer-component',{
				name	: `${this.device.slug}--${this.slug}--fader-group`,
				type	: 'fader-group',
				comp	: this,
			})
		}

	}
</script>









<style lang="stylus" scoped>

.LOC_Fader_Group
	background-color #1A1A1A
	margin-right 5px
	border-radius 5px

	&:last-child
		margin-right 0

	> .faders
		background-color #B0B2B4
		display flex
		flex-direction row
		border-radius 5px
		margin 5px

</style>









<style lang="stylus"></style>

