const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{ //docker setting
    host:'0.0.0.0',
    port: 8081
  },
})
