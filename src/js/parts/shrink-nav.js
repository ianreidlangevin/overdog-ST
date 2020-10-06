/*
--------------------------------------------------------------------------
  Function to shrink nav on scroll 
--------------------------------------------------------------------------
*/

var $ = require('jquery');
var navbar = $('.navbar');

// shrink header function

$(window).on('load scroll resize orientationchange', function () {
	if ($(document).scrollTop() > 100) {
	  navbar.addClass('navbar--shrink');
	} else {
	  navbar.removeClass('navbar--shrink');
	}
});
