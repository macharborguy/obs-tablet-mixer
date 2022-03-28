
<template lang="pug">
v-app
	loc-system-bar
	v-main
		channel-row
		div.leatherDivider
		loc-source-switcher
		div.leatherDivider
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

.leatherDivider
	height 20px
	background url('@/assets/black-leather.jpg')
	background-size 1280px 400px
	border 1px solid rgba(0,0,0,0.7)
	border-left 0
	border-right 0
	
</style>


<script>
const { log } = console
import wait from '@/functions/wait'
import { useToast } from "vue-toastification"


const Application = {
	name: 'App',
	data: () => ({}),

	components : {},
	
	props : [],
	mixins : [],

	setup () {
		const toast = useToast()
		
		return { toast }
	},

}



;[
	'beforeCreate',
	'created',
	'beforeMount',
	// 'mounted',
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
