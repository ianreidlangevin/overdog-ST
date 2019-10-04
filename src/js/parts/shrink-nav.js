

// shrink header function

jQuery(document).ready(function($) {

  $(window).on('load scroll resize orientationchange', function () {
		if ($(document).scrollTop() > 20) {
		    $('.navbar').addClass('navbar--shrink');
		  } else {
		    $('.navbar').removeClass('navbar--shrink');
		  }
  });

});
