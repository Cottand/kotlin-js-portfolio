{
  mode: 'development',
  resolve: {
    modules: [
      '/home/cottand/dev/kotlin-js-portfolio/build/js/packages/kotlin-js-portfolio/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/home/cottand/dev/kotlin-js-portfolio/build/js/packages/kotlin-js-portfolio/kotlin-dce-dev/kotlin-js-portfolio.js'
    ]
  },
  output: {
    path: '/home/cottand/dev/kotlin-js-portfolio/build/distributions',
    filename: [Function: filename],
    library: 'kotlin-js-portfolio',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/home/cottand/dev/kotlin-js-portfolio/build/processedResources/js/main'
    ]
  }
}