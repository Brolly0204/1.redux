const path = require('path');

function resolve(dist) {
  return path.join(__dirname, dist);
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "env", "stage-0", "react"
            ]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
};
