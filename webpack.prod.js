
/* MERGE CONST */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

/* PLUGINS ET UTILITIES */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const devURL = dotenv.parsed.SITE_URL;
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* PRODUCTION OPTIMIZATION */
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/* DELETE LE CONTENU DU DOSSIER AVANT DE GENERER LES FICHIERS */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = merge(common, {

  mode: 'production',

  output: {
    filename: '[name].[contenthash].js',
  },

  plugins: [

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),

    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'templates/_base/critical'),
      src: devURL,
      dest: 'critical.css',
      inline: false,
      minify: true,
      extract: false,
      width: 1440,
      height: 900,
      penthouse: {
        blockJSRequests: false,
      }
    }),

    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'templates/_base/hash/non-critical.twig'),
      template: path.resolve(__dirname, 'src/ejs/non-critical.ejs'),
      inject: false,
    }),

    // empty folder before creating js and scss files
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '*',
      ],
    }),

  ], // END PLUGINS

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
    splitChunks: {
      chunks: 'all'
    }
  },

}); // end module exports
