






<template lang="pug">
div.LOC_Fader_Group_Header
	v-col
		v-row
			v-spacer
			| {{ title }}
			v-spacer
			v-icon(size="x-small").pt-1 mdi-window-minimize
</template>








<script>

	export default {
		name : 'FaderGroupHeader',
		_tag : 'fader-group-header',
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

.LOC_Fader_Group_Header
	text-align center

</style>









<style lang="stylus"></style>

