const webpackMerge = require('webpack-merge');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildValidations = require('./build/webpack/buildValidations.js');
const commonConfig = require('./build/webpack/webpack.common.js');

// 'env' will contain the environment variable from 'scripts' 
// section in 'package.json'.
module.exports = env => {

  // We use 'buildValidations' to check for the 'env' flag
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  // Select which Webpack configuration to use; development 
  // or production
  const envConfig = require(`./build/webpack/webpack.${env.env}.js`);

  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig,
    {
      plugins: [
        new CleanWebpackPlugin({ verbose: true }),
      ]
    }
  );

  // Then return the final configuration for Webpack
  return mergedConfig;
};
