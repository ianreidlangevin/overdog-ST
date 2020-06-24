
var $ = require('jquery');

var body = $("body");

// MEGA MENU

function meganav_toggle(){
  body.toggleClass("mega-nav--open");
}
$(".navbar__hamburger").on('click', meganav_toggle);
