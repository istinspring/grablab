var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var appName = 'app';
var host = '0.0.0.0';
var port = '9000';

var plugins = [];
var outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = appName + '.min.js';
} else {
  outputFile = appName + '.js';
}

var config = {
  entry: './src/index.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    publicPath: __dirname + '/build',
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx'],
  },
  plugins: plugins,
};

if (env === 'dev') {
  new WebpackDevServer(webpack(config), {
    contentBase: './build',
    hot: true,
    debug: true,
  }).listen(port, host, function(err, result) {
    if (err) {
      console.log(err);
    }
  });

  console.log('-------------------------');
  console.log('Local web server runs at http://' + host + ':' + port);
  console.log('-------------------------');
}

module.exports = config;
