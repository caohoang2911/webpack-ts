const Dotenv = require('dotenv-webpack');
const path = require('path');
var isDeveloper = process.env.NODE_ENV == 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

var babelOptions = {
  cacheDirectory: true,
  presets: ['@babel/preset-env'],
  plugins: [
    [
      // babel-plugin-import for antd components
      // This plugin modifies the imports done in this way
      // import { Select } from 'antd'
      // To only import the relevant component and styles, not the whole library
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
    'babel-plugin-react-scoped-css',
  ],
};

const rules = [
  {
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader', // translates CSS into CommonJS
      },
      { loader: 'scoped-css-loader' },
      {
        loader: 'less-loader', // compiles Less to CSS
        options: {
          lessOptions: {
            modifyVars: require('../theme.ts'),
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
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
      name() {
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
      isDeveloper ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: isDeveloper,
        },
      },

      {
        loader: 'postcss-loader',
        options: {
          sourceMap: isDeveloper,
          postcssOptions: {
            // path: 'postcss.config.js',
            plugins: [require('autoprefixer'), require('tailwindcss')],
          },
        },
      },
      { loader: 'scoped-css-loader' },
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sourceMap: isDeveloper,
        },
      },
      {
        loader: 'sass-resources-loader', // package: sass-resources-loader
        options: {
          // Provide path to the file with resources
          resources: [
            './src/core/scss/variable.scss',
            './src/core/scss/_func.scss',
            './src/core/scss/_mixin.scss',
          ],
        },
      },
    ],
  },
];
module.exports = {
  target: 'web',
  entry: {
    main: './src/core/index.tsx',
    lodash: ['lodash'],
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
      title: isDeveloper ? 'Development' : 'Momo project',
      template: './src/core/index.html',
      favicon: './src/assets/momo.ico',
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
    new Dotenv({
      path: isDeveloper
        ? './env/.env.development'
        : process.env.NODE_ENV
        ? './env/.env.production'
        : './env/.env.staging',
      ignoreStub: true,
    }),
  ],
};
