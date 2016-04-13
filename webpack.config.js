var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: __dirname,

  entry: [
    "./src/index.jsx"
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname , "public/")
  },

  devServer: {
    contentBase: "public",
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel", query: {presets: ["es2015", "react"]} },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] }
    ]
  },

  resolve: {
    root: ["/opt/npm/lib/node_modules"]
  },

  resolveLoader: {
    modulesDirectories: ["/opt/npm/lib/node_modules"]
  }

};
