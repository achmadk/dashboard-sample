const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const sass = require('sass')
const fiber = require('fibers')

let name = process.env.NODE_ENV ? '../font/[hash].[ext]' : 'font/[hash].[ext]';

// let template = `${process.env.NODE_ENV === 'production' ? '!!prerender-loader?string!' : ''}./src/html-pages/index.html`
let template = `./src/html-pages/index.html`

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV === 'production' ? "production" : 'development',
  performance: { hints: false },
  module: {
    /**
     * module.loaders is now module.rules
     * https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules
     * The old loader configuration was superseded by a more powerful rules system,
     * which allows configuration of loaders and more.
     */
    // loaders: [{
    rules: [{
      /**
       * use babel-loader to load .jsx files
       * react-hot-loader has been added in package.json file since version 3
       */
      test: /\.(js|x)?$/,
      exclude: /node_modules/,
      /**
       * Chaining loaders
       * https://webpack.js.org/guides/migrating/#chaining-loaders
       * Like in webpack v1, loaders can be chained to pass results from loader to loader.
       * Using the rule.use configuration option, use can be set to a list of loaders.
       * In webpack v1, loaders were commonly chained with !
       * @type {String}
       */
      use: [
        { loader: 'thread-loader' },  
        {
          loader: 'babel-loader',
          query: { cacheDirectory: true }
        }, {
          loader: 'react-hot-loader/webpack'
      // }, {
      //   loader: 'linaria/loader',
      //   options: { sourceMap: process.env.NODE_ENV !== 'production' }
      }]
    }, {
      /**
       * use less-loader, css-loader, and style-loader to load .less files
       * you can import .less in .jsx file
       */
      test: /\.less$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 2 } },
        { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } },
        { loader: 'less-loader', options: { javascriptEnabled: true, math: 'parens-division' } }
      ]
    }, {
      /**
       * use sass-loader, css-loader, and style-loader to load .scss files
       * you can import .scss in .jsx file
       */
      test: /\.scss$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 2 } },
        { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } },
        { loader: 'sass-loader', options: { implementation: sass, fiber } }
      ]
    }, {
      /**
       * css-loader, and style-loader to load .css files
       * you can import .css in .jsx file
       */
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      /**
       * compress images with specific extensions with image-webpack-loader,
       * then move it into img folder with name [hash].[ext] using url-loader
       */
      test: /.*\.(png|jpg|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: { name: './img/[hash].[ext]', limit: 5120 }
      }, {
        loader: 'image-webpack-loader',
        options: { bypassOnDebug: true }
      }]
    }, {
      /**
       * load fonts with specific extensions,
       * then move it into font folder with name [hash].[ext] using file-loader.
       * added (\?[\s\S]+) regex value in case you want to load font-awesome or ionicons font
       */
      test:  /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      use: [{
        loader: 'file-loader',
        options: { name }
      }]
    }, {
      /**
       * load fonts with woff/woff2 extensions with url-loader.
       * then move it into font folder with name [hash].[ext] and other options using url-loader.
       * added (\?[\s\S]+) regex value in case you want to load font-awesome or ionicons font
       */
      test: /\.woff(2)?(\?[\s\S]+)?$/,
      use: [{
        loader: 'url-loader',
        options: { limit: 10000, mimetype: 'application/font-woff', name }
      }]
    }, {
      /**
       * load pages with specific extensions,
       */
      test: /\.html?$/,
      use: [{
        loader: 'html-loader',
        options: { interpolate: true, minimize: true }
      }]
    }, {
      test: require.resolve('jquery'),
      use: [{
        loader: 'expose-loader',
        options: 'jQuery'
      }, {
        loader: 'expose-loader',
        options: '$'
      }]
    }, {
      /**
       * use standard-loader to preload .jsx files
       */
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'standard-loader',
        options: {
          error: false,
          snazzy: true
        }
      }]
    }]
  },
  resolve: {
    /**
     * According to https://github.com/webpack/webpack.js.org/issues/68
     * in webpack 2 root and modulesDirectories in resolver has deleted
     * in order to use it, add root value to modules list
     */
    modules: [__dirname, 'node_modules', 'src', 'test'],
    /**
     * According to https://webpack.js.org/guides/migrating/#resolve-extensions
     * resolve.extensions no longer requires passing an empty string.
     */
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // new CopyWebpackPlugin([
    //   // { from: `./src/pages` },
    //   { from: './src/assets/img', to: 'img' }
    // ], {
    //   ignore: [
    //     'index.html',
    // '*.js'
    //   ]
    // }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   'window.$': 'jquery'
    // }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          // postcssAMP,
          autoprefixer()
        ],
        sassLoader: { includePaths: path.resolve(__dirname, 'src', 'assets', 'css-preprocessors') }
      }
    }),
    new HtmlWebpackPlugin({
      template,
      inject: 'body',
      hash: process.env.NODE_ENV === 'production',
      minify: {
        removeComments: true
      }
    // })
    })
  ]
}
