module.exports = {

   /*
   --------------------------------------------------------------------------
   CONTENT TO WATCH
   Folders needs to be specific to avoid watching files modified by Webpack (style and script.twig, etc.)
   --------------------------------------------------------------------------
   */
   content: [
      "./templates/_base/**/*",
      "./templates/_lib/**/*",
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
         }
      },
      /*
      -------------------------------------
      SPACING
      Real ratio value
      -------------------------------------
      */
      spacing: {
         // PIXEL
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
         // EM
         "0.125em": "0.125em",
         "0.25em": "0.25em",
         "0.3em": "0.3em",
         "0.375em": "0.375rem",
         "0.5em": "0.5em",
         "0.75em": "0.75em",
         "1em": "1em",
         "1.125em": "1.125em",
         "1.25em": "1.25em",
         "1.5em": "1.5em",
         "1.6em": "1.6em",
         "1.75em": "1.75em",
         "2em": "2em",
         "2.25em": "2.25em",
         "2.5em": "2.5em",
         "2.75em": "2.75em",
         "3em": "3em",
         "3.5em": "3.5em",
         "4em": "4em",
         "5em": "5em",
         "6em": "6em",
         "7em": "7em",
         "8em": "8em",
         "9em": "9em",
         "10em": "10em",
         "11em": "11em",
         "12em": "12em",
         // REM
         0.125: "0.125rem",
         0.25: "0.25rem",
         0.375: "0.375rem",
         0.5: "0.5rem",
         0.625: "0.625rem",
         0.75: "0.75rem",
         0.875: "0.875rem",
         1: "1rem",
         1.25: "1.25rem",
         1.5: "1.5rem",
         1.75: "1.75rem",
         2: "2rem",
         2.25: "2.25rem",
         2.5: "2.5rem",
         2.75: "2.75rem",
         3: "3rem",
         3.5: "3.5rem",
         4: "4rem",
         5: "5rem",
         6: "6rem",
         7: "7rem",
         8: "8rem",
         9: "9rem",
         10: "10rem",
         11: "11rem",
         12: "12rem"
      },
      /*
      -------------------------------------
      BORDER RADIUS
      Will use all value from spacing
      -------------------------------------
      */
      borderRadius: ({ theme }) => ({
         DEFAULT: "0.25rem",
         full: "9999px",
         ...theme("spacing")
      })
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
