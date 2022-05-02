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
         // elements
         "fluid-icon-h": { prop: ["height"], minSize: "48px", maxSize: "62px", minScreen: "sm", maxScreen: "xl" },
         "fluid-icon-w": { prop: ["width"], minSize: "48px", maxSize: "62px", minScreen: "sm", maxScreen: "xl" },
         "fluid-arguments-icon": { prop: "width", minSize: "40px", maxSize: "68px", minScreen: "sm", maxScreen: "xxl" },
         "fluid-logo": { prop: "width", minSize: "30px", maxSize: "42px", minScreen: "sm", maxScreen: "xxl" },
         "fluid-footer-web-intel": { prop: "width", minSize: "120px", maxSize: "340px", minScreen: "sm", maxScreen: "xxxl" },
         "fluid-footer-stamp": { prop: "width", minSize: "70px", maxSize: "142px", minScreen: "sm", maxScreen: "xxxl" },
         "fluid-testimonial-storm": { prop: "width", minSize: "46px", maxSize: "92px", minScreen: "sm", maxScreen: "xxxl" },
         "fluid-testimonial-quote": { prop: "width", minSize: "46px", maxSize: "92px", minScreen: "sm", maxScreen: "xxxl" },
         // font
         "fluid-title-page": { prop: "font-size", minSize: "32px", maxSize: "92px", minScreen: "500px", maxScreen: "xxl" },
         "fluid-title-small": { prop: "font-size", minSize: "10px", maxSize: "14px", minScreen: "sm", maxScreen: "xxl" },
         "fluid-title-block": { prop: "font-size", minSize: "16px", maxSize: "18px", minScreen: "sm", maxScreen: "xxl" },
         "fluid-title-section": { prop: "font-size", minSize: "24px", maxSize: "38px", minScreen: "sm", maxScreen: "xxl" },
         "fluid-text-punchline": { prop: "font-size", minSize: "15px", maxSize: "20px", minScreen: "sm", maxScreen: "xxl" },
         "fluid-text-accroche": { prop: "font-size", minSize: "16px", maxSize: "22px", minScreen: "sm", maxScreen: "xxl" }
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
         xl: ["24px", { lineHeight: "32px" }],
         xxl: ["32px", { lineHeight: "48px" }]
      },
      fontFamily: {
         body: ["Helvetica", "arial", "sans-serif"],
         title: ["Helvetica", "arial", "sans-serif"]
      },
      /*
      -------------------------------------
      COLORS
      -------------------------------------
      */
      colors: {
         transparent: "transparent",
         foreground: "hsl(212, 100%, 99%)",
         white: "hsl(0, 0%, 100%)",
         body: "hsl(210, 14%, 40%)",
         red: {
            DEFAULT: "hsl(356, 85%, 57%)",
            90: "hsl(356, 85%, 90%)"
         },
         blue: {
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
            80: "hsl(210, 14%, 80%)",
            84: "hsl(210, 14%, 84%)"
         },
         black: "hsl(0, 0%, 0%)"
      },
      /*
      -------------------------------------
      EXTEND DEFAULT TW CONFIG
      -------------------------------------
      */
      extend: {
         transitionTimingFunction: {
            "nav-in": "cubic-bezier(0, 0, 0.58, 1)",
            "nav-out": "cubic-bezier(0.42, 0, 1, 1)",
            "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
            "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)"
         },
         transitionDuration: {
            250: "250ms",
            350: "350ms",
            400: "400ms"
         },
         backgroundImage: {
            "dotted-pattern-light": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAAbklEQVRYCe3QywmAQAyE4YlFCIIWZCMWZSMWpCDYxL4OnvYgc/VfCCyBScIn8RBAAAEEEPi7QLgA5/2sStpbPrQt03g4swYn1DJleVKaa72HGMP8A4xlvYh/QGEPxVVL5d8bTg8BBBBAAAEEvghkxMEQCMouvFgAAAAASUVORK5CYII=')",
            "dotted-pattern-dark": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAAh0lEQVRIDe2SsQ6AIAxEhSgTi6Of4///Cy5MmIA1JB05OrAdYShw3IVX3Hnd28rhV5r/3gyAhImIiCABKOAvgoh2qFBBCEeMUZY551Je3R8Xhh6Iu3NeZo8Z++qpIUDvmApDgJBprcqUYj7D0APhntIzb92VhhdYrRkwSYw9gKCIiIggASj4AO6SGGl4qO+oAAAAAElFTkSuQmCC')"
         },
         zIndex: {
            1: "1"
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
