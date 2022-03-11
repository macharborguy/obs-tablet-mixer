SourceSwitchers Component


<template lang="pug">


div.d-flex.flex-row.SourceSwitcher
	loc-switcher-block(v-for="switcher of SourceSwitchers" :switcher="switcher")


</template>










<script>

import SwitcherBlock from './SwitcherBlock'


export default {
	name : 'SourceSwitcher',
	_tag : 'loc-source-switcher',
	components : {
		[SwitcherBlock._tag] : SwitcherBlock
	},
	data : ()=>({}),

	computed : {
		SourceSwitchers () {
			return [...this.$store.state.SourceSwitchers]
		}
	}
}


</script>















<style lang="stylus" scoped>
.SourceSwitcher
	padding 10px
	background #eeeeee
	background linear-gradient(to bottom,  #eeeeee 0%, #bbbbbb 100%)


</style>




<style lang="stylus">



</style>

