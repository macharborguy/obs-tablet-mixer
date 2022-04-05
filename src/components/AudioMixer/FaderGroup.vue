







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
	> .faders
		display flex
		flex-direction row

</style>









<style lang="stylus"></style>

