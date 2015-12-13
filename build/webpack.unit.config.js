var path = require('path');

module.exports = {
  entry: './test/unit/main.coffee',
  output: {
    path: './test/unit',
    filename: 'unit-bundle.js',
    publicPath: 'test/unit'
  },
  vue: {
    loaders: {
      coffee: 'ibrik-instrumenter!coffeelint'
    }
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      include: [
        path.resolve(__dirname, '../test/unit'),
        path.resolve(__dirname, '../src')
      ],
      loader: 'ibrik-instrumenter!coffeelint'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  devtool: 'source-map'
};
