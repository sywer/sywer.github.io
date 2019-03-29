var ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin  = require('uglifyjs-webpack-plugin');
const webpack         = require('webpack');
const path            = require('path');
const env             = process.env.NODE_ENV;

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
            { loader: 'css-loader', options: { minimize: true } },
            { loader: 'sass-loader', options: { minimize: true } }
          ],
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [ '@babel/preset-env' ]
        }
      }
    ]



  },
  plugins: [

    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
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
