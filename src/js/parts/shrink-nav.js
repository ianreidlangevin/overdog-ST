/*
--------------------------------------------------------------------------
  Function to shrink nav on scroll
--------------------------------------------------------------------------
*/

const navbar = document.querySelector('.navbar');

window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
		navbar.classList.add('navbar--shrink');
  } else {
		navbar.classList.remove('navbar--shrink');
  }
}
