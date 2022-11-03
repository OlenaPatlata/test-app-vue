const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  
})
module.exports={
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        // target: 'http://127.0.0.1:3333',
        // target: 'http://[::1]:8080',
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: {'^/api':'/'},
        secure: false,
      }
    }
  }
}
