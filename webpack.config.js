console.log('Environment ' + process.env.NODE_ENV);
module.exports =
  process.env.NODE_ENV === 'production'
    ? require('./config/webpack.production.js')
    : require('./config/webpack.development.js');
