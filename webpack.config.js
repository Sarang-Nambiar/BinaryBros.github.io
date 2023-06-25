const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // Add your loaders for different file types here
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    fallback: {
      // Add fallbacks for any required polyfills or empty modules
      crypto: false, // Empty module for crypto
    },
  },
  // Add any additional plugins and configuration options here
};
