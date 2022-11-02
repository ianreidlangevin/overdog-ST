const plugin = require("tailwindcss/plugin")

module.exports = {

   presets: [
      require("./tailwindcss-preset")
   ],

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
      "./templates/_shared/**/*",
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
            // example
            "brand-primary": {
               DEFAULT: "#2A669F",
               50: "#E4F7F8",
               100: "#CCEEF2",
               200: "#9CD7E5",
               300: "#6CB9D8",
               400: "#3B94CB",
               500: "#2A669F",
               600: "#234B83",
               700: "#1B3366",
               800: "#14204A",
               900: "#0C102E"
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
         // SWIPER
         // addVariant("swiper-disabled", "&.swiper-button-disabled")
         // addVariant("swiper-lock", "&.swiper-button-lock")
      }),
      require("@3ejoueur/tailwindcss-fluid-properties")
   ]
}
