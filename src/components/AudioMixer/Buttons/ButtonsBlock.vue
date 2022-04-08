







<template lang="pug">
div.LOC_Buttons_Block
	template(v-for="(group,name) in datagroups" :key="name")
		template(v-if="group.length>0")
			buttons-group(:group="group" :class="{[name]:name}" :device="device" :name="name")
				template(v-if="name === 'mons'")
					monitor-button.button(v-for="item of group" :key="item.name" :item="item" :group="group" :name="name" :device="device")
						template(#buttonText) TO
				template(v-else-if="name === 'ndiout'")
					ndi-button.button(v-for="item of group" :key="item.name" :item="item" :group="group" :name="name" :device="device")
						template(#buttonText) TO
				template(v-else-if="name === 'ducks'")
					duck-button.button(v-for="item of group" :key="item.name" :item="item" :group="group" :name="name" :device="device")
						//- template(#buttonText) {{item.name}}
</template>









<script>

	import ButtonsGroup from './ButtonsGroup'

	import DuckButton from '@/components/AudioMixer/Ducks/DuckButton'
	import MonitorButton from '@/components/AudioMixer/Monitors/MonitorButton'
	import NDIButton from '@/components/AudioMixer/NDIOut/NDIButton'

	import wait from '@/functions/wait'

	export default {
		name : 'ButtonsBlock',
		_tag : 'buttons-block',
		components : {
			[ButtonsGroup._tag]		: ButtonsGroup,
			[DuckButton._tag]		: DuckButton,
			[MonitorButton._tag]	: MonitorButton,
			[NDIButton._tag]		: NDIButton
		},
		data : ()=>({}),
		computed : {},
		methods : {},
		props : ['device','datagroups'],
		mixins : [],
		setup () {},
		beforeMount () {},
		async mounted () {
			while (!this.$OBSWS._connected) await wait(50)
		}
	}
</script>









<style lang="stylus" scoped>
.LOC_Buttons_Block
	display flex
	flex-direction column
	border-radius 5px

	> header
		text-align center
</style>









<style lang="stylus"></style>

