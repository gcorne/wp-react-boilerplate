var path = require( 'path' );
var webpack = require( 'webpack' );
var NODE_ENV = process.env.NODE_ENV || 'development';

var webpackConfig = {
	entry: path.join( __dirname, 'src', 'index.js' ),
	output: {
		path: path.join( __dirname, 'build' ),
		filename: "script.js"
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [ 'babel-loader?cacheDirectory&optional[]=runtime' ]
			}
		]
	},
	resolve: {
		extensions: [ '', '.json', '.js', '.jsx' ],
	},
	node: {
		fs: "empty",
		process: true
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify( NODE_ENV )
			}
		})
	]
};

if ( NODE_ENV === 'production' ) {
	webpackConfig.plugins.push( new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}) );
}

module.exports = webpackConfig;
