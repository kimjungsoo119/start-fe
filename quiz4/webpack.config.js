const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/quiz4.js',
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/quiz4.html',
    }),
  ], 
};