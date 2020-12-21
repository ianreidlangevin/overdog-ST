/*
--------------------------------------------------------------------------
  Lazyload images with native lazy attribute if supported
--------------------------------------------------------------------------

  Based on a snippet from frontmend.com and adapted with the web.dev recommandations
  Opinionated by Ian Reid Langevin @3ejoueur - 2020

*/

// if browser support native loading attr
const lazyimages = document.querySelectorAll(".lazyload")

// common function - rename data-srset and data-src and remove them after
function renameDataSet (element) {
  element.srcset = element.dataset.srcset
  element.src = element.dataset.src
  element.style.opacity = "1" // only for smoother transition
  // optionnal - clean html after
  element.removeAttribute("data-srcset")
  element.removeAttribute("data-src")
}

// if IntersectionObserver IS support but NOT native lazy loading
// (Safari, old Chromium)
if ("IntersectionObserver" in window && !("loading" in HTMLImageElement.prototype)) {
  // imageObserver function
  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        renameDataSet(entry.target) // execute function for target
        imageObserver.unobserve(entry.target)
      }
    })
  },
  { rootMargin: "300px 0px" })

  // execute imageObserver function
  lazyimages.forEach(img => {
    imageObserver.observe(img)
  })

// else native lazy loading IS supported OR IntersectionObserver is NOT
// (very new or very old browsers)
} else {
  lazyimages.forEach(img => {
    renameDataSet(img)
  })
}
