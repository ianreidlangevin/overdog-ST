
jQuery(document).ready(function($) {

  var body = $("body");

    // MEGA MENU

    function meganav_toggle(){
      body.toggleClass("mega-nav--open");
    }
    $(".navbar__hamburger").on('click', meganav_toggle);


    // CLASSIC MENU - Delete if you use a mega-nav

    // show/hide mobile menu

    function mobile_toggle(){
      body.toggleClass("mobile-nav--open");
    }
    $(".classic-nav__hamburger").on('click', mobile_toggle);


    // CLASSIC MENU - BOOTSTRAP ADD-ON - Delete if you use a mega-nav

    // add slide effect to bootstrap dropdown
    $('.dropdown').on('show.bs.dropdown', function(e){
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('.dropdown').on('hide.bs.dropdown', function(e){
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });


});
