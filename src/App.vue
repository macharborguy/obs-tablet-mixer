<template lang="pug">
v-app
	v-main
		v-container.py-5
			v-row.py-5
				v-col
					.FaderBlock
						.wrap
							v-row
								v-col(cols=6)
									v-slider(direction="vertical" label="Mic" :thumb-size="36")
									.label XLR Mic
								v-col(cols=6).py-2.pr-1
									v-btn(
										v-on:touchstart="startHandler",
										v-on:touchend="endHandler",
										v-on:mousedown="startHandler",
										v-on:mouseup="endHandler",
										@click="clickHandler",
										color="green"
										variant="contained"
									) LIVE
									v-spacer.mb-2
									v-btn(
										v-on:touchstart="startHandler",
										v-on:touchend="endHandler",
										v-on:mousedown="startHandler",
										v-on:mouseup="endHandler",
										@click="clickHandler",
										color="red"
										append-icon="mdi-headphones"
									) To
									v-spacer.mb-2
									v-btn(
										v-on:touchstart="startHandler",
										v-on:touchend="endHandler",
										v-on:mousedown="startHandler",
										v-on:mouseup="endHandler",
										@click="clickHandler",
										color="green"
										append-icon="mdi-phone-voip"
									) To
									v-spacer.mb-2
									v-btn(
										v-on:touchstart="startHandler",
										v-on:touchend="endHandler",
										v-on:mousedown="startHandler",
										v-on:mouseup="endHandler",
										@click="clickHandler",
										color="green"
										append-icon="mdi-gamepad-square"
									) To
									v-spacer.mb-2
									span(v-on:touchstart="startHandler",) {{ yay }}



			v-btn(size="x-small")
				v-icon mdi-format-align-center
			v-btn(size="x-small")
				v-icon mdi-format-align-right
			v-btn(size="x-small")
				v-icon mdi-format-align-justify
</template>



<style lang="stylus">

body
	background url('@/assets/felt.jpg') top center repeat

.v-application
	background-color transparent

html, body, html body, .v-application
	margin 0
	padding 0

</style>

<style lang="stylus" scoped>

.FaderBlock
	width 220px !important
	margin-bottom 0
	padding-bottom 0
	padding 0
	box-sizing border-box
	box-shadow 0 2px 10px 2px black
	border-radius 16px
	border 5px solid #444444
	background url('@/assets/wood.jpg')

	.wrap
		background-color rgba(255,255,150,0.4)
		border-radius 11px
		box-shadow inset 0 0 3px 1px rgba(0,0,0,0.9), inset 0 0 5px 3px rgba(0,0,0,0.5)

	
	.v-row
		padding 0
		margin 0
	.v-col
		padding 0
		margin 0
		text-align center

	.v-input
		position relative
		left 55px
		margin-bottom 0
		padding-bottom 0

	div.label
		position relative
		top -10px
		text-align center
		font-weight bold
		font-size 0.85em
		background-color black
		padding 3px
		overflow hidden
		max-height 3em
		color rgb(220,220,220)
	
	.v-slider .v-slider-thumb__surface
		width 100px !important

</style>



<script>
const { log } = console



const ClickDownSnd = new Audio('./click-down.wav')
const ClickUpSnd = new Audio('./click-up.wav')



const Application = {
	name: 'App',
	data: () => ({
		yay : false
	}),

	components : {},

	computed : {},
	methods : {
		startHandler () {
			ClickDownSnd.play()
		},
		endHandler () {
			ClickUpSnd.play()
		},
		clickHandler () {

		}
	},
	
	props : [],
	mixins : [],
}





















;[
	'beforeCreate',
	'created',
	'beforeMount',
	'mounted',
	'beforeUpdate',
	'updated',
	'beforeUnmount',
	'unmounted',
	'errorCaptured',
	'renderTracked',
	'renderTriggered',
	'activated',
	'deactivated',
	'serverPrefetch'
].forEach(name=>Application[name] = (...args)=>log(name, args))

export default Application
</script>
