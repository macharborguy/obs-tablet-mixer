import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import mitt from 'mitt'
import Vue3TouchEvents from 'vue3-touch-events'
import OBSWS from './plugins/obsws'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'


import ChannelRow from '@/components/Mixer/AudioChannels/ChannelRow'
import SourceSwitchers from '@/components/Mixer/SourceSwitchers'
import SystemBar from '@/components/SystemBar'



loadFonts()

const emitter = mitt()

const Application = createApp(App)
	.use(OBSWS)
	.use(router)
	.use(store)
	.use(vuetify)
	.use(Toast,{})
	.use(Vue3TouchEvents)


;[ChannelRow,SourceSwitchers,SystemBar].forEach(comp=>Application.component(comp._tag, comp))


Application.config.globalProperties.emitter = emitter
Application.mount('#app')
