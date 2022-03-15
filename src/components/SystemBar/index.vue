




<template lang="pug">
v-system-bar(app dark color="red lighten-2")
	v-spacer
	v-icon mdi-cpu-64-bit
	div.pr-5.mr-5 {{ this.mem.usage.toFixed(0) }} %
	v-icon mdi-signal-cellular-outline
	v-icon mdi-battery
	span 
</template>





<script>
const { log, error, warn } = console
import wait from '@/functions/wait'

export default {
	name : 'SystemBar',
	_tag : 'loc-system-bar',

	data : ()=>({
		mem : {
			usage : 0,
			private : 0,
			virtual : 0
		},
		pids : []
	}),

	components : {},
	props : [],

	methods : {},
	computed : {},

	setup () {},


	beforeCreate () {},

	created () {},

	beforeMount () {
		this.$OBS.on('process-memory--custom-message',({mem,pids})=>{
			this.mem.private	= mem.private
			this.mem.virtual	= mem.virtual
			this.mem.usage		= mem.usage
			this.pids			= pids
		})
	},
	mounted () {},

	beforeUpdate () {},
	updated () {},

	activated () {},
	deactivated () {},

	beforeUnmount() {
		this.$OBSWS.off('process-memory--custom-message')
	},
	unmounted () {},


}
</script>





<style lang="stylus" scoped></style>




<style lang="stylus">

.v-system-bar
	background-color black
	color rgb(125,125,125)

	.mdi.v-icon
		color rgb(125,125,125)

</style>

