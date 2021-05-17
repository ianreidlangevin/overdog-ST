/* MERGE CONST */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

/* PLUGINS ET UTILITIES */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// extract the Site url from the root env file for Browsersync
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const devURL = dotenv.parsed.SITE_URL;

/* BROWSERSYNC LIVE RELOAD */
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = merge(common, {

  mode: 'development',
  devtool: 'inline-source-map',

  // output
  output: {
    chunkFilename: 'chunks/chunk~[name].js',
  },
  
  // webpack 5 new config for output comment
  stats: {
    assets: true,
    groupAssetsByEmitStatus: false,
    builtAt: true,
    modules: false,
    entrypoints: false,
    moduleAssets: false,
    outputPath: false,
  },

  // plugins
  plugins: [

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: 'chunks/chunk~[name].css',
    }),

    new BrowserSyncPlugin({
      // BrowserSync options
      proxy: devURL,
      host: 'localhost',
      notify: false,
      open: false,
      port: 3000,
      reloadOnRestart: true,
      injectChanges: true,
      files: [
        './web/dist/*', // watch css and js
        './templates/**/*' // watch html and twig
        ]
      }, {
      injectCss: true,
    }),

  ], // END PLUGINS

}); // end module exports
