// require('react-hot-loader/patch');

const webpack = require('webpack'),
path = require('path'),
{ CleanWebpackPlugin } = require('clean-webpack-plugin'),
FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
threadLoader = require('thread-loader')

threadLoader.warmup({}, [
  'webpack',
  'path',
  'clean-webpack-plugin',
  'friendly-errors-webpack-plugin',

  'autoprefixer',
  'html-webpack-plugin',
  'sass',
  'fibers',
  'babel-loader',
  'style-loader',
  'css-loader',
  'postcss-loader',
  'less-loader',
  'sass-loader',
  'url-loader',
  'image-webpack-loader',
  'file-loader',
  'html-loader',
  'standard-loader'
])

var webpackConfig = require('../webpack.config')

// webpackConfig.entry.shift('react-hot-loader/patch');

webpackConfig.entry = [
  'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
  'webpack/hot/only-dev-server',
  'core-js/stable',
  'regenerator-runtime/runtime',
  'react-hot-loader/patch',
  path.resolve(__dirname, '../src/index.js')
  // 'webpack/hot/only-dev-server', // Reload only the dev server
]

// webpackConfig.module.rules[0].use = [
//   'react-hot-loader/webpack',
//   'babel-loader'
// ]

webpackConfig.output = {
  path: path.resolve(__dirname, '../temp'),
  publicPath: '/',
  filename: './js/bundle.js'
}

webpackConfig.devServer = {
  contentBase: path.resolve(__dirname, '../temp'),
  publicPath: '/',
  quiet: true,
  hot: true,
  historyApiFallback: {
    disableDotRule: true,
  },
  /**
   * According to https://gist.github.com/sokra/27b24881210b56bbaff7#hmr-communication
   * In webpack 1 the update signal used the Web Messaging API (postMessage).
   * Webpack 2 uses a standard event emitter to receive the event.
   * This means WebSocket must be inline in the bundle.
   * webpack-dev-server has inlined mode as default now.
   * This should allow to use the webpack-dev-server to update code in WebWorkers.
   */
  // inline: true
}

webpackConfig.devtool = 'source-map'

webpackConfig.plugins.unshift(
  new CleanWebpackPlugin({
    verbose: true
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new FriendlyErrorsWebpackPlugin()
)

module.exports = webpackConfig
