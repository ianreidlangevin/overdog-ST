/* CONFIG */
const path = require("path")
/* PLUGINS ET UTILITIES */
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

   entry: {
      app: ["./src/js/app.js", "./src/sass/index.scss"], // scss can also be import in each js file - usefull for js component method
      svg: "./src/svg/svg.js"
   },

   output: {
      publicPath: "/dist/", // important for path in htmlWebpackPlugin
      path: path.resolve(__dirname, "web/dist/")
   },

   module: {
      rules: [
      // SVG LOADER
         {
            test: /\.svg$/,
            use: [
               "svg-sprite-loader",
               "svgo-loader"
            ]
         },
         // CSS & SCSS LOADER
         {
            test: /\.scss$/,
            use: [
               // extract the css
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {}
               },
               // load css to js module
               {
                  loader: "css-loader",
                  options: {
                     sourceMap: false,
                     url: false
                  }
               },
               // parse and add autoprefixer with postCSS preset env
               {
                  loader: "postcss-loader",
                  options: {
                     postcssOptions: {
                        plugins: [
                           [
                              "postcss-preset-env",
                              {
                                 // Options
                              }
                           ]
                        ]
                     }
                  }
               },
               // run all the scss @import commands in scss files
               {
                  loader: "sass-loader",
                  options: {
                     sourceMap: false
                  }
               }
            ]
         }

      ] // end rules
   }, // end modules

   plugins: [
      /* Path resolve is required to retreive the right folder path
    * HtmpwebpackPlugin create via ejs file the twig code to add script and style in our project
    */
      new HtmlWebpackPlugin({
         filename: path.resolve(__dirname, "templates/_base/hash/script.twig"),
         template: path.resolve(__dirname, "src/ejs/script.ejs"),
         inject: false
      }),

      new HtmlWebpackPlugin({
         filename: path.resolve(__dirname, "templates/_base/hash/style.twig"),
         template: path.resolve(__dirname, "src/ejs/style.ejs"),
         inject: false
      })
   ], // END PLUGINS

   // split runtime chunk
   optimization: {
      runtimeChunk: "single"
   }

} // end module exports
