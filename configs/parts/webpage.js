const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin')

exports.page = ({ title }) => ({
	plugins: [
		new MiniHtmlWebpackPlugin({
			context: {
				title,
			},
		}),
	],
})

