const path = require('path');
const webpack = require('webpack');

const config = {
	context: path.join(__dirname, '/app/src'),
	devtool: 'inline-sourcemap',
	entry: [
		'react-hot-loader/patch',
		// 'webpack-dev-server/client?http://localhost:8080',
		// 'webpack/hot/only-dev-server',
		'./app.jsx',
	],
	output: {
		path: path.join(__dirname, '/app/public/js/'),
		publicPath: 'app/dist/js/',
		filename: 'app.min.js',
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				exclude: /node_modules/,
				options: { failOnWarning: false, failOnError: false },
			}, {
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader/webpack', 'babel-loader'],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'app/public'),
		port: 8080,
		historyApiFallback: true,
		open: true,
		inline: true,
	},
};

module.exports = config;
