/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const os = require('os');

module.exports = {
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    apollo: {
      lintGQL: true
    }
  },
  chainWebpack: config => {
    config.plugin('fork-ts-checker').tap(args => {
      const totalmem = Math.floor(os.totalmem() / 1024 / 1024); // get OS mem size
      const allowUseMem = totalmem > process.env.MEMORY_LIMIT ? process.env.MEMORY_LIMIT : 2048;
      // eslint-disable-next-line no-param-reassign
      args[0].memoryLimit = allowUseMem;
      return args;
    });
  }
};
