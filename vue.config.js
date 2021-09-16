const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
              title: 'Mars'
            })
          ]
    },
    outputDir: 'distribution1',
    publicPath: '/extest/',
    devServer: {
        port: 8087
    }
  }