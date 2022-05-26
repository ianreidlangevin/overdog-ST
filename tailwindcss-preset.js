module.exports = {
   /*
   --------------------------------------------------------------------------
   CONTENT TO WATCH
   Folders needs to be specific to avoid watching files modified by Webpack (style and script.twig, etc.)
   --------------------------------------------------------------------------
   */
   content: [
      "./templates/_base/**/*",
      "./templates/_macros/**/*",
      "./templates/_navigation/**/*",
      "./templates/_sections/**/*",
      "./templates/_shared/**/*",
      "./templates/404.twig",
      "./src/js/**/*.js"
   ],

   /*
   -------------------------------------
   DEFAULT OVERDOG THEME PRESET
   -------------------------------------
   */
   theme: {
      /*
      -------------------------------------
      BREAKPOINTS
      -------------------------------------
      */
      screens: {
         sm: "576px",
         md: "768px",
         lg: "1024px",
         xl: "1200px",
         xxl: "1400px",
         xxxl: "1600px"
      },
      /*
      -------------------------------------
      EXTEND (leading-{value})
      -------------------------------------
      */
      extend: {
         /* extend line-height */
         lineHeight: {
            "extra-tight": "0.9",
            "extra-loose": "2"
         },
         /* extend font-size with a EM scale */
         fontSize: {
            1: ["0.6em"],
            2: ["0.65em"],
            3: ["0.7em"],
            4: ["0.75em"],
            5: ["0.8em"],
            6: ["0.85em"],
            7: ["0.9em"],
            8: ["1em"],
            9: ["1.25em"],
            10: ["1.50em"],
            11: ["1.75em"],
            12: ["2em"],
            13: ["2.25em"],
            14: ["2.5em"],
            15: ["2.75em"],
            16: ["3em"],
            17: ["3.25em"],
            18: ["3.5em"],
            19: ["3.75em"],
            20: ["4em"]
         },
         /* extend fluid css to create a default scale */
         fluidCSS: {
            "fluid-text-1": { prop: "font-size", minSize: "15px", maxSize: "18px", minScreen: "sm", maxScreen: "xxxl" },
            "fluid-text-2": { prop: "font-size", minSize: "16px", maxSize: "20px", minScreen: "sm", maxScreen: "xxxl" },
            "fluid-text-3": { prop: "font-size", minSize: "17px", maxSize: "24px", minScreen: "sm", maxScreen: "xxxl" },
            "fluid-text-4": { prop: "font-size", minSize: "20px", maxSize: "28px", minScreen: "sm", maxScreen: "xxxl" },
            "fluid-text-5": { prop: "font-size", minSize: "22px", maxSize: "32px", minScreen: "sm", maxScreen: "xxxl" },
            "fluid-text-6": { prop: "font-size", minSize: "24px", maxSize: "36px", minScreen: "sm", maxScreen: "xxxl" },
            "fluid-text-7": { prop: "font-size", minSize: "26px", maxSize: "42px", minScreen: "sm", maxScreen: "xxxl" },
            "fluid-text-8": { prop: "font-size", minSize: "28px", maxSize: "48px", minScreen: "sm", maxScreen: "xxxl" },
            "fluid-text-9": { prop: "font-size", minSize: "30px", maxSize: "54px", minScreen: "sm", maxScreen: "xxxl" },
            "fluid-text-10": { prop: "font-size", minSize: "32px", maxSize: "60px", minScreen: "sm", maxScreen: "xxxl" },
            "fluid-text-11": { prop: "font-size", minSize: "34px", maxSize: "66px", minScreen: "sm", maxScreen: "xxxl" },
            "fluid-text-12": { prop: "font-size", minSize: "36px", maxSize: "72px", minScreen: "sm", maxScreen: "xxxl" }
         },
         /* extend aspect-ratio (aspect-{value}) */
         aspectRatio: {
            "1/1": "1/1",
            "2/3": "2/3",
            "3/2": "3/2",
            "16/9": "16/9",
            "4/3": "4/3",
            "3/4": "3/4",
            "4/5": "4/5"
         },
         /* extend transition-duration */
         transitionDuration: {
            250: "250ms",
            350: "350ms",
            400: "400ms",
            600: "600ms"
         },
         zIndex: {
            1: "1"
         },
         transitionTimingFunction: {
            "nav-in": "cubic-bezier(0, 0, 0.58, 1)",
            "nav-out": "cubic-bezier(0.42, 0, 1, 1)",
            "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
            "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)"
         },
         keyframes: {
            "fade-in": {
               "0%": { opacity: "0" },
               "100%": { opacity: "1" }
            }
         },
         animation: {
            "fade-in": "fade-in 0.150s ease-in-out"
         },
         spacing: {
            // PIXELS - SMALL UNIT SCALE FOR PIXELS
            "2px": "2px",
            "3px": "3px",
            "4px": "4px",
            "5px": "5px",
            "6px": "6px",
            "7px": "7px",
            "8px": "8px",
            "9px": "9px",
            "10px": "10px",
            "11px": "11px",
            "12px": "12px",
            // FLUID SPACING - based on a value on the :root
            full: "var(--spacing)",
            threequarter: "calc(var(--spacing) * 0.75)",
            twothird: "calc(var(--spacing) * 0.66)",
            half: "calc(var(--spacing) * 0.5)",
            third: "calc(var(--spacing) * 0.33)",
            quarter: "calc(var(--spacing) * 0.25)",
            sixth: "calc(var(--spacing) * 0.16)",
            // SAME SCALING AS REM BUT FOR EM UNIT
            "0.5/em": "0.125em",
            "1/em": "0.25em",
            "1.5/em": "0.375em",
            "2/em": "0.5rem",
            "2.5/em": "0.625em",
            "3/em": "0.75em",
            "3.5/em": "0.875em",
            "4/em": "1em",
            "5/em": "1.25em",
            "6/em": "1.5em",
            "7/em": "1.75em",
            "8/em": "2em",
            "9/em": "2.25em",
            "10/em": "2.5em",
            "11/em": "2.75em",
            "12/em": "3em",
            "14/em": "3.5em",
            "16/em": "4em",
            "20/em": "5em",
            "24/em": "6em",
            "28/em": "7em",
            "32/em": "8em",
            "36/em": "9em",
            "40/em": "10em",
            "44/em": "11em",
            "48/em": "12em",
            "52/em": "13em",
            "56/em": "14em",
            "60/em": "15em",
            "64/em": "16em",
            "72/em": "18em",
            "80/em": "20em",
            "96/em": "24em"
         }
      }
   },
   /*
   --------------------------------------------------------------------------
   CORE PLUGINS
   --------------------------------------------------------------------------
   */
   corePlugins: {
      container: false,
      // the following plugins will be removed in the future from Tailwind 4
      textOpacity: false,
      backgroundOpacity: false,
      borderOpacity: false,
      divideOpacity: false,
      placeholderOpacity: false,
      ringOpacity: false
   }
}
