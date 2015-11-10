var webpack = require('webpack');

module.exports = {
  entry: {
    app: './entry.js',
    vendor: ['vue', 'vue-router', 'vue-resource', 'vue-validator']
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
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};
