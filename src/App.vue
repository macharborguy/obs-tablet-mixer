
<template lang="pug">
v-app
	loc-system-bar
	v-main
		audio-mixer
		div.leatherDivider
		//- loc-source-switcher
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


*
	// outline 1px dotted rgba(black,45%)


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
const { log, error, warn } = console
import wait from '@/functions/wait'
import { useToast } from "vue-toastification"
import { forever } from 'async'


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



	async mounted () {
		while (!this.$OBSWS._connected) await wait(50)

		//this.$OBSWS.on('SourceVolumeChanged', ({volume,volumeDb})=>log([(volume*100).toFixed(3),`${volumeDb.toFixed(3)} Db`]))
	}


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
