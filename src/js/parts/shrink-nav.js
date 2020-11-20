/*
--------------------------------------------------------------------------
  Function to shrink nav on scroll
--------------------------------------------------------------------------
*/

const navbar = document.querySelector(".navbar")

if (navbar) {
  let ticking = false

  /* eventListener and thicking for performance */
  window.addEventListener("scroll", event => {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        shrinkNav()
        ticking = false
      })
    }

    ticking = true
  })

  /* Function to show or hide navbar */
  function shrinkNav () {
    if (document.documentElement.scrollTop > 100) {
      navbar.classList.add("navbar--shrink")
    } else {
      navbar.classList.remove("navbar--shrink")
    }
  }
}
