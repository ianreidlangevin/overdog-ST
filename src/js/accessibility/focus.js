/**
--------------------------------------------------------------------------
  Add the class focus-outline on body on tab keydown event
--------------------------------------------------------------------------
*/

window.addEventListener("keydown", event => {
   if (event.key === "Tab") { // if the tab key is pressed
      document.body.classList.add("outline-focus")
   }
})
