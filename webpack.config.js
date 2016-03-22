module.exports = {
  entry: [
    './src/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: "./js/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  }
};
