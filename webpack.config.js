var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.js',
    vendor: ['vue', 'vue-router']
  },
  output: {
    path: './static',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};
