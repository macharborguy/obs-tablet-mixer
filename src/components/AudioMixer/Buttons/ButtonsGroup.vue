







<template lang="pug">
div.LOC_Buttons_Group
	header {{ name }}
	.buttons
		slot
</template>









<script>

	export default {
		name : 'ButtonsGroup',
		_tag : 'buttons-group',
		data : ()=>({}),
		computed : {},
		methods : {},
		props : ['group','name','device'],
		mixins : [],
		setup () {},
		async mounted () {}
	}
</script>









<style lang="stylus" scoped>

.LOC_Buttons_Group
	background-color #1A1A1A
	border-radius 5px
	margin-bottom 5px

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

