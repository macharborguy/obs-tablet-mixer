







<template lang="pug">
div.LOC_Buttons_Group(v-show="visible")
	header(
		@click="toggleVisibility"
		v-on:touchstart="clickDown"
		v-on:touchend="clickUp"
	) {{ name }}
	.buttons
		slot
</template>









<script>
	import wait from '@/functions/wait'
	import ClickSounds from '@/sounds/ClickSounds.js'
	
	const { log, warn, error } = console

	export default {
		name : 'ButtonsGroup',
		_tag : 'buttons-group',
		data : ()=>({
			visible : true
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
					type : 'btn-group',
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
		props : ['group','name','device'],
		mixins : [],
		setup () {},
		
		
		



		async mounted () {
			while (!this.$OBSWS._connected) await wait(50)


			this.emitter.emit('register-mixer-component',{
				name	: `${this.device.slug}--${this.name}--btn-group`,
				type	: 'btn-group',
				comp	: this,
			})
		}






	}
</script>









<style lang="stylus" scoped>

.LOC_Buttons_Group
	background-color #1A1A1A
	border-radius 5px
	margin-bottom 5px
	min-width 85px

	&:last-child
		margin-bottom 0
	
	> header
		text-align center
		color darken(white,30%)
		text-shadow 0 1px 0 lighten(black,30%)
		font-variant small-caps
		font-weight 700

	> .buttons
		display flex
		flex-direction column
		text-align center
		justify-content centered
		margin 5px

</style>









<style lang="stylus">


.LOC_Buttons_Group
	> .buttons
		.button
			.v-btn
				margin-bottom 5px

			&:last-child
				.v-btn
					margin-bottom 0


</style>

