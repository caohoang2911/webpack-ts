var path = require('path');
const webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const rules = [
  {
    test: /\.ts(x?)$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'ts-loader',
        options: { reportFiles: ['src/**/*.{ts,tsx}', '!src/skip.ts'] },
      },
    ],
  },
  {
    loader: 'file-loader',
    test: /\.gz$|\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2|\.eot$|.ttf$|\.wav$|\.mp3$|\.icon$|\?[a-z0-9]+?$/,
    options: {
      name(resourcePath, resourceQuery) {
        if (process.env.NODE_ENV === 'development') {
          return '[path][name].[ext]';
        }
        return 'static/media/[contenthash].[ext]';
      },
    },
  },
  {
    test: /\.(css|sass|scss)$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,

          sourceMap: process.env.NODE_ENV === 'development' ? true : false,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sourceMap: process.env.NODE_ENV === 'development' ? true : false,
        },
      },
      {
        loader: 'sass-resources-loader', // package: sass-resources-loader
        options: {
          // Provide path to the file with resources
          resources: ['./src/core/styles/_variable.scss'],
        },
      },
    ],
  },
];
module.exports = {
  target: 'web',
  entry: {
    main: './src/core/index.tsx',
    vendor: ['react', 'react-dom', 'react-redux'], //first load before cache in browser ==> more than loader
  },
  module: {
    rules,
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: NODE_ENV == 'development' ? 'Development' : 'My project',
      template: './src/core/index.html',
      minify:
        NODE_ENV == 'development'
          ? {}
          : {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            },
    }),
    new MiniCssExtractPlugin({
      filename: NODE_ENV == 'development' ? '[name].css' : 'static/css/[name].[contenthash:8].css',
      chunkFilename:
        NODE_ENV == 'development' ? '[id].css' : 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new webpack.DefinePlugin({
      __VERSION__:
        NODE_ENV == 'development' ? JSON.stringify('dev_5fa3b9') : JSON.stringify('pro_5fa3b9'),
    }),
    //  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
};
