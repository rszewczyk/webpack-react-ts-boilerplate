const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const plugins = [
	new HtmlWebpackPlugin({
		template: './src/index.html',
	}),
]

const entry = ['./src/index.jsx']

const cssLoader = isProd
	? 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
	: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:7]!postcss-loader'

const loaders = [{
	test: /\.tsx?$/,
	loader: 'babel!ts-loader',
	include: path.join(__dirname, 'src/components'),
}, {
	test: /\.jsx?$/,
	loader: 'babel',
	include: path.join(__dirname, 'src'),
}, {
	test: /\.css$/,
	loader: cssLoader,
	include: [
		path.join(__dirname, 'src/components'),
		path.join(__dirname, 'node_modules/tachyons/css/tachyons.css'),
	],
}]

if (isProd) {
	plugins.push(new webpack.DefinePlugin({
		'process.env.NODE_ENV': '"production"',
	}))
} else {
	entry.unshift(
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server'
	)
}

module.exports = {
	devtool: 'source-map',
	entry,
	output: {
		path: './build',
		filename: 'js/bundle.js',
		publicPath: '/',
	},
	plugins,
	module: { loaders },
	postcss: [autoprefixer],
	target: 'web',
	devServer: {
		historyApiFallback: {
			index: '/',
		},
	},
}
