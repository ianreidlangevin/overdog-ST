
var $ = require('jquery');


// MEGA MENU

$(".navbar__menu-button").on('click', function () {

  // toggle class on body
  $("body").toggleClass("mega-nav--open");
  // change aria expanded
  $(this).attr('aria-expanded', function (index, attr) {
    return attr == 'true' ? 'false' : 'true'
  });

});
