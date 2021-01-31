const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    post: path.resolve(__dirname, 'src/post/post.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js)$/, use: 'babel-loader' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'post/index.html',
      template: path.resolve(__dirname, 'src/post/index.html'),
      chunks: ['post'],
    }),
  ],
  mode: 'production',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
};
