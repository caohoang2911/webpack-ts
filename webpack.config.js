console.log(console.log('Environment ' + process.env.NODE_ENV));
module.exports =
  process.env.NODE_ENV === 'production'
    ? require('./webpack.production.js')
    : require('./webpack.development.js');
