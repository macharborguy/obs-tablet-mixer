<template lang="pug">
v-app
	v-main
		v-container
			v-row
				v-col.FaderBlock
					v-row
						v-col(cols=6)
							v-slider(direction="vertical" label="Mic" :thumb-size="36")
						v-col(cols=6) Other stuff
			v-btn-toggle
				v-btn
					v-icon mdi-format-align-left
				v-btn
					v-icon mdi-format-align-center
				v-btn
					v-icon mdi-format-align-right
				v-btn
					v-icon mdi-format-align-justify
</template>



<style lang="stylus" scoped>
.v-col.FaderBlock
	width 150px !important

</style>



<script>
const { log } = console








const Application = {
	name: 'App',
	data: () => ({}),

	components : {},

	computed : {},
	methods : {},
	
	props : [],
	mixins : [],
}





















;[
	'beforeCreate',
	'created',
	'beforeMount',
	'mounted',
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
].forEach(name=>Application[name] = (...args)=>log(name, args))

export default Application
</script>
