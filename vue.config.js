const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/30DayMapChallenge-24_Places-and-their-names/',
  transpileDependencies: true,
  devServer: {
    port: 8080,
    host: 'localhost',
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '30DayMapChallenge-24_Places and their names';
      return args;
    });
  },
});
