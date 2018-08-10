module.exports = {
  entry: '../index.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  devtool: 'cheap-module-source-map'
}