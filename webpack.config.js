const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', 
                    {'plugins': ['@babel/plugin-proposal-class-properties']}]
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
}