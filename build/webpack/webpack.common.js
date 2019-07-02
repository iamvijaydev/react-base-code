const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BaseHrefWebpackPlugin } = require("base-href-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const baseHref = "/";

module.exports = {
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new BaseHrefWebpackPlugin({ baseHref: baseHref }),
    new CopyWebpackPlugin(
      [
        {
          from: "config/assets",
          to: "assets"
        } /** add any other copy/move files or folders */
      ],
      {
        force: true,
        flatten: true
      }
    )
  ],
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  node: {
    fs: "empty"
  }
};
