var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		//'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
          test: /\.less/,
          loader: 'style-loader!css-loader!less-loader'
	  },
	  {
		  test: /\.css/,
          loader: 'style-loader!css-loader'
      },
      {
      	test: /\.(png|jpg|gif|woff|woff2|eot|otf|ttf|svg)$/,
      	loader: 'url-loader?limit=100000&name=[path][name].[ext]'
      }
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
	        LANG: JSON.stringify("en")
	    }
		})
	]
}
