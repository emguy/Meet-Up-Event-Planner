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
      { test: /\.jsx?$/, loader: "babel", query: {presets: ["es2015", "react"]} },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      { test: /\.json$/, loader: "json" }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({"process.env": { "NODE_ENV": JSON.stringify("production") } }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false })
  ],

};
