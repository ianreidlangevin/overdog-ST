/*
--------------------------------------------------------------------------
  Mega menu action on click
--------------------------------------------------------------------------
*/

const menuButton = document.querySelector(".navbar__menu-button")

menuButton.addEventListener("click", () => {
  document.body.classList.toggle("mega-nav--open")
})
