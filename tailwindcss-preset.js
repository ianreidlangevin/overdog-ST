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
            0.9: "0.9",
            0.95: "0.95",
            1: "1",
            1.1: "1.1",
            1.2: "1.2",
            1.3: "1.3",
            1.4: "1.4",
            1.5: "1.5",
            1.6: "1.6",
            1.7: "1.7"
         },
         /* extend font-size */
         fontSize: {
            "0.6em": ["0.6em"],
            "0.65em": ["0.65em"],
            "0.7em": ["0.7em"],
            "0.75em": ["0.75em"],
            "0.8em": ["0.8em"],
            "0.85em": ["0.85em"],
            "0.9em": ["0.9em"]
         },
         /* extend aspect-ratio (aspect-{value}) */
         aspectRatio: {
            "1/1": "1/1",
            "3/2": "3/2",
            "16/9": "16/9",
            "4/3": "4/3",
            "3/4": "3/4"
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
            0: "0px",
            px: "1px",
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
      container: false
   }
}
