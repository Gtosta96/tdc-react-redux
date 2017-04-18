const debug = process.env.NODE_ENV !== 'production';

const webpack = require('webpack');
const path = require('path');

const config = {
	context: path.join(__dirname, '/app/src'),
	devtool: debug ? 'inline-sourcemap' : null,
	entry: './app.jsx',

	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				loader: 'eslint',
				exclude: /node_modules/
			}
		],
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015'],
					plugins: ['transform-object-rest-spread']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: path.join(__dirname, '/app/public/js/'),
		publicPath: 'app/dist/js/',
		filename: 'app.min.js'
	},
	eslint: {
		failOnWarning: false,
		failOnError: false
	},

	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
	]
};

module.exports = config;
