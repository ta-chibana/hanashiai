const path = require('path')

module.exports = {
  entry: {
    index: './src/index.jsx',
    'firebase-messaging-sw': './src/firebase-messaging-sw.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node-modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Actions: path.resolve(__dirname, 'src/actions'),
      Components: path.resolve(__dirname, 'src/components'),
      Containers: path.resolve(__dirname, 'src/containers'),
      Reducers: path.resolve(__dirname, 'src/reducers'),
      Sagas: path.resolve(__dirname, 'src/sagas')
    }
  },
  devtool: 'inline-source-map'
}
