'use strict';

const env = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');
const webpackUMDExternal = require('webpack-umd-external');

const pluginsList = [];
const outputFileName = env === 'production' ?
  'vue-simplemde.min.js' :
  'vue-simplemde.js';

if (env === 'production') {
  pluginsList.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    })
  );
}

const config = {
  entry: path.join(__dirname, 'src/index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: outputFileName,
    library: 'VueSimpleMDE',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  externals: webpackUMDExternal({
    'vue': 'Vue',
    'simplemde': 'SimpleMDE'
  }),

  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  plugins: pluginsList,

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.vue$/,
      loaders: ['vue']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  },

  vue: {
    loaders: {
      js: 'babel'
    }
  }
};

module.exports = config;
