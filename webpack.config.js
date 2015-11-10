var path = require("path");
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    './front/index.jsx',
  ],

  output: {
      path: path.resolve('./back/static/build'),
      filename: "[name].js"
  },

  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')

    ]
  },

  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loaders: ['babel'],
        exclude: /(node_modules)/
      },
      // {
      //   test: /(\.scss|\.css)$/,
      //   loader: ExtractTextPlugin.extract('style', 'css!sass!toolbox')
      // },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox')
      }
    ],
  },

  toolbox: {
    theme: path.join(__dirname, 'front/theme.scss')
  },

  postcss: [autoprefixer],

  plugins: [
    new ExtractTextPlugin('toolbox.css', { allChunks: true }),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

};
