
jQuery(document).ready(function($) {

// scroll to view when accordion collapse

  $('.accordions__content').on('shown.bs.collapse', function(e) {
    var $accordion_item = $(this).closest('.accordions__item');
    $('html,body').animate({
      scrollTop: $accordion_item.offset().top - 76
    }, 500);
  });

});
