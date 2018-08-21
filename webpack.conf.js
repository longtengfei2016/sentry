var webpack = require('webpack')
var path = require('path');

module.exports = {
  entry: './error.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: "source-map"
};