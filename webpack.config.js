const { mode }               = require('webpack-nano/argv')
const { merge }              = require('webpack-merge')
const { webPage, devServer } = require('./configs/parts')

const common = merge([
	{
		entry: ['./src', 'webpack-plugin-serve/client'],
	},
	webPage({ title: 'Webpack demo' }),
])

const production = merge([])

const development = merge([devServer()])

const getConfig = mode => {
	switch(mode) {
		case 'production':
			return merge([common, production, { mode }])
		case 'development':
			return merge([common, development, { mode }])
		default:
			throw new Error(`Unrecognized mode ${mode}`)
	}
}

module.exports = getConfig(mode)
