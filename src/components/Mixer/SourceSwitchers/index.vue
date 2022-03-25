SourceSwitchers Component


<template lang="pug">


div.d-flex.flex-row.SourceSwitcher
	div
		h4 Program Feed
		div
			img(:src="src")
	loc-switcher-block(v-for="switcher of SourceSwitchers" :switcher="switcher")


</template>










<script>

import SwitcherBlock from './SwitcherBlock'
const { log } = console
import { forever } from 'async'
import wait from '@/functions/wait'


export default {
	name : 'SourceSwitcher',
	_tag : 'loc-source-switcher',
	components : {
		[SwitcherBlock._tag] : SwitcherBlock
	},
	data : ()=>({
		src : null,
		speed : 1000,
	}),

	computed : {
		SourceSwitchers () {
			return [...this.$store.state.SourceSwitchers]
		}
	},

	methods : {
		UpdateProgramFeed () {
			this.$OBSWS.send('TakeSourceScreenshot',{
				embedPictureFormat : 'jpg',
				compressionQuality : 75,
				width: 320,
				height: 180
			}).then((res)=>{
				this.src = res.img
				res = null
			})
		}
	},


	async mounted () {
		while (!this.$OBSWS._connected) await wait(50)
		this.UpdateProgramFeed()
		forever(async()=>await wait(this.speed).then(()=>{
			if (this.$OBSWS._connected) this.UpdateProgramFeed()
		}))
	},
}


</script>















<style lang="stylus" scoped>
.SourceSwitcher
	padding 10px
	background #eeeeee
	background linear-gradient(to bottom,  #eeeeee 0%, #bbbbbb 100%)

	width 100%
	overflow hidden
	overflow-x auto
	background-color rgba(0,0,0,0.6)
	position relative

	> div
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
				width 284px
				height 160px
		
		&:last-child
			margin-right 0
</style>




<style lang="stylus">



</style>

