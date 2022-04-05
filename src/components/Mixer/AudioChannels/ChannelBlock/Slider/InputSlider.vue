



<template lang="pug">
div.loc-input-slider--wrap(:class="useVertical" )
	header
		template(v-if="mon && mon.icon")
			| TO 
			v-icon(size="sm") {{ mon.icon }}
		template(v-else-if="ndi && ndi.icon")
			| TO 
			v-icon(size="sm") {{ ndi.icon }}
		template(v-else-if="duck && duck.icon")
			v-icon(size="sm") mdi-duck
			v-icon(size="sm") {{ duck.icon }}
		template(v-else)
			| MAIN
	
	input(type="range" :min="min" :step="step" :max="max" :value="value").loc-input-slider

	slot
</template>






<script>

	import wait				from '@/functions/wait'
	import { forever }		from 'async'


	const { log, error, warn } = console



	export default {
		name : 'InputSlider',
		data : ()=>({}),
		props : ['vertical','min','max','step', 'height', 'duck','value', 'device', 'mon', 'ndi'],
		computed : {
			useVertical () {
				return { vertical : this.vertical }
			},
			useHeight () {
				return { height : `${this.height}px` }
			}
		},

		async mounted () {
			while (!this.$OBSWS._connected) await wait(50)
			log(this.device, this.mon)
		}
	}
</script>


<style lang="stylus" scoped>
.loc-input-slider--wrap
	&.vertical
		.loc-input-slider
			-webkit-appearance slider-vertical
			width 80px

.loc-input-slider
	margin 0
	padding 0

</style>

<style lang="stylus"></style>

