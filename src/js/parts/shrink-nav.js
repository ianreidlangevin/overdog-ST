
var $ = require('jquery');
var body = $("body");

// shrink header function

$(window).on('load scroll resize orientationchange', function () {
	if ($(document).scrollTop() > 100) {
	    body.addClass('navbar--shrink');
	  } else {
	    body.removeClass('navbar--shrink');
	  }
});
