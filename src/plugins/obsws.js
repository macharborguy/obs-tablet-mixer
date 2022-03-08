
/* eslint-disable no-unused-vars */

import OBSWS from 'obs-websocket-js'
import EventEmitter from 'eventemitter2'

export default (m=>{
	const socket = new OBSWS()
	socket.connect({ address: 'ryzen7:4444' })
		.then(()=>console.log('connected'))
		.catch(err=>console.error(err))


	m.install = (App, options) => {
		console.log(App.config.globalProperties)
		App.config.globalProperties.$OBSWS = socket
	}

	return m
})(new EventEmitter())
