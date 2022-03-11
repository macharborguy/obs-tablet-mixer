<template lang="pug">
div.SettingsPanel Settings
</template>

<script>
export default {
	name : 'SettingsPanel',
	_tag : 'loc-settings-panel',
	data : ()=>({})
}
</script>


<style lang="stylus" scoped>
div.SettingsPanel
	position absolute
	top 0
	left 0
	right 0
	bottom 0
	background url('@/assets/gray-linen.png')
	border-radius 8px
	transform rotateY(180deg)
	backface-visibility hidden
	transition all 1s ease-in-out
	z-index 10

</style>

<style lang="stylus">
.wrap.show
	div.SettingsPanel
		transform rotateY(0deg)
</style>

