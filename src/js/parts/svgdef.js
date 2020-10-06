/*
--------------------------------------------------------------------------
  SVG def polyfill
--------------------------------------------------------------------------

  Allow the use of external SVG sprite for older browsers
  Docs for info : https://github.com/jonathantneal/svg4everybody

*/

import svg4everybody from 'svg4everybody';

// initialization
svg4everybody({
  polyfill: true
});
