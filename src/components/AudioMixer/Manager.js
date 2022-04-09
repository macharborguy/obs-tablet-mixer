

const { log, warn, error } = console


const MixerManager = (m={})=>{

	const MixerComponents = {}

	const InitType = type=>{
		if (!MixerComponents[type]) MixerComponents[type] = {}
	}

	const registerMixerComponent = ({name=undefined, comp=undefined,type='misc'})=>{
		if (name===undefined) throw new Error('Name is undefined')
		if (comp===undefined) throw new Error('Comp is undefined')
		InitType(type)
		MixerComponents[type][name] = comp
	}


	const toggleFaderButtonGroupPairs = ({type,comp,visibility})=>{
		if (type==='btn-group') {
			const compName = `${comp.device.slug}--${comp.name}--fader-group`
			const fader = MixerComponents['fader-group'][compName]
			fader.visible = !visibility
		} else if (type==='fader-group') {
			const compName = `${comp.device.slug}--${comp.slug}--btn-group`
			const btn = MixerComponents['btn-group'][compName]
			btn.visible = !visibility
		}
	}









	Object.entries({
		'register-mixer-component' : registerMixerComponent,
		'toggle-group-visibility' : toggleFaderButtonGroupPairs
	}).forEach(payload=>m.emitter.on(...payload))



	return m
}




export default MixerManager

