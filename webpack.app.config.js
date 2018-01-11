const 
  path = require( 'path' ),
  {
    SourceMapDevToolPlugin,
    WatchIgnorePlugin,
    DllReferencePlugin,
  } = require( 'webpack' ),
  ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),
  CleanWebpackPlugin = require( 'clean-webpack-plugin' ),
  WebpackNotifierPlugin = require( 'webpack-notifier' ),
  pkg = require( './package.json' ),
  extractCSS = new ExtractTextPlugin( {
    filename: '[name].css',
    allChunks: true,
  } );

function abs(...args) {
  return path.resolve( __dirname, ...args );
}

module.exports = env => ( {
  entry: {
    bundle: abs( 'src' ),
  },
  stats: {
    children: false,
  },
  output: {
    filename: '[name].js',
    path: abs( 'build' ),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/],
        include: [abs( 'src' )],
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              onlyCompileBundledFiles: true,
            },
          },
        ]
      },
      {
        test: /\.styl$/,
        use: extractCSS.extract( {
          use: [
            'css-loader',
            env.production === true
              ? {
                loader: 'postcss-loader',
                options: {
                  plugins: [require( 'autoprefixer' )()],
                },
              }
              : undefined,
            {
              loader: 'stylus-loader',
              options: {
                import: [abs( 'src', 'css', 'theme' )],
                preferPathResolver: 'webpack',
              }
            }
          ].filter( loader => loader !== undefined )
        } ),
      },
    ]
  },
  resolve: {
    alias: {
      app: abs( 'src' ),
    },
    extensions: ['.ts', '.tsx', '.styl'],
  },
  plugins: [
    extractCSS,
    new CleanWebpackPlugin( abs( 'build' ) ),
    new SourceMapDevToolPlugin(),
    new WebpackNotifierPlugin( { 
      title: pkg.name,
      alwaysNotify: true,
      contentImage: abs( 'assets', 'webpack.png' )
    } ),
    new WatchIgnorePlugin( [/node_modules/] ),
    new DllReferencePlugin( {
      manifest: abs( 'lib', 'manifest.json' ),
    } )
  ],
  watch: env.development === true,
} );
