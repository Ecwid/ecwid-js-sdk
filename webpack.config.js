const path = require( 'path' );

module.exports = {

  target: 'web',

  // bundling mode
  mode: 'production',

  // entry files
  entry: './src/ecommerce.ts',

  // output bundles (location)
  output: {
      path: path.resolve( __dirname, 'dist/bundle' ),
      filename: 'ecommerce.js',
      library: 'Ecommerce',
      libraryTarget: 'umd',
      libraryExport: 'default'
  },

  // file resolutions
  resolve: {
      extensions: [ '.ts', '.tsx', '.js' ],
  },

  // loaders
  module: {
      rules: [
          {
              test: /\.ts?/,
              use: 'ts-loader',
              exclude: /node_modules/,
          }
      ]
  }
};
