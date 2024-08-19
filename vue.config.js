const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  devServer:{ //docker setting
    host:'0.0.0.0',
    port: 8081
  },
  pwa:{
    name: 'pwa-test',
    short_name: 'pt',
    // themeColor: '#4DBA87',
    // msTileColor: '#000000',
    // appleMobileWebAppCapable: 'yes',
    // appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      exclude: [/\.html$/], //html不進行service Worker缓存
      swSrc: './src/service-worker.js'
    }
  },
})
