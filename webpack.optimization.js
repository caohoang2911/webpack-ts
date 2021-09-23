const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const optimization = {
  moduleIds: 'deterministic',
  runtimeChunk: {
    name: (entrypoint) => `runtime~${entrypoint.name}`,
  },
  performance: {
    hints: false,
  },
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      uglifyOptions: {
        output: {
          // removing comments
          comments: false,
        },
        extractComments: false,
        // enable parallel running
        parallel: true,
        compress: {
          // remove warnings
          warnings: false,
          // remove console.logs
          drop_console: true,
        },
      },
    }),
  ],
  minimizer: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
        // drop_console: true,
      },
    }),
    new OptimizeCss({
      cssProcessorOptions: {
        discardComments: true,
      },
    }),
  ],
  splitChunks: {
    chunks: 'async',
    minSize: 20000,
    minRemainingSize: 0,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50000,
    cacheGroups: {
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        reuseExistingChunk: true,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
};
