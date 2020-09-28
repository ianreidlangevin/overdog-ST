
var $ = require('jquery');

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';

// Add-on to Bootstrap accordion - Scroll to view when accordion collapse

$('.accordions__content').on('shown.bs.collapse', function(e) {
  var $accordionItem = $(this).closest('.accordions__item');
  $('html,body').animate({
    scrollTop: $accordionItem.offset().top - 120
  }, 500);
});
