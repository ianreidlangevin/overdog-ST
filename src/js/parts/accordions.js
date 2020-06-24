
var $ = require('jquery');

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';

// Add-on to Bootstrap accordion - Scroll to view when accordion collapse
// USE ONLY FOR ACCORDIONS WITH VIDEO IN CONSEIL

  $('.accordions__video').on('shown.bs.collapse', function(e) {
    $('html,body').animate({
      scrollTop: $(this).offset().top - 160
    }, 500);
  });
