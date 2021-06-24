const path = require( 'path' );

module.exports = {
  target: 'web',
  mode: 'production',
  entry: './src/ecommerce.ts',
  output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'ecommerce.js',
      library: 'Ecommerce',
      libraryTarget: 'umd',
      libraryExport: 'default'
  },
  resolve: {
      extensions: [ '.ts', '.tsx', '.js' ],
  },
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
