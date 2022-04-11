
import { forever } from 'async'
import wait from '@/functions/wait'

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



	const PopulateButtonStatus = ()=>{
		for (const [,comp] of Object.entries(MixerComponents['btn'])) {
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

	// m.$OBSWS.on('SceneItemTransformChanged',payload=>{
	// 	log(payload)
	// })



	// forever(async next=>{
	// 	while (!m.$OBSWS._connected) await wait(50)
		
	// 	await m.$OBSWS.send('ExecuteBatch',{
	// 		requests : [
	// 			{
	// 				'request-type' : 'SetSourceSettings',
	// 				sourceName : '[ App Audio ] Pretzel Rocks',
	// 				sourceSettings : {
	// 					exclude : true
	// 				}
	// 			},

	// 			{
	// 				'request-type' : 'Sleep',
	// 				sleepMillis : 5
	// 			},
				
	// 			{
	// 				'request-type' : 'SetSourceSettings',
	// 				sourceName : '[ App Audio ] Pretzel Rocks',
	// 				sourceSettings : {
	// 					exclude : false
	// 				}
	// 			}
	// 		]
	// 	}).then(payload=>log(payload))

	// 	return await wait(15*60000)
	// })






	Object.entries({
		'register-mixer-component' : registerMixerComponent,
		'toggle-group-visibility' : toggleFaderButtonGroupPairs,
		'btn-click' : ({comp})=>log(comp)
	}).forEach(payload=>m.emitter.on(...payload))


	m.start = ()=>{
		PopulateButtonStatus()
	}



	return m
}




export default MixerManager

