const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
  const { env } = envVars,
    envConfig = require(`./webpack.${env}.js`),
    config = merge(commonConfig(envVars), envConfig);
  return config;
};
