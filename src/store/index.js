



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
			{ name: 'Gaming PC', icon: 'mdi-gamepad-square' },
		]
	}
]












const state			= {
	devices
}
const getters		= {}
const mutations		= {}
const actions		= {}
const modules		= {}

export default createStore({ state, getters, mutations, actions, modules })


