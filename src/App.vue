
<template lang="pug">
v-app
	v-main
		div.d-flex.flex-row.ChannelRow
			channel-block(v-for="device of ChannelBlocks" :device="device")
		div.woodDivider
</template>



<style lang="stylus">

body
	background url('@/assets/felt.png') top center repeat
	

.v-application
	background-color transparent

html, body, html body, .v-application
	margin 0
	padding 0

</style>



<style lang="stylus" scoped>
.ChannelRow
	width 100%
	overflow hidden
	overflow-x auto
	background-color rgba(0,0,0,0.6)

.woodDivider
	height 7px
	background url('@/assets/wood-2.jpg')
	background-size 100% 5000%
	background-position 0px 10px
	border 1px solid rgba(0,0,0,0.7)
	border-left 0
	border-right 0
	
</style>


<script>
const { log } = console



const Application = {
	name: 'App',
	data: () => ({}),

	components : {},

	computed : {
		ChannelBlocks () {
			return [...this.$store.state.devices]
		}
	},
	methods : {},
	
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
].forEach(name=>Application[name] = (...args)=>{
	// log(name, args)
})

export default Application
</script>
