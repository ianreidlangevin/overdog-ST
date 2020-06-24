
/* MERGE CONST */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


/* PRODUCTION */
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');



module.exports = merge(common, {

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        /*
        * Babel is use only for production for old browser
        */
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
    ] // end rules
  }, // end modules for production


  /*
  * Minify tool
  */
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    /* not use for this project - only one chunk
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }*/
  },

}); // end module exports
