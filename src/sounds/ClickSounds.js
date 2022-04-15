

const ClickDownSnd = new Audio('./click-down.wav')
const ClickUpSnd = new Audio('./click-up.wav')
;[ClickDownSnd,ClickUpSnd].forEach(snd=>{ snd.volume=0.1 })



export default {
	clickDown		() {
		ClickDownSnd.play()
	},
	clickUp			() {
		ClickUpSnd.play()
	}
}