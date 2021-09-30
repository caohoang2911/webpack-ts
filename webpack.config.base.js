var path = require('path');
const webpack = require('webpack');

var isDeveloper = process.env.NODE_ENV == 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

var babelOptions = {
  cacheDirectory: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11',
          edge: '15',
          safari: '10',
          firefox: '50',
          chrome: '49',
        },
      },
    ],
  ],
};
const rules = [
  {
    test: /\.ts(x?)$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'babel-loader',
        options: babelOptions,
      },
      {
        loader: 'ts-loader',
      },
    ],
  },
  {
    loader: 'file-loader',
    test: /\.gz$|\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2|\.eot$|.ttf$|\.wav$|\.mp3$|\.icon$|\?[a-z0-9]+?$/,
    options: {
      name(resourcePath, resourceQuery) {
        if (isDeveloper) {
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
          sourceMap: isDeveloper ? true : false,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sourceMap: isDeveloper ? true : false,
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
    //  lodash: ['lodash'],
    //  vendor: ['react', 'react-dom', 'react-redux'], //first load before cache in browser ==> more than loader
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
      title: isDeveloper ? 'Development' : 'My project',
      template: './src/core/index.html',
      minify: isDeveloper
        ? undefined
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
      filename: isDeveloper ? '[name].css' : 'static/css/[name].[contenthash:8].css',
      chunkFilename: isDeveloper ? '[id].css' : 'static/css/[name].[contenthash:8].chunk.css',
    }),
    //  new webpack.DefinePlugin({
    //    __VERSION__: isDeveloper ? JSON.stringify('dev_5fa3b9') : JSON.stringify('pro_5fa3b9'),
    //  }),
    //  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};
