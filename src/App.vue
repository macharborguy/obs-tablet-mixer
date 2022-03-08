
<template lang="pug">
v-app
	v-main
		div.d-flex.flex-row
			channel-block(v-for="device of $store.state.devices" :device="device")
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



<script>
const { log } = console



const Application = {
	name: 'App',
	data: () => ({}),

	components : {},

	computed : {},
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
