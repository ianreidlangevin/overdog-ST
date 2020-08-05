
/* CONFIG */
const webpack = require('webpack');
const path = require('path');

/* PLUGINS ET UTILITIES */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* DELETE LE CONTENU DU DOSSIER AVANT DE GENERER LES FICHIERS */
const glob = require('glob')
const PATHS = {
  src: path.join(__dirname, 'templates')
}

module.exports = {

  entry: {
    app: ['./src/js/app.js', './src/sass/index.scss'], // scss can also be import in each js file - usefull for js component method
  },

  output: {
    publicPath: '/dist/', // important for path in htmlWebpackPlugin
    path: path.resolve(__dirname, 'web/dist/'),
    filename: '[name].[contenthash].js',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // extract the css
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          // load css to js module
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            }
          },
          // parse and add autoprefixer - config in postcss.config.js file
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("autoprefixer"),
              ],
            },
          },
          // run all the scss @import commands in scss files
          {
            loader: 'sass-loader',
            options: {
            sourceMap: true,
            }
          }
        ]
      },

    ] // end rules
  }, // end modules


  plugins: [

    /* Path resolve is required to retreive the right folder path
    * HtmpwebpackPlugin create via ejs file the twig code to add script and style in our project
    */
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'templates/_base/hash/script.twig'),
      template: path.resolve(__dirname, 'src/ejs/script.ejs'),
      inject: false,

    }),

    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'templates/_base/hash/style.twig'),
      template: path.resolve(__dirname, 'src/ejs/style.ejs'),
      inject: false,
    }),

  ], // END PLUGINS


}; // end module exports
