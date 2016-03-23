var webpack = require("webpack");

module.exports = {
  entry: [
    "./src/app.jsx"
  ],
  output: {
    path: "./js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel-loader", },
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
  ]
};
