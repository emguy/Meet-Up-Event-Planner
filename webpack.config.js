var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,

  entry: [
    './src/index.jsx'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname , 'public/')
  },

  devServer: {
    contentBase: 'public',
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/, query: {presets: ['es2015', 'react'] } },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.json$/, loader: 'json' }
    ]
  },

};
