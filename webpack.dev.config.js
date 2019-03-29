var ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin  = require('uglifyjs-webpack-plugin');
const webpack         = require('webpack');
const path            = require('path');

module.exports = {
  entry: ['./app.js', './scss/main.scss', './css/plain_css.css'],
  output: {
    filename: 'build/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ],
        })
      }
    ]
  },
  plugins: [

    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
    }),
    new ExtractTextPlugin({
      filename: 'build/bundle.css',
      allChunks: true,
    }),
  ],
};
