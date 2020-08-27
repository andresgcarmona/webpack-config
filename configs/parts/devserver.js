const { webpackPluginServe: WebpackPluginServe } = require('webpack-dev-server')

exports.devServer = () => ({
	watch: true,
	plugins: [
		new WebpackPluginServe({
			port: process.env.PORT || 8080,
			static: './dist',
			liveReload: true,
			waitForBuild: true,
		}),
	],
})
