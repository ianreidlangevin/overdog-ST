/* CONFIG */
const path = require("path")
/* PLUGINS ET UTILITIES */
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

   entry: {
      app: ["./src/js/app.js", "./src/css/index.css"], // css can also be import in each js file - usefull for js components method
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
            test: /\.css$/,
            use: [
               MiniCssExtractPlugin.loader,
               "css-loader",
               "postcss-loader"
            ]
         }
      ]
   },

   plugins: [
      /* Path resolve is required to retreive the right folder path
    * HtmpwebpackPlugin create via ejs file the twig code to add script and style in our project
    */
      new HtmlWebpackPlugin({
         filename: path.resolve(__dirname, "templates/_abstracts/script.twig"),
         template: path.resolve(__dirname, "src/ejs/script.ejs"),
         inject: false
      }),

      new HtmlWebpackPlugin({
         filename: path.resolve(__dirname, "templates/_abstracts/style.twig"),
         template: path.resolve(__dirname, "src/ejs/style.ejs"),
         inject: false
      })
   ], // END PLUGINS

   // split runtime chunk
   optimization: {
      runtimeChunk: "single"
   }

} // end module exports
