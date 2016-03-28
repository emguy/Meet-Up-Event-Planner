var webpack = require("webpack");

module.exports = {
  entry: [
    "./src/app.jsx"
  ],
  output: {
    filename: "./js/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,exclude: /node_modules/, loader: "babel", query: {presets: ["es2015", "react"]}},
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({
    //  sourceMap: false,
    //}),
  ],
  resolve: {
    root: ["/opt/npm/lib/node_modules"]
  },
  resolveLoader: {
    modulesDirectories: ["/opt/npm/lib/node_modules"]
  }
};
