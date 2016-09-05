config = require('./webpack.config.js')
const path = require('path')
delete config.externals['google']
module.exports = {
  devtool: 'inline-cheap-source-map',
  entry: [
    "react-hot-loader/patch",
    "webpack/hot/only-dev-server",
    "./src/client/hmr",
  ],
  output: {
    filename: './build/bundle.js',
  },
  resolve: {
    alias: {
      "google": path.resolve(__dirname, "src/client/google")
    }
  },
  module: config.module,
  externals: config.externals,
}
