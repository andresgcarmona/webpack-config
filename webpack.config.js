const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar        = require('webpackbar')
const WebpackDashboard  = require('webpack-dashboard/plugin')
const { mode }          = require('yargs').argv

module.exports = {
	mode,
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack demo',
		}),
		new WebpackBar(),
		new WebpackDashboard(),
	],
}
