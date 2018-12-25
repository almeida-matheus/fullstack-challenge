import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const client = path.resolve('./app/');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${client}/index.pug`,
	filename: 'index.html',
	filetype: 'html'
});

export default {
	entry: `${client}/index.jsx`,
	devtool: 'eval-source-map',
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
						loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}'
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
		HTMLWebpackPluginConfig
	]
};
