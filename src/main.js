import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import mitt from 'mitt'
import Vue3TouchEvents from 'vue3-touch-events'





loadFonts()

const emitter = mitt()

const Application = createApp(App).use(router).use(store).use(vuetify).use(Vue3TouchEvents)

Application.config.globalProperties.emitter = emitter
Application.mount('#app')
