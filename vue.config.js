const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

module.exports = {
    outputDir: 'distribution',
    publicPath: '/extest/',
    devServer: {
        port: 8087
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Mars',                
                template: HtmlWebpackTemplate,
                appMountId: 'app'
            })
          ]
    }
  }