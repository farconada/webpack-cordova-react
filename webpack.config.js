const validate = require('webpack-validator')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var WebpackDevServer = require("webpack-dev-server");

const baseConfig = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/www',
    filename: 'app.js'
  },
  debug: true,
  devtool: 'source-map',
};

const htmlConfig = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};

const babelConfig = {
  module: {
    loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
	    query: {
       		presets: ['es2015', 'react']
      	    }
        }]
  }
}

const devServerConfig = {
  devServer: {
    hot: true,
    contentBase: __dirname + '/www',
  }
}

module.exports = validate(merge(baseConfig, htmlConfig, babelConfig, devServerConfig));
