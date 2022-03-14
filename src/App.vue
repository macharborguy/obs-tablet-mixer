
<template lang="pug">
v-app
	//- v-system-bar(app dark color="red lighten-2")
	//- 	v-spacer
	//- 	v-icon mdi-wifi-strength-4
	//- 	v-icon mdi-signal-cellular-outline
	//- 	v-icon mdi-battery
	//- 	span 12:30
	v-main
		channel-row
		div.leatherDivider
		loc-source-switcher
</template>



<style lang="stylus">

body
	background url('@/assets/felt.png') top center repeat
	

.v-application
	background-color transparent

html, body, html body, .v-application
	margin 0
	padding 0

.v-system-bar
	background-color black
	color rgb(125,125,125)

	.mdi.v-icon
		color rgb(125,125,125)

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


	mounted () {
		this.$OBSWS.on('BroadcastCustomMessage',({realm,data})=>{})
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
