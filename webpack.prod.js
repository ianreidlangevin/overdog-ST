
/* MERGE CONST */
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

/* PLUGINS ET UTILITIES */
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

/* PRODUCTION OPTIMIZATION */
const TerserPlugin = require("terser-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = merge(common, {

   // mode is required
   mode: "production",
   // output with hash for production
   output: {
      filename: "[name].[contenthash].js",
      clean: true,
      chunkFilename: "chunks/chunk~[name].[contenthash].js"
   },
   // webpack 5 new config for output comment
   stats: {
      assets: true,
      builtAt: true,
      entrypoints: false,
      outputPath: false
   },

   // plugins
   plugins: [

      new MiniCssExtractPlugin({
         filename: "[name].[contenthash].css",
         chunkFilename: "chunks/chunk~[name].[contenthash].css"
      })

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
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"],
                  plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-syntax-dynamic-import"]
               }
            }
         }
      ] // end rules
   }, // end modules for production

   /*
  * Minify tool - default webpack settings
  */
   optimization: {
      minimize: true,
      minimizer: [
         new TerserPlugin({
            terserOptions: {
               output: {
                  comments: false
               }
            },
            extractComments: false
         }),
         new CssMinimizerPlugin({
            minimizerOptions: {
               preset: [
                  "default",
                  {
                     discardComments: { removeAll: true }
                  }
               ]
            }
         })
      ],
      splitChunks: {
         chunks: "all"
      }
   }

}) // end module exports
