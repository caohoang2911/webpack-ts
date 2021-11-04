const base = require('./webpack.config.base');
const { merge } = require('webpack-merge');
const path = require('path');

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
  devtool: 'cheap-module-source-map',
  devServer,
  plugins: [].filter(Boolean),
});
