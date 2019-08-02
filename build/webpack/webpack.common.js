const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseHref = '/';

module.exports = {
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new BaseHrefWebpackPlugin({ baseHref: baseHref }),
    new CopyWebpackPlugin(
      [
        {
          from: 'config/assets',
          to: 'assets'
        } /** add any other copy/move files or folders */
      ],
      {
        force: true,
        flatten: true
      }
    ),
    new CleanWebpackPlugin()
  ],
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../../src/components/'),
      Pages: path.resolve(__dirname, '../../src/pages/'),
      Models: path.resolve(__dirname, '../../src/models/'),
      Services: path.resolve(__dirname, '../../src/services/'),
      Config: path.resolve(__dirname, '../../config/'),
    }
  },
  node: {
    fs: 'empty'
  }
};
