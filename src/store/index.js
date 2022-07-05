import { createStore } from 'vuex'



const monitors = {
	headphones	: ()=>({ slug: 'headphones', name: 'To Headphones', icon: 'mdi-headphones', filterName: 'To Headphones' }),
	voip		: ()=>({ slug: 'voip', name: 'To VoIP', icon: 'mdi-phone-voip', filterName: 'To VoIP' })
}

const ndiout = {
	'gaming-pc-voip'	: ()=>({ slug: 'gaming-pc-voip', name: 'To Gaming PC VoIP', filterName: 'To Gaming PC VoIP', icon: 'mdi-gamepad-square' })
}

const ducks = {
	'giveaways' : ()=>({ slug: 'giveaways', name : 'Giveaways', icon: 'mdi-gift', filterName: 'SE Giveaways' }),
	'old-alerts' : ()=>({ slug: 'old-alerts', name : 'Old Alerts', icon: 'mdi-bullhorn', filterName: 'Alert Ducker 1 - Legacy Alerts' }),
	'sound-alerts' : ()=>({ slug: 'sound-alerts', name : 'SoundAlerts', icon: 'mdi-volume-high', filterName: 'Alert Ducker 2 - SoundAlerts' }),
	'microphone' : ()=>({ slug: 'microphone', name : 'Microphone', icon: 'mdi-microphone', filterName: 'Mic Ducker' }),
	'discord' : ()=>({ slug: 'discord', name : 'Discord', icon: 'mdi-discord', filterName: 'Discord Ducker' }),
}


const devices = [
	
	{
		index		: null,
		name		: 'XLR Mic',
		slug		: 'xlr-mic',
		source		: 'Behringer Main Out (For XLR Mic)',
		ducks		: [],
		mons		: [ 'headphones', 'voip' ],
		ndiout		: [ 'gaming-pc-voip' ]
	},
	{
		index		: null,
		name		: 'Music Outputs',
		slug		: 'music-player',
		source		: 'Music App Outputs',	// Rename later to "Music Player"
		ducks		: [ 'old-alerts', 'sound-alerts', 'microphone', 'discord' ],
		mons		: [ 'headphones', 'voip' ],
		ndiout		: []
	},
	{
		index		: null,
		name		: 'Discord',
		slug		: 'discord',
		source		: 'Discord from Acer Monitor',	// Rename later to "Music Player"
		ducks		: [],
		mons		: [ 'headphones' ],
		ndiout		: []
	},
	{
		index		: null,
		name		: 'Gaming PC NDI-In',
		slug		: 'gaming-pc-ndi-in',
		source		: 'Game AUdio NDI',
		ducks		: [ 'old-alerts', 'sound-alerts', 'microphone', 'discord'],
		mons		: [ 'headphones', 'voip' ],
		ndiout		: []
	},
	{
		index		: null,
		name		: 'Elgato HD60',
		slug		: 'elgato-hd60',
		source		: '[ Elgato ] GameCapture HD60',
		ducks		: [ 'old-alerts', 'sound-alerts', 'microphone', 'discord'],
		mons		: [ 'headphones', 'voip' ],
		ndiout		: []
	},
	{
		index		: null,
		name		: '👁️ ORBY',
		slug		: 'orby',
		source		: '[ Widget ] Orby',
		ducks		: [],
		mons		: [ 'headphones', 'voip' ],
		ndiout		: []
	},

	{
		index		: null,
		name		: 'SoundAlerts',
		slug		: 'sound-alerts',
		source		: '[ Widget ] SoundAlerts',
		ducks		: [],
		mons		: [ 'headphones', 'voip' ],
		ndiout		: []
	},
	{
		index		: null,
		name		: 'Old Alerts',
		slug		: 'old-alerts',
		source		: '[ Widget ] Legacy Alert Widget',
		ducks		: [],
		mons		: [ 'headphones', 'voip' ],
		ndiout		: []
	},
	{
		index		: null,
		name		: 'Giveaways',
		slug		: 'giveaways',
		source		: 'SE Giveaways',
		ducks		: [],
		mons		: [ 'headphones', 'voip' ],
		ndiout		: []
	},
]



const SourceSwitchers = [
	{
		name : 'C-Band Panel Cycler',
		slug : 'c-band-panel-cycler',
		short_name : 'CB Cycle',
		bg : '#2222ff',
		speed : 100
	},
	{
		name : 'Ad Block Cycler',
		slug : 'ad-block-cycler',
		short_name : 'Ad Cycle',
		bg : '#202020',
		speed : 100
	},
	{
		name : 'Camera Switcher',
		slug : 'camera-switcher',
		short_name : 'CamSwitch',
		bg : '#202020',
		speed : 100
	}
]


















const state			= {
	devices : devices.map(device=>({
		...device,
		mons: device.mons.map(mon=>({
			...monitors[mon](),
			volume : 100
		})),
		ndiout: device.ndiout.map(ndi=>({
			...ndiout[ndi](),
			volume : 100
		})),
		ducks: device.ducks.map(duck=>({
			...ducks[duck](),
			volume : 100
		}))
	})),
	SourceSwitchers
}

const getters		= {}

const mutations		= {}

const actions		= {}

const modules		= {}

export default createStore({ state, getters, mutations, actions, modules })


