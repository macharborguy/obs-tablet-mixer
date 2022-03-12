<template lang="pug">
div.SwitcherBlock
	h4 {{ switcher.name }}
	div
		img(:src="src" :style="SetBackgroundColor")

</template>

<script>

import wait from '@/functions/wait'
const { log } = console
import { forever } from 'async'

export default {
	name : 'SwitcherBlock',
	_tag : 'loc-switcher-block',
	data : ()=>({
		src : null,
		speed : 1000,
	}),
	props : ['switcher'],
	computed : {
		SetBackgroundColor () {
			return {
				'background-color' : this.switcher.bg
			}
		}
	},
	methods : {
		UpdateInfo () {
			this.$OBSWS.send('TakeSourceScreenshot',{
				sourceName : this.switcher.name,
				embedPictureFormat : 'jpg',
				compressionQuality : 10,
				width: 320,
				height: 180
			}).then((res)=>{
				this.src = res.img
				res = null
			})
		},
	},
	beforeMount () {
		if (this.switcher.speed) this.speed = this.switcher.speed
	},
	async mounted () {
		while (!this.$OBSWS._connected) await wait(50)
		this.UpdateInfo()
		forever(async()=>await wait(this.speed).then(()=>{
			if (this.$OBSWS._connected) this.UpdateInfo()
		}))
	},
}
</script>


<style lang="stylus" scoped>
div.SwitcherBlock
	padding 0
	margin 0
	margin-right 10px
	border-radius 8px
	background-color rgba(50,50,50,0.3)
	border 1px solid rgba(200,200,200,0.38)

	h4
		margin 0
		padding 0
		text-align center
	h5
		margin 0
		padding 0
	
	> div
		padding 0
		margin 0

		img
			border-radius 8px
			border-top-left-radius 0
			border-top-right-radius 0
			padding 0
			margin 0
			display block
			background-color black
			box-sizing border-box
			width 320px
			height 180px
	
	&:last-child
		margin-right 0
</style>

<style lang="stylus"></style>

