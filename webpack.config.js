const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node-modules')
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map'
}
