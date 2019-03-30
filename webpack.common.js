const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src/app.js')],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    }
  }