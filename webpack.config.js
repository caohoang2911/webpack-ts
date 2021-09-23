module.exports =
  process.env.NODE_ENV === 'production'
    ? require('./webpack.production.js')
    : require('./webpack.development.js');
