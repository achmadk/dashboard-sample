const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MediaQueryPlugin = require('media-query-plugin')
const HtmlWebpackExcludeEmptyAssetsPlugin = require('html-webpack-exclude-empty-assets-plugin')
// const PurifyCSSPlugin = require('purifycss-webpack')
const HTMLCriticalPlugin = require('html-critical-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const PrepackWebpackPlugin = require('prepack-webpack-plugin').default
// const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
// const BundleBuddyWebpackPlugin = require('bundle-buddy-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const LodashWebpackPlugin = require('lodash-webpack-plugin')
// const glob = require('glob')
const sass = require('sass')
const fiber = require('fibers')

threadLoader = require('thread-loader')

threadLoader.warmup({}, [
  'webpack',
  'path',
  'clean-webpack-plugin',
  'mini-css-extract-plugin',
  'media-query-plugin',
  'html-critical-webpack-plugin',
  'webpack-bundle-analyzer',
  'terser-webpack-plugin',
  'compression-webpack-plugin',
  'preload-webpack-plugin',
  'optimize-css-assets-webpack-plugin',
  'lodash-webpack-plugin',

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

// const extractCSS = new ExtractTextPlugin({ filename: "css/[contenthash].css", allChunks: true }),
//       extractLESS = new ExtractTextPlugin({ filename: "css/[contenthash].css", allChunks: true }),
//       extractSCSS = new ExtractTextPlugin({ filename: "css/[contenthash].css", allChunks: true })

// webpackConfig.entry = [
//   'core-js/stable',
//   'regenerator-runtime/runtime',
//   './src/index.js'
// ]
webpackConfig.entry = './src/index.js'

webpackConfig.output = {
  path: path.resolve(__dirname, '../dist'),
  publicPath: '/',
  filename: './js/bundle.[chunkhash:8].js',
  chunkFilename: './js/[name].[chunkhash:8].js'
}

webpackConfig.module.rules[1].use = [
  MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options: { importLoaders: 3 } },
  MediaQueryPlugin.loader,
  { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } },
  { loader: 'less-loader', options: { javascriptEnabled: true, math: 'parens-division' } }
]

webpackConfig.module.rules[2].use = [
  MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options: { importLoaders: 3 } },
  MediaQueryPlugin.loader,
  { loader: 'postcss-loader', options: {config: { path: './postcss.config.js' }/* sourceMap: 'inline' */} }, // eslint-disable-line
  { loader: 'sass-loader', options: { implementation: sass, fiber } }
]

webpackConfig.module.rules[3].use = [
  MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options: { importLoaders: 1 } },
  MediaQueryPlugin.loader
]

webpackConfig.optimization = {
  splitChunks: {
    chunks: 'all',
    name: false
  },
  runtimeChunk: true,
  splitChunks: {
    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true
      }
    }
  },
  minimizer: [
    // new BabelMinifyWebpackPlugin({
    //   keepFnName: true,
    //   keepClassName: true,
    //   removeConsole: process.env.NODE_ENV === 'production',
    //   removeDebugger: process.env.NODE_ENV === 'production',
    //   mangle: {
    //     topLevel: true
    //   },
    //   builtIns: false
    // }, {
    //   comments: false,
    //   sourceMap: undefined,
    //   babel
    // }),
    new TerserWebpackPlugin({
      parallel: true,
      test: /\.(js|x)?$/,
      cache: true,
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }),
    new OptimizeCSSAssetsPlugin()
  ]
}

webpackConfig.plugins.push(
  new webpack.NoEmitOnErrorsPlugin(),
  new CleanWebpackPlugin({
    verbose: true
  }),
  /**
   * According to https://gist.github.com/sokra/27b24881210b56bbaff7#occurrence-order
   * The plugin is no longer needed and occurrence order is on by default.
   */
  // new webpack.optimize.OccurenceOrderPlugin(),
  // new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    'process.env': {'NODE_ENV': JSON.stringify(process.env.NODE_ENV)},
    '__DEVTOOLS__': process.env.NODE_ENV == "development"
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  // new webpack.IgnorePlugin(/^\.\/languages$/, [/numbro$/]),
  // new webpack.ContextReplacementPlugin(/numbro[\\\/]dist[\\\/]languages$/, /^\.\/en-GB$/),
  /**
   * According to https://gist.github.com/sokra/27b24881210b56bbaff7#loader-options--minimize
   * The UglifyJsPlugin no longer puts loaders into minimize mode.
   * The debug option has been removed.
   * Loaders should no longer read their options from the webpack configuration.
   * Instead you need to provide these options with the LoaderOptionsPlugin.
   */
  // new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: false,
  //     drop_console: process.env.NODE_ENV == "production",
  //     dead_code: true,
  //     unused: true,
  //     booleans: true,
  //     if_return: true
  //   },
  //   mangle: false,
  //   comments: false,
  //   sourceMap: true,
  //   minimize: true
  // }),
  // extractCSS,
  // extractLESS,
  // extractSCSS,
  new LodashWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash].css',
    chunkFilename: 'css/[name].[contenthash].css'
  }),
  new PreloadWebpackPlugin({
    rel: 'preload',
    include: 'initial'
  }),
  new MediaQueryPlugin({
    include: [ 'app' ],
    queries: {
      '(min-width:768px)': 'desktop',
      '(orientation:landscape) and (min-width:768px)': 'desktop-landscape'
    }
  }),
  new HTMLCriticalPlugin({
    base: path.resolve(__dirname, '../dist'),
    src: 'index.html',
    dest: 'index.html',
    inline: true,
    minify: true,
    dimensions: [{
      height: 640,
      width: 360
    }, {
      height: 1024,
      width: 768
    }],
    penthouse: {
      blockJSRequest: false
    }
  }),
  new CompressionPlugin({
    test: /\.(html|js|css|ttf|otf)/,
    cache: true
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: './../report.html'
  })
  // }),
  // new BundleBuddyWebpackPlugin()
  // new PurifyCSSPlugin({
  //   minimize: false,
  //   moduleExtensions: ['.css'],
  //   // styleExtensions: ['.css', '.jsx', '.js'],
  //   paths: {
  //     html: glob.sync(path.join(__dirname, `../src/pages/${process.env.MOBILE_PLATFORM}/*.html`)),
  //     jsx: glob.sync(`./../src/**/*.jsx`),
	//   js: glob.sync(`./../src/**/*.js`),
  //     // f7: glob.sync(`./../node_modules/framework7/*`)
  //   },
  //   verbose: true
  // })
  // new webpack.LoaderOptionsPlugin({
  //   minimize: true,
  //   debug: false
  // })
)

module.exports = webpackConfig
