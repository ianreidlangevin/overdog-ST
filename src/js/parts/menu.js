/*
--------------------------------------------------------------------------
  Mega menu action on click
--------------------------------------------------------------------------
*/

const menuButton = document.querySelector('.navbar__menu-button');

menuButton.onclick = function() {
  document.body.classList.toggle('mega-nav--open')
}
