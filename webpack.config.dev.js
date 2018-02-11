const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const env = process.env.WEBPACK_ENV || 'development'
const libraryWebpackConfig = require('./webpack.config.base')(env)
const outputPath = path.resolve('./build')

const config = [
  {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: outputPath,
      historyApiFallback: true,
      stats: {
        chunks: false
      }
    },
    entry: {
      docs: path.resolve('./docs/lib/app'),
    },
    node: {
      fs: 'empty'
    },
    output: {
      filename: '[name].bundle.js',
      path: outputPath,
      publicPath: '/',
      libraryTarget: 'umd'
    },
    plugins: [
      new CleanWebpackPlugin([outputPath]),
      new CopyWebpackPlugin([{ from: './docs/static', to: 'assets' }]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new ExtractTextPlugin('[name].style.css'),
      new HtmlWebpackPlugin({
        template: path.resolve('./docs/index.template.html'),
        filename: 'index.html'
      }),
    ],
    module: libraryWebpackConfig.module,
    resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss'],
      alias: {
        'faast-ui': path.resolve('./src')
      },
    },
    resolveLoader: {
      moduleExtensions: ['-loader']
    },
  }
]

module.exports = config;
