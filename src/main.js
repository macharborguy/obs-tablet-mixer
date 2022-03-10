import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import mitt from 'mitt'
import Vue3TouchEvents from 'vue3-touch-events'
import OBSWS from './plugins/obsws'

import ChannelRow from '@/components/Mixer/ChannelRow'




loadFonts()

const emitter = mitt()

const Application = createApp(App)
	.use(OBSWS)
	.use(router)
	.use(store)
	.use(vuetify)
	.use(Vue3TouchEvents)


;[ChannelRow].forEach(comp=>Application.component(comp._tag, comp))


Application.config.globalProperties.emitter = emitter
Application.mount('#app')
