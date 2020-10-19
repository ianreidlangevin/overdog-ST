
/*
* Detect if user press the TAB key, then add class focus
*/

window.addEventListener("keydown", event => {
  if (event.keyCode === 9) { // if the tab key is pressed
      document.body.classList.add('outline-focus');
  }
});
