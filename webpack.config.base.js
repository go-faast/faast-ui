const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const libraryName = 'FaastUI'
const libraryId = 'faast-ui'
const outputPath = path.resolve('./dist')

module.exports = (env) => {
  const plugins = [
    new CleanWebpackPlugin([outputPath]),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]

  let outputFile
  let outputCssFile
  let cssIdentName
  let minify
  if (env === 'production') {
    plugins.push(new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        minimize: true,
        compress: {
          warnings: false
        },
        mangle: true
      }
    }))
    minify = true
    outputFile = 'js/[name].min.js'
    outputCssFile = 'css/[name].min.css'
    cssIdentName = '[name]-[hash:base64:6]'
  } else {
    minify = false
    outputFile = 'js/[name].js'
    outputCssFile = 'css/[name].css'
    cssIdentName = '[name]__[local]__[hash:base64:6]'
  }
  plugins.push(new ExtractTextPlugin({
    filename: outputCssFile,
    allChunks: true,
  }))

  const config = {
    entry: {
      [libraryId]: path.resolve('./src/index.js')
    },
    devtool: 'source-map',
    output: {
      path: outputPath,
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory', 'eslint-loader'],
      }, {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader', // translates CSS into CommonJS modules
            options: {
              minify,
              sourceMap: true,
              importLoaders: 2,
              localIdentName: cssIdentName
            }
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              sourceMap: true,
              plugins: () => [ // post css plugins, can be exported to postcss.config.js
                require('precss'),
                require('autoprefixer')
              ],
            }
          }, {
            loader: 'sass-loader', // compiles SASS to CSS
            options: {
              sourceMap: true,
              includePaths: [path.resolve('./node_modules')],
              sourceMapContents: true,
              outputStyle: 'expanded',
              precision: 6
            }
          }]
        })
      }]
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      },
      reactstrap: {
        root: 'Reactstrap',
        commonjs2: 'reactstrap',
        commonjs: 'reactstrap',
        amd: 'reactstrap'
      }
    },
    resolve: {
      alias: {
        Components: path.resolve('./src/components'),
      },
      extensions: ['.js', '.jsx', '.css', '.scss']
    },
    plugins,
  }
  return config
}
