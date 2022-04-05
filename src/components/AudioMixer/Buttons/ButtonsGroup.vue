







<template lang="pug">
div.LOC_Buttons_Group
	header {{ name }}
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
	
	> header
		text-align center
		color darken(white,30%)
		text-shadow 0 1px 0 lighten(black,30%)
		font-variant small-caps
		font-weight 700

</style>









<style lang="stylus"></style>

