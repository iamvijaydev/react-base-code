const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const commonPaths = require('./commonPaths');

module.exports = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`],
  },
  output: {
    filename: '[name].[hash].js',
    crossOriginLoading: 'anonymous',
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
};
