


/* eslint-disable no-unused-vars */

import io			from 'socket.io-client'
import iol			from 'socket.io-client-legacy'
import { CONSTANTS }	from '@/constants/index.js'
import EventEmitter from 'eventemitter2'



const { log, error, warn } = console

const SocketSettings = ()=>({
	reconnection		: true,
	reconnectionDelay	: 500
})





const SocketIO			= ()=> (m=>{
	
	return m
})(new EventEmitter())










const SocketIOLegacy	= ()=> (m=>{
	

	m.install = async (App, options)=>{
		const ChatIO = iol.connect( `${CONSTANTS.IO.OLD.SERVER}/ChatWidget`, SocketSettings() )
		const DashIO = iol.connect( `${CONSTANTS.IO.OLD.SERVER}/Dashboard`, SocketSettings() )

		App.config.globalProperties.$ChatIO			= ChatIO
		App.config.globalProperties.$DashIO			= DashIO
		App.config.globalProperties.$IOL			= m


		ChatIO.on('giveaway_started',payload=>log(payload))
		ChatIO.on('giveaway_enter',payload=>log(payload))
		ChatIO.on('giveaway_remind',payload=>log(payload))
		ChatIO.on('giveaway_winner',payload=>log(payload))
		ChatIO.on('giveaway_ended',payload=>log(payload))
		ChatIO.on('giveaway_ended_no_entries',payload=>log(payload))
		ChatIO.on('giveaway_already_running',payload=>log(payload))
		ChatIO.on('giveaway_not_running',payload=>log(payload))
		ChatIO.on('hosted',payload=>log(payload))
		ChatIO.on('hosting',payload=>log(payload))
		ChatIO.on('start_giveaway_dash',payload=>log(payload))
		ChatIO.on('remind_giveaway_dash',payload=>log(payload))
		ChatIO.on('roll_winner_dash',payload=>log(payload))
		ChatIO.on('end_giveaway_dash',payload=>log(payload))
		ChatIO.on('display_tweet',payload=>log(payload))
		ChatIO.on('newTip',payload=>log(payload))
		ChatIO.on('raid_trigger',payload=>log(payload))
		ChatIO.on('subscription',payload=>log(payload))
		ChatIO.on('giftpaidupgrade',payload=>log(payload))
		ChatIO.on('subgift',payload=>log(payload))
		ChatIO.on('resub',payload=>log(payload))
		ChatIO.on('mute_alerts',payload=>log(payload))
		ChatIO.on('subscription.twitch',payload=>log(payload))
		ChatIO.on('follow.twitch',payload=>log(payload))
		ChatIO.on('bits.twitch',payload=>log(payload))
		ChatIO.on('raid.twitch',payload=>log(payload))
		ChatIO.on('host.twitch',payload=>log(payload))
		ChatIO.on('donation.streamlabs',payload=>log(payload))
		ChatIO.on('humble_bundle',payload=>log(payload))
		ChatIO.on('StreamGifts',payload=>log(payload))
		ChatIO.on('popup_message',payload=>log(payload))




		
		ChatIO.on('play_me',payload=>log(payload))
		ChatIO.on('speak_fake',payload=>log(payload))
		ChatIO.on('playSpooky',payload=>log(payload))
		ChatIO.on('speak_donation',payload=>log(payload))
		ChatIO.on('cheerReward',payload=>log(payload))
		ChatIO.on('bits_dropped',payload=>log(payload))
		ChatIO.on('restart_alert',payload=>log(payload))
		ChatIO.on('speak_epicseven_dialog',payload=>log(payload))
		
		
		
		// DashIO.on('information_overload',payload=>log(payload))
		// DashIO.on('process_usage',payload=>log(payload))
		// DashIO.on('debug',payload=>log(payload))


	}



	return m
})(new EventEmitter())




export { SocketIO, SocketIOLegacy }