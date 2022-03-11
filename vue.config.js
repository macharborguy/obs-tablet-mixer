const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: '/mixer',

	pluginOptions: {
		vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
	},

	chainWebpack : config=>{
		config.module
			.rule('vue')
			.use('vue-loader')
			.tap(options=>{
				options.hotReload = false
				return options
			})
	},
	configureWebpack : config=>{}
})
