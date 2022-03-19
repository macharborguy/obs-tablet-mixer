
/* eslint-disable no-unused-vars */

import OBSWS from 'obs-websocket-js'
import EventEmitter from 'eventemitter2'

const ConnectionSettings = { address: '192.168.1.24:4444' }

const { log, error, warn } = console

const { parse : jp } = JSON

export default (m=>{
	const socket = new OBSWS()

	const ConnectToOBS = async ()=>new Promise((resolve,reject)=>{
		socket
			.connect(ConnectionSettings)
			.then(resolve).catch(reject)
	})

	socket.setMaxListeners(200)

	m.install = async (App, options) => {
		App.config.globalProperties.$OBSWS = socket
		App.config.globalProperties.$OBS = m
		await ConnectToOBS().then(()=>log('connected')).catch(err=>error('error',err))
	}
	
	// Listen here for custom messages sent thru OBS from other browser sources or services
	socket.on('BroadcastCustomMessage',({realm,data:{json}})=>{
		m.emit(`${realm}--custom-message`, jp(json))
	})


	



	return m
})(new EventEmitter())
