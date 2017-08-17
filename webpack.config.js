const path = require('path');
const config = {
  entry : './src/app.js',
  output: {
    path: __dirname,
    filename: 'app.bundle.js'
  },
  devtool : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: 'babel-loader',
      }
    ],
  },
};

module.exports = config;