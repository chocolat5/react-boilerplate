const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const PORT = process.env.PORT || '8080'

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: PORT,
  },
})
