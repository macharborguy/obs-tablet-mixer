
import { forever } from 'async'
import wait from '@/functions/wait'

import { debounce } from 'underscore'


const { log, warn, error } = console


const MixerManager = (m={})=>{

	const MixerComponents = {}


	const Initialize = debounce(()=>{
		PopulateButtonStatus()
	},500)

	const InitType = type=>{
		if (!MixerComponents[type]) MixerComponents[type] = {}
	}

	const registerMixerComponent = ({name=undefined, comp=undefined,type='misc'})=>{
		if (name===undefined) throw new Error('Name is undefined')
		if (comp===undefined) throw new Error('Comp is undefined')
		InitType(type)
		MixerComponents[type][name] = comp
		Initialize()
	}











	
	const PopulateButtonStatus = ()=>{
		for (const [name,comp] of Object.entries(MixerComponents['btn'])) {
			const sourceName = comp.device.source

		
			m.$OBSWS.send('GetSourceFilters',{
				sourceName
			}).then(({filters})=>{
				const filter = filters.find(({name})=>{
					return !!(name===comp.item.filterName)
				})

				if (filter) {
					comp.active = filter.enabled
					comp.disabled = false
				}
			})
		}
	}






	const toggleFaderButtonGroupPairs = ({type,comp,visibility})=>FaderButtonGroupPairsFns[type]({comp,visibility})
	
	
	const FaderButtonGroupPairsFns = {
		'btn-group'		: ({comp,visibility})=>{
			const compName = `${comp.device.slug}--${comp.name}--fader-group`
			const fader = MixerComponents['fader-group'][compName]
			fader.visible = !visibility
		},
		'fader-group'		: ({comp,visibility})=>{
			const compName = `${comp.device.slug}--${comp.slug}--btn-group`
			const btn = MixerComponents['btn-group'][compName]
			btn.visible = !visibility
		}
	}


	

	m.$OBSWS.on('SourceFilterVisibilityChanged',(filter)=>{
		if (filter.filterName.includes('Move')) return;
		m.emitter.emit('filter_visibility_state_change', filter)
	})








	const buttonClick = ({event,comp})=>{
		if (comp.handler) comp.handler()
	}






	// m.$OBSWS.on('SceneItemTransformChanged',payload=>{
	// 	log(payload)
	// })



	Object.entries({
		'register-mixer-component' : registerMixerComponent,
		'toggle-group-visibility' : toggleFaderButtonGroupPairs,
		'btn-click' : buttonClick
	}).forEach(payload=>m.emitter.on(...payload))





	return m
}




export default MixerManager

