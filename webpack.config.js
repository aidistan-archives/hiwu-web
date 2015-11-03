var vue = require('vue-loader');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './static',
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' }
    ]
  }
};
