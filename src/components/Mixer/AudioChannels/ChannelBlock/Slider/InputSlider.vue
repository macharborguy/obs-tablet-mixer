<template lang="pug">
div.loc-input-slider--wrap(:class="useVertical")
	input(type="range" :min="min" :max="max" :value="value" ).loc-input-slider
</template>

<script>

	export default {
		name : 'InputSlider',
		data : ()=>({}),
		props : ['vertical','min','max','value'],
		computed : {
			useVertical () {
				return { vertical : this.vertical }
			}
		}
	}
</script>


<style lang="stylus" scoped>
.loc-input-slider--wrap

	border-radius 10px
	width auto
	height 100%
	padding-bottom 10px

	&.vertical
		.loc-input-slider
			margin-top 16px
			-webkit-appearance slider-vertical
			width 60px
			height 100%

.loc-input-slider
	margin 0
	padding 0

</style>

<style lang="stylus"></style>

