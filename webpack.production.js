console.log('Usage webpack.production.js');
var path = require('path');

const base = require('./webpack.config.base');
const { merge } = require('webpack-merge');

const optimization = require('./webpack.optimization');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[chunkhash].js',
    publicPath: './',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devtool: 'source-map', // create .js.map
  optimization: { ...optimization },
  plugins: [new BundleAnalyzerPlugin()],
});
