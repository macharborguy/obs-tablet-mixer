import { createStore } from 'vuex'






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
		bg : '#2222ff'
	},
	{
		name : 'Ad Block Cycler',
		bg : '#202020'
	},
	{
		name : 'Camera Switcher',
		bg : '#202020',
		speed : 100
	}
]





const state			= {
	devices,
	SourceSwitchers
}

const getters		= {}

const mutations		= {}

const actions		= {}

const modules		= {}

export default createStore({ state, getters, mutations, actions, modules })


