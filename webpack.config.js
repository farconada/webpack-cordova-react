const validate = require('webpack-validator')
const getConfig = require('hjs-webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

const hjsConfig = getConfig({
  // entry point for the app
  in: 'src/app.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'www',

  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: false
});

const htmlConfig = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};
module.exports = merge(hjsConfig, htmlConfig);
