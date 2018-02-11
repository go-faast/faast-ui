const webpackDevConfig = require('./webpack.config.base')('development');
const webpackProdConfig = require('./webpack.config.base')('production');

module.exports = [webpackDevConfig, webpackProdConfig];
