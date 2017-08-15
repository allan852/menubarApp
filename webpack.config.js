var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'app/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        loader: 'babel-loader',
        options: {
          presets: ["env"]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader'}
        ]
      }
    ]
  },
  node: {
    fs: 'empty',
    child_process: 'empty'
  }
}
