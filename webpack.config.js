require( 'es6-promise' ).polyfill();

var path = require( 'path' );
var webpack = require( 'webpack' );
var NODE_ENV = process.env.NODE_ENV || 'development';
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

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
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract( 'style-loader', 'css!sass' )
			}
		]
	},
	resolve: {
		extensions: [ '', '.js', '.jsx' ],
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
		}),
		new ExtractTextPlugin( 'style.css' )
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
