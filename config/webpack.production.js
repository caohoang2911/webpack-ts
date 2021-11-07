var path = require('path');
const webpack = require('webpack');
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
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: { ...optimization },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }), // ignore file don't used
  ],
});
