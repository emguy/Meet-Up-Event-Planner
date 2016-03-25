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
      { test: /\.jsx?$/, loader: "babel", query: {presets: ["es2015", "react"]}},
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
