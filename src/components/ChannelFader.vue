<template lang="pug">
div.loc-input-slider--wrap(:class="useVertical")
	input(type="range" min="" max="" value="" ).loc-input-slider
</template>


<script>



export default {
	name			: 'ChannelFader',
	data			: ()=>({}),

	props			: ['vertical'],

	methods			: {},
	computed		: {
		useVertical	() {
			return { vertical : this.vertical }
		}
	},

	setup			() {},

	async mounted	() {}
}


</script>





<style lang="stylus" scoped>
.loc-input-slider--wrap

	border-radius 10px
	background-color rgba(0,0,0,0.2)
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

