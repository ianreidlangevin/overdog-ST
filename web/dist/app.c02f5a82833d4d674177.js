/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 440:
/***/ (function() {

/*
--------------------------------------------------------------------------
  FOCUS OUTLINE ON TAB PRESS
--------------------------------------------------------------------------

  Detect if user press the TAB key, then add class focus

*/
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 9) {
    // if the tab key is pressed
    document.body.classList.add("outline-focus");
  }
});

/***/ }),

/***/ 718:
/***/ (function() {

/*
--------------------------------------------------------------------------
  Lazyload images with native lazy attribute if supported
--------------------------------------------------------------------------

  Based on a snippet from frontmend.com and adapted with the web.dev recommandations
  Opinionated by Ian Reid Langevin @3ejoueur - 2020

*/
// if browser support native loading attr
var lazyimages = document.querySelectorAll(".lazyload"); // common function - rename data-srset and data-src and remove them after

function renameDataSet(element) {
  element.srcset = element.dataset.srcset;
  element.src = element.dataset.src;
  element.style.opacity = "1"; // only for smoother transition
  // optionnal - clean html after

  element.removeAttribute("data-srcset");
  element.removeAttribute("data-src");
} // if IntersectionObserver IS support but NOT native lazy loading
// (Safari, old Chromium)


if ("IntersectionObserver" in window && !("loading" in HTMLImageElement.prototype)) {
  // imageObserver function
  var imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        renameDataSet(entry.target); // execute function for target

        imageObserver.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "300px 0px"
  }); // execute imageObserver function

  lazyimages.forEach(function (img) {
    imageObserver.observe(img);
  }); // else native lazy loading IS supported OR IntersectionObserver is NOT
  // (very new or very old browsers)
} else {
  lazyimages.forEach(function (img) {
    renameDataSet(img);
  });
}

/***/ }),

/***/ 830:
/***/ (function() {

/*
--------------------------------------------------------------------------
  Mega menu action on click
--------------------------------------------------------------------------
*/
var menuButton = document.querySelector(".navbar__menu-button");

if (menuButton) {
  menuButton.addEventListener("click", function () {
    document.body.classList.toggle("mega-nav--open");
    menuButton.setAttribute("aria-expanded", menuButton.getAttribute("aria-expanded") === "false" ? "true" : "false");
  });
}

/***/ }),

/***/ 667:
/***/ (function() {

/*
--------------------------------------------------------------------------
  Function to shrink nav on scroll
--------------------------------------------------------------------------
*/
var navbar = document.querySelector(".navbar");

if (navbar) {
  /* Function to show or hide navbar */
  var shrinkNav = function shrinkNav() {
    if (document.documentElement.scrollTop > 100) {
      navbar.classList.add("navbar--shrink");
    } else {
      navbar.classList.remove("navbar--shrink");
    }
  };

  var ticking = false;
  /* eventListener and thicking for performance */

  window.addEventListener("scroll", function (event) {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        shrinkNav();
        ticking = false;
      });
    }

    ticking = true;
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
!function() {
"use strict";
/* harmony import */ var _parts_a11y_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(440);
/* harmony import */ var _parts_a11y_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parts_a11y_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(830);
/* harmony import */ var _parts_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parts_menu_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parts_lazyload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(718);
/* harmony import */ var _parts_lazyload_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parts_lazyload_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_shrink_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var _parts_shrink_nav_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_parts_shrink_nav_js__WEBPACK_IMPORTED_MODULE_3__);
// app




}();
!function() {
"use strict";
// extracted by mini-css-extract-plugin

}();
/******/ })()
;