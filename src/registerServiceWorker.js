/* eslint-disable no-console */

import { register } from 'register-service-worker'

const { log } = console


if (process.env.NODE_ENV === 'production') {
	register(`${process.env.BASE_URL}service-worker.js`, {
		ready () {
			console.log(
				'App is being served from cache by a service worker.\n' +
				'For more details, visit https://goo.gl/AFskqB'
			)
		},
		registered () {
			log('Service worker has been registered.')
		},
		cached () {
			log('Content has been cached for offline use.')
		},
		updatefound () {
			log('New content is downloading.')
		},
		updated () {
			log('New content is available; please refresh.')
		},
		offline () {
			log('No internet connection found. App is running in offline mode.')
		},
		error (error) {
			error('Error during service worker registration:', error)
		}
	})
}
