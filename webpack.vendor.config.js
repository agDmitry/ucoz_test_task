const 
  path = require( 'path' ),
  { DllPlugin } = require( 'webpack' ),
  ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),
  CleanWebpackPlugin = require( 'clean-webpack-plugin' ),
  extractCSS = new ExtractTextPlugin( {
    filename: path.normalize( '[name].css' ),
    allChunks: true,
  } );

function abs(...args) {
  return path.resolve( __dirname, ...args );
}

module.exports = {
  entry: {
    bundle: [abs( 'lib' ), abs( 'lib', 'index.css' )],
  },
  output: {
    path: abs( 'lib', 'bundle' ),
    filename: '[name].js',
    library: 'vendor_[name]',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract( {
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            }
          ],
        } ),
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin( abs( 'lib', 'bundle' ) ),
    extractCSS,
    new DllPlugin( {
      name: 'vendor_[name]',
      path: abs( 'lib', 'manifest.json' ),
    } )
  ]
};
