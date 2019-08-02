const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const commonPaths = require('./commonPaths');

module.exports = {
  mode: 'development',
  entry: {
    app: `${commonPaths.appEntry}/index.js`
  },
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: process.env.PORT || 8080,
    historyApiFallback: true,
    hot: true,
    contentBase: './dist',
    publicPath: '/',
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin(),
  ]
}
