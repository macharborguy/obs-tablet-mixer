



import { createStore } from 'vuex'




const devices = [
	{
		index	: null,
		name	: 'XLR Mic',
		source	: '[ Mic ] M-Audio XLR - Realtek Mic-In',
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
		name	: 'Gaming PC NDI-In',
		source	: '[ NDI ] Gaming PC Main Output',
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
		name	: '👁️ ORBY',
		source	: '[ Widget ] Orby',
		mons	: [
			{ name: 'Headphones', icon: 'mdi-headphones', volume : 100 },
		],
		ndiout	: []
	},
]












const state			= {
	devices
}
const getters		= {}
const mutations		= {}
const actions		= {}
const modules		= {}

export default createStore({ state, getters, mutations, actions, modules })


