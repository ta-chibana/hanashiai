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
    extensions: ['.js', '.jsx'],
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Containers: path.resolve(__dirname, 'src/containers'),
      Reducers: path.resolve(__dirname, 'src/reducers')
    }
  },
  devtool: 'inline-source-map'
}
