/* eslint-disable prettier/prettier */

module.exports = {
    publicPath: process.env.BASE_URL,
    devServer: {
      disableHostCheck: true
    },
    configureWebpack: {
      optimization: {
        splitChunks: {
          chunks: 'all'
        }
      }
    }
}