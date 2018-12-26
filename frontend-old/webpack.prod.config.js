import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

import webpack from 'webpack';

const built = path.resolve('./built/');
const client = path.resolve('./app/');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${client}/index.pug`,
	filename: 'index.html',
	filetype: 'html'
});
const timeStamp = new Date().getTime();

export default {
	entry: `${client}/index.jsx`,
	output: {
		path: built,
		filename: `assets/javascript/bundle${timeStamp}.min.js`
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				enforce: 'pre',
				use: [
					{
						loader: 'eslint-loader'
					}
				]
			},
			{
				test: /(\.jsx|\.js)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'es2015',
								{
									modules: false
								}
							]
						]
					}
				}
			},
			{
				test: /\.styl$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}'
					},
					{
						loader: 'stylus-loader'
					}
				]
			},
			{
				test: /(\.pug)$/,
				loaders: [
					'html-loader',
					'pug-html-loader?exports=false'
				]
			}
		]
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx',
			'.html',
			'.pug',
			'.css',
			'.styl'
		]
	},
	plugins: [
		new CleanWebpackPlugin(['built'], {}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new CopyWebpackPlugin([
			{
				from: './app/config',
				to: './config'
			},
			{
				from: './app/assets/images',
				to: './assets/images'
			}
		]),
		new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			minimize: true
		}),
		HTMLWebpackPluginConfig
	]
};
