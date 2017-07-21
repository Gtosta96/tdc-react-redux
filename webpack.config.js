const path = require('path');
const webpack = require('webpack');

const config = {
	context: path.resolve(__dirname, 'app/src'),
	devtool: 'inline-sourcemap',
	entry: [
		'react-hot-loader/patch',
		'webpack/hot/only-dev-server',
		'./app.jsx',
	],
	output: {
		path: path.resolve(__dirname, 'app/public/js'),
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
				loaders: ['babel-loader'],
			},
		],
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'app/public'),
		port: 8080,
		historyApiFallback: true,
		open: true,
		inline: true,
		hot: true,
		openPage: '',
	},
};

module.exports = config;
