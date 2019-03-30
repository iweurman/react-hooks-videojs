const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              exclude: /node_modules/
            }
          }
        ]
      },
      {
      test: /\.(less|css)$/,
        use: [{
            loader: 'style-loader'
        }, {
            loader: 'css-loader', options: {
              sourceMap: false
            }
          }, {
            loader: 'less-loader', options: {
              sourceMap: false,
              relativeUrls: false
            }
          }]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/',
    hot: true
  },
});