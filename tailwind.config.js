const plugin = require("tailwindcss/plugin")

module.exports = {

   presets: [
      require("./tailwindcss-preset")
   ],

   // will be default in v4 https://github.com/tailwindlabs/tailwindcss/pull/8394
   future: {
      hoverOnlyWhenSupported: true
   },

   /*
   --------------------------------------------------------------------------
   CONTENT TO WATCH
   Note : If you add folders in your templates folder, list them here to allow TW to scan them
   Folders needs to be specific to avoid watching files modified by Webpack (style and script.twig, etc.)
   --------------------------------------------------------------------------
   */
   content: [
      "./templates/_base/**/*",
      "./templates/_macros/**/*",
      "./templates/_navigation/**/*",
      "./templates/_sections/**/*",
      "./templates/_components/**/*",
      "./templates/_search/**/*",
      "./templates/404.twig",
      "./src/js/**/*.js"
   ],

   theme: {
      /*
      --------------------------------------------------------------------------
      FLUID CLASSES
      You can use screens keys or pixel values for minScreen and maxScreen
      Values must be in PX
      --------------------------------------------------------------------------
      */
      fluidCSS: {
         // Exemple for a logo
         "fluid-logo": { prop: "width", minSize: "30px", maxSize: "42px", minScreen: "sm", maxScreen: "xxl" },
         // Exemple for a title - Take a look in preset for a list of predefined fluid text styles
         "fluid-title-page": { prop: "font-size", minSize: "32px", maxSize: "92px", minScreen: "500px", maxScreen: "xxl" }
      },
      /*
      -------------------------------------
      FONTS FAMILY
      -------------------------------------
      */
      fontFamily: {
         body: ["Helvetica", "arial", "sans-serif"],
         title: ["Helvetica", "arial", "sans-serif"]
      },
      /*
      -------------------------------------
      FONTS SIZE
      -------------------------------------
      */
      fontSize: {
         sm: ["14px", "20px"],
         base: ["16px", "24px"],
         lg: ["20px", "28px"],
         // exemple with lineHeight - See docs for infos
         xl: ["24px", { lineHeight: "32px" }],
         xxl: ["32px", { lineHeight: "48px" }]
      },
      /*
      -------------------------------------
      EXTEND
      -------------------------------------
      */
      extend: {
         colors: {
            blue: {
               DEFAULT: "#4480CF",
               50: "#D6E3F5",
               100: "#C6D8F0",
               200: "#A6C2E8",
               300: "#85ACE0",
               400: "#6596D7",
               500: "#4480CF",
               600: "#2D65AE",
               700: "#214B82",
               800: "#163155",
               900: "#0A1729",
               950: "#050B12"
            }
         }
      }
   },
   /*
   --------------------------------------------------------------------------
   PLUGINS
   --------------------------------------------------------------------------
   */
   plugins: [
      plugin(function ({ addVariant }) {
         // add your Tailwind CSS variants here
      }),
      require("@3ejoueur/tailwindcss-fluid-properties")
   ]
}
