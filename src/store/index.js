import { createStore } from 'vuex'



const monitors = {
	headphones	: ()=>({ slug: 'headphones', name: 'Headphones', icon: 'mdi-headphones'}),
	voip		: ()=>({ slug: 'voip', name: 'VoIP', icon: 'mdi-phone-voip' })
}

const ndiout = {
	'gaming-pc-voip'	: ()=>({ slug: 'gaming-pc-voip', name: 'Gaming PC VoIP', icon: 'mdi-gamepad-square' })
}

const ducks = {
	'old-alerts' : ()=>({ slug: 'old-alerts', name : 'Old Alerts', icon: 'mdi-bullhorn', filter: 'Alert Ducker 1 - Legacy Alerts' }),
	'sound-alerts' : ()=>({ slug: 'sound-alerts', name : 'SoundAlerts', icon: 'mdi-volume-high', filter: 'Alert Ducker 2 - SoundAlerts' }),
	'microphone' : ()=>({ slug: 'microphone', name : 'Microphone', icon: 'mdi-microphone', filter: 'Mic Ducker' }),
	'discord' : ()=>({ slug: 'discord', name : 'Discord', icon: 'mdi-discord', filter: 'Discord Ducker' }),
}


const new_devices = [
	
	{
		index	: null,
		name	: 'XLR Mic',
		source	: 'Behringer Main Out (For XLR Mic)',
		ducks	: [],
		mons	: [ 'headphones', 'voip' ],
		ndiout	: [ 'gaming-pc-voip' ]
	},
	{
		index	: null,
		name	: 'Music Player',
		source	: 'Pretzel Rocks Mirror',	// Rename later to "Music Player"
		ducks	: [ 'old-alerts', 'sound-alerts', 'microphone', 'discord' ],
		mons	: [ 'headphones', 'voip' ],
		ndiout	: []
	},
	{
		index	: null,
		name	: 'Discord',
		source	: '[ App Audio ] Discord',	// Rename later to "Music Player"
		ducks	: [],
		mons	: [ 'headphones' ],
		ndiout	: []
	},
	{
		index	: null,
		name	: 'Gaming PC NDI-In',
		source	: 'Game AUdio NDI',
		ducks	: [ 'old-alerts', 'sound-alerts', 'microphone', 'discord'],
		mons	: [ 'headphones', 'voip' ],
		ndiout	: []
	},
	{
		index	: null,
		name	: 'Elgato HD60',
		source	: '[ Elgato ] GameCapture HD60',
		ducks	: [ 'old-alerts', 'sound-alerts', 'microphone', 'discord'],
		mons	: [ 'headphones', 'voip' ],
		ndiout	: []
	},
	{
		index	: null,
		name	: '👁️ ORBY',
		source	: '[ Widget ] Orby',
		ducks	: [],
		mons	: [ 'headphones', 'voip' ],
		ndiout	: []
	},

	{
		index	: null,
		name	: 'SoundAlerts',
		source	: '[ Widget ] SoundAlerts',
		ducks	: [],
		mons	: [ 'headphones', 'voip' ],
		ndiout	: []
	},
	{
		index	: null,
		name	: 'Old Alerts',
		source	: '[ Widget ] Legacy Alert Widget',
		ducks	: [],
		mons	: [ 'headphones', 'voip' ],
		ndiout	: []
	},
]


const devices = [
	{
		index	: null,
		name	: 'XLR Mic',
		source	: 'Behringer Main Out (For XLR Mic)',
		ducks	: [],
		mons	: [
			{ name: 'Headphones', icon: 'mdi-headphones', volume : 100 },
			{ name: 'VoIP', icon: 'mdi-phone-voip', volume : 100 },
		],
		ndiout	: [
			{ name: 'Gaming PC VoIP', icon: 'mdi-gamepad-square' },
		]
	},
	{
		index	: null,
		name	: 'Music Player',
		source	: 'Pretzel Rocks Mirror',	// Rename later to "Music Player"
		ducks	: [
			{ name : 'Old Alerts', icon: 'mdi-bullhorn', filter: 'Alert Ducker 1 - Legacy Alerts' },
			{ name : 'SoundAlerts', icon: 'mdi-volume-high', filter: 'Alert Ducker 2 - SoundAlerts' },
			{ name : 'Microphone', icon: 'mdi-microphone', filter: 'Mic Ducker' },
		],
		mons	: [
			{ name: 'Headphones', icon: 'mdi-headphones', volume : 100 },
			{ name: 'VoIP', icon: 'mdi-phone-voip', volume : 100 },
		],
		ndiout	: []
	},
	{
		index	: null,
		name	: 'Discord',
		source	: '[ App Audio ] Discord',	// Rename later to "Music Player"
		ducks	: [],
		mons	: [
			{ name: 'Headphones', icon: 'mdi-headphones', volume : 100 },
		],
		ndiout	: []
	},
	{
		index	: null,
		name	: 'Gaming PC NDI-In',
		source	: 'Game AUdio NDI',
		ducks	: [
			{ name : 'Old Alerts', icon: 'mdi-bullhorn', filter: 'Alert Ducker 1 - Legacy Alerts' },
			{ name : 'SoundAlerts', icon: 'mdi-volume-high', filter: 'Alert Ducker 2 - SoundAlerts' },
			{ name : 'Microphone', icon: 'mdi-microphone', filter: 'Mic Ducker' },
		],
		mons	: [
			{ name: 'Headphones', icon: 'mdi-headphones', volume : 100 },
			{ name: 'VoIP', icon: 'mdi-phone-voip', volume : 100 },
		],
		ndiout	: []
	},
	{
		index	: null,
		name	: 'Elgato HD60',
		source	: '[ Elgato ] GameCapture HD60',
		ducks	: [],
		mons	: [
			{ name: 'Headphones', icon: 'mdi-headphones', volume : 100 },
			{ name: 'VoIP', icon: 'mdi-phone-voip', volume : 100 },
		],
		ndiout	: []
	},
	{
		index	: null,
		name	: '👁️ ORBY',
		source	: '[ Widget ] Orby',
		ducks	: [],
		mons	: [
			{ name: 'Headphones', icon: 'mdi-headphones', volume : 100 },
			{ name: 'VoIP', icon: 'mdi-phone-voip', volume : 100 },
		],
		ndiout	: []
	},



	
	{
		index	: null,
		name	: 'SoundAlerts',
		source	: '[ Widget ] SoundAlerts',
		ducks	: [],
		mons	: [
			{ name: 'Headphones', icon: 'mdi-headphones', volume : 100 },
		],
		ndiout	: []
	},
	{
		index	: null,
		name	: 'Old Alerts',
		source	: '[ Widget ] Legacy Alert Widget',
		ducks	: [],
		mons	: [
			{ name: 'Headphones', icon: 'mdi-headphones', volume : 100 },
		],
		ndiout	: []
	},
]






const SourceSwitchers = [
	{
		name : 'C-Band Panel Cycler',
		bg : '#2222ff',
		speed : 100
	},
	{
		name : 'Ad Block Cycler',
		bg : '#202020',
		speed : 100
	},
	{
		name : 'Camera Switcher',
		bg : '#202020',
		speed : 100
	}
]


















const state			= {
	new_devices : new_devices.map(device=>({
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
	devices,
	SourceSwitchers
}

const getters		= {}

const mutations		= {}

const actions		= {}

const modules		= {}

export default createStore({ state, getters, mutations, actions, modules })


