const corejs = {
  version: 3,
  proposals: true
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        // forceAllTransforms: true,
        useBuiltIns: 'usage',
        targets: {
          node: 'current'
        },
        corejs
      }
    ],
    ['@babel/preset-react', {
      development: process.env.NODE_ENV === 'development'
    }],
    '@babel/preset-flow'
  ],
  plugins: [
    'react-hot-loader/babel',
    ['@babel/plugin-transform-runtime', {
      corejs
    }],
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', {
      legacy: true
    }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', {
      loose: true
    }],
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        'root': ['./src'],
        'alias': {
          '@': './src'
        }
      }
    ]
  ],
  env: {
    production: {
      presets: [
        ['minify', {
          keepFnName: true,
          keepClassName: true,
          removeConsole: process.env.NODE_ENV === 'production',
          removeDebugger: process.env.NODE_ENV === 'production'
        }]
      ],
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-flow-strip-types',
        'babel-plugin-lodash'
      ],
      comments: false
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'babel-plugin-dynamic-import-node'
      ]
    }
  }
}
