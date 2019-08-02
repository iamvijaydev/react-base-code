const path = require('path');
const commonPaths = require('./commonPaths');

module.exports = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    crossOriginLoading: 'anonymous',
  },
  devtool: 'source-map',
};
