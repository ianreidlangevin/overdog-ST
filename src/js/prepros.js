/*
* NOTE
* Use the split bootsrap version in the lib folder to add or remove js scripts
* The bootstrap dropdown is useful only if you use the theme classic navigation
* Bootstrap util.js must be prepend before using collapse and dropdown, see bootstrap doc for dependencies.
*/

/*
* IMPORTANT - Use Prepros.io - output is theme.min.js in the dist folder.
* library scripts - output is theme.js in the dist folder
*
* USE - Add two slash before a line to make Prepros process it.
*/


/* LIB VENDOR COMPONENTS */

// @prepros-prepend ../lib/node_modules/jquery/dist/jquery.js
// @prepros-prepend ../lib/node_modules/flickity/dist/flickity.pkgd.js


/* BOOTSTRAP SCRIPT - delete if not used or add if you need other components */

// @prepros-prepend ../lib/node_modules/bootstrap/js/dist/util.js
// @prepros-prepend ../lib/node_modules/bootstrap/js/dist/collapse.js


/* OUR THEME SCRIPT */

// @prepros-prepend parts/main.js
// @prepros-prepend parts/menus.js
// @prepros-prepend parts/shrink-nav.js
// @prepros-prepend parts/accordions.js
