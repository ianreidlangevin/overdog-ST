/*
--------------------------------------------------------------------------
  Mega menu action on click
--------------------------------------------------------------------------
*/

var $ = require('jquery');


$('.navbar__menu-button').on('click', function () {

  $('body').toggleClass('mega-nav--open');
  // change aria expanded
  $(this).attr('aria-expanded', function (index, attr) {
    return attr == 'true' ? 'false' : 'true'
  });

});
