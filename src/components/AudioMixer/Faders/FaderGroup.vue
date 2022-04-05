







<template lang="pug">
div.LOC_Fader_Group
	fader-group-header(:title="title")
	.faders
		slot
	
</template>









<script>
	import FGH from './FaderGroupHeader'

	export default {
		name : 'FaderGroup',
		_tag : 'fader-group',
		components : {
			[FGH._tag] : FGH
		},
		data : ()=>({}),
		computed : {},
		methods : {},
		props : ['title'],
		mixins : [],
		setup () {},
		async mounted () {}
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

