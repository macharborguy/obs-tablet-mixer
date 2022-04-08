const { log, warn, error } = console


const MixerManager = (m={})=>{

	const MixerComponents = {}

	const InitType = type=>{
		if (!MixerComponents[type]) MixerComponents[type] = {}
	}

	m.registerMixerComponent = ({name=undefined, comp=undefined,type='misc'})=>{
		if (name===undefined) throw new Error('Name is undefined')
		if (comp===undefined) throw new Error('Comp is undefined')
		InitType(type)
		MixerComponents[type][name] = comp
	}


	m.toggleFaderButtonGroupPairs = (el)=>{
		// el = element being toggled.  either via the Fader Group header, or via the Button Group header
		console.log(m)
		log(el)
	}








	return m
}




export default MixerManager

