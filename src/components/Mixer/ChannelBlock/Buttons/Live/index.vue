<template lang="pug">
v-btn(
	v-on:touchstart="clickDown"
	v-on:touchend="clickUp"
	@click="clickHandle"
	:color="ActiveColor"
	variant="contained"
	append-icon="mdi-volume-high"
) LIVE
</template>

<script>
import ClickSounds from '@/sounds/ClickSounds.js'
import wait from '@/functions/wait'
import { until } from 'async'

const { log } = console



export default {
	name : 'AudioToLIVE',
	_tag : 'audio-to-live',


	data : ()=>({
		muted : false,
		disabled : true
	}),

	props : ['device'],


	computed : {
		ActiveColor () {
			if (this.disabled === true) return 'grey'
			if (this.muted === true) return 'red'
			return 'green'
		},

		SourceName () {
			return {
				source : this.device.source
			}
		},
	},


	methods : {
		...ClickSounds,
		clickHandle () {
			const payload = {
				...this.SourceName,
				mute : !this.muted
			}
			this.$OBSWS.send('SetMute',payload)
		}
	},


	async beforeMount () {
		await until(
			async ()=>this.$OBSWS._connected,
			async ()=>await wait(50)
		)
		

		await this.$OBSWS.send('GetMute',{
			source : this.device.source
		}).then(({muted})=>{
			this.muted = muted
			this.disabled = false
		})

		this.$OBSWS.on('SourceMuteStateChanged',({sourceName,muted})=>{
			if (sourceName !== this.device.source) return
			this.muted = muted
		})
	}
}
</script>


<style lang="stylus" scoped></style>

<style lang="stylus"></style>

