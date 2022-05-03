const plugin = require("tailwindcss/plugin")

module.exports = {

   presets: [
      require("./tailwindcss-preset")
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
         // Exemple for a title - use it with the @apply directive in a CSS file if you want to set line-height, spacing, etc. and create a global class
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
      COLORS
      -------------------------------------
      */
      colors: {
         transparent: "transparent", // NEEDED BY TAILWIND
         white: "hsl(0, 0%, 100%)",
         black: "hsl(0, 0%, 0%)",
         body: "hsl(210, 14%, 40%)",
         primary: {
            DEFAULT: "hsl(356, 85%, 57%)",
            90: "hsl(356, 85%, 90%)"
         },
         secondary: {
            DEFAULT: "hsl(230, 60%, 16%)",
            92: "hsl(230, 60%, 92%)",
            96: "hsl(230, 60%, 96%)",
            99: "hsl(230, 60%, 99%)"
         },
         gray: {
            24: "hsl(210, 14%, 24%)",
            40: "hsl(210, 14%, 40%)",
            65: "hsl(210, 14%, 65%)",
            70: "hsl(210, 14%, 70%)",
            80: "hsl(210, 14%, 80%)"
         }
      },
      /*
      -------------------------------------
      EXTEND DEFAULT TW CONFIG
      -------------------------------------
      */
      extend: {
         // See Tailwind doc for info
      }
   },
   /*
   --------------------------------------------------------------------------
   PLUGINS
   --------------------------------------------------------------------------
   */
   plugins: [
      plugin(function ({ addVariant }) {
         // for navig mega-nav
         addVariant("menu-open", "[data-nav-open='menu'] &")
         addVariant("menu-back", "&[data-nav-transition]")
         addVariant("menu-body", "&[data-nav-open]")
         // for accordions
         addVariant("accordion-open", "[data-navig-accordions-heading='open'] &")
         // swiper
         addVariant("swiper-disabled", "&.swiper-button-disabled")
         addVariant("swiper-lock", "&.swiper-button-lock")
      }),
      require("@3ejoueur/tailwindcss-fluid-properties")
   ]
}
