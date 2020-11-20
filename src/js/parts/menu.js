/*
--------------------------------------------------------------------------
  Mega menu action on click
--------------------------------------------------------------------------
*/

const menuButton = document.querySelector(".navbar__menu-button")

if (menuButton) {
  menuButton.addEventListener("click", () => {
    document.body.classList.toggle("mega-nav--open")
    menuButton.setAttribute("aria-expanded", menuButton.getAttribute("aria-expanded") === "false" ? "true" : "false")
  })
}
