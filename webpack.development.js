console.log('Usage webpack.development.js');
const base = require('./webpack.config.base');
const { merge } = require('webpack-merge');
const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const devServer = {
  open: true,
  hot: true,
  historyApiFallback: true,
  static: {
    directory: path.join(__dirname, './src/assets'),
  },
  compress: true,
  port: 9000,
};

module.exports = merge(base, {
  mode: 'development',
  optimization: {
    runtimeChunk: 'single',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, ''),
  },
  devServer,
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
});
