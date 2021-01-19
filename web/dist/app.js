/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_a11y_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/a11y.js */ "./src/js/parts/a11y.js");
/* harmony import */ var _parts_a11y_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parts_a11y_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/menu.js */ "./src/js/parts/menu.js");
/* harmony import */ var _parts_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parts_menu_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parts_lazyload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/lazyload.js */ "./src/js/parts/lazyload.js");
/* harmony import */ var _parts_lazyload_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parts_lazyload_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_shrink_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/shrink-nav.js */ "./src/js/parts/shrink-nav.js");
/* harmony import */ var _parts_shrink_nav_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_parts_shrink_nav_js__WEBPACK_IMPORTED_MODULE_3__);
// app






/***/ }),

/***/ "./src/js/parts/a11y.js":
/*!******************************!*\
  !*** ./src/js/parts/a11y.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
--------------------------------------------------------------------------
  FOCUS OUTLINE ON TAB PRESS
--------------------------------------------------------------------------

  Detect if user press the TAB key, then add class focus

*/

window.addEventListener("keydown", event => {
  if (event.keyCode === 9) { // if the tab key is pressed
    document.body.classList.add("outline-focus")
  }
})


/***/ }),

/***/ "./src/js/parts/lazyload.js":
/*!**********************************!*\
  !*** ./src/js/parts/lazyload.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./src/js/parts/menu.js":
/*!******************************!*\
  !*** ./src/js/parts/menu.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./src/js/parts/shrink-nav.js":
/*!************************************!*\
  !*** ./src/js/parts/shrink-nav.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! ./src/sass/index.scss */"./src/sass/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFydHMvYTExeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFydHMvbGF6eWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnRzL3Nocmluay1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lCO0FBQ0E7QUFDSTtBQUNFOzs7Ozs7Ozs7Ozs7QUNKL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEdBQUcsMEJBQTBCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gYXBwXG5pbXBvcnQgXCIuL3BhcnRzL2ExMXkuanNcIjtcbmltcG9ydCBcIi4vcGFydHMvbWVudS5qc1wiO1xuaW1wb3J0IFwiLi9wYXJ0cy9sYXp5bG9hZC5qc1wiO1xuaW1wb3J0IFwiLi9wYXJ0cy9zaHJpbmstbmF2LmpzXCI7XG4iLCIvKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgRk9DVVMgT1VUTElORSBPTiBUQUIgUFJFU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgRGV0ZWN0IGlmIHVzZXIgcHJlc3MgdGhlIFRBQiBrZXksIHRoZW4gYWRkIGNsYXNzIGZvY3VzXG5cbiovXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSA5KSB7IC8vIGlmIHRoZSB0YWIga2V5IGlzIHByZXNzZWRcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJvdXRsaW5lLWZvY3VzXCIpXG4gIH1cbn0pXG4iLCIvKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgTGF6eWxvYWQgaW1hZ2VzIHdpdGggbmF0aXZlIGxhenkgYXR0cmlidXRlIGlmIHN1cHBvcnRlZFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBCYXNlZCBvbiBhIHNuaXBwZXQgZnJvbSBmcm9udG1lbmQuY29tIGFuZCBhZGFwdGVkIHdpdGggdGhlIHdlYi5kZXYgcmVjb21tYW5kYXRpb25zXG4gIE9waW5pb25hdGVkIGJ5IElhbiBSZWlkIExhbmdldmluIEAzZWpvdWV1ciAtIDIwMjBcblxuKi9cblxuLy8gaWYgYnJvd3NlciBzdXBwb3J0IG5hdGl2ZSBsb2FkaW5nIGF0dHJcbmNvbnN0IGxhenlpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhenlsb2FkXCIpXG5cbi8vIGNvbW1vbiBmdW5jdGlvbiAtIHJlbmFtZSBkYXRhLXNyc2V0IGFuZCBkYXRhLXNyYyBhbmQgcmVtb3ZlIHRoZW0gYWZ0ZXJcbmZ1bmN0aW9uIHJlbmFtZURhdGFTZXQgKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5zcmNzZXQgPSBlbGVtZW50LmRhdGFzZXQuc3Jjc2V0XG4gIGVsZW1lbnQuc3JjID0gZWxlbWVudC5kYXRhc2V0LnNyY1xuICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIiAvLyBvbmx5IGZvciBzbW9vdGhlciB0cmFuc2l0aW9uXG4gIC8vIG9wdGlvbm5hbCAtIGNsZWFuIGh0bWwgYWZ0ZXJcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXNyY3NldFwiKVxuICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc3JjXCIpXG59XG5cbi8vIGlmIEludGVyc2VjdGlvbk9ic2VydmVyIElTIHN1cHBvcnQgYnV0IE5PVCBuYXRpdmUgbGF6eSBsb2FkaW5nXG4vLyAoU2FmYXJpLCBvbGQgQ2hyb21pdW0pXG5pZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdyAmJiAhKFwibG9hZGluZ1wiIGluIEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAvLyBpbWFnZU9ic2VydmVyIGZ1bmN0aW9uXG4gIGNvbnN0IGltYWdlT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICByZW5hbWVEYXRhU2V0KGVudHJ5LnRhcmdldCkgLy8gZXhlY3V0ZSBmdW5jdGlvbiBmb3IgdGFyZ2V0XG4gICAgICAgIGltYWdlT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICB7IHJvb3RNYXJnaW46IFwiMzAwcHggMHB4XCIgfSlcblxuICAvLyBleGVjdXRlIGltYWdlT2JzZXJ2ZXIgZnVuY3Rpb25cbiAgbGF6eWltYWdlcy5mb3JFYWNoKGltZyA9PiB7XG4gICAgaW1hZ2VPYnNlcnZlci5vYnNlcnZlKGltZylcbiAgfSlcblxuLy8gZWxzZSBuYXRpdmUgbGF6eSBsb2FkaW5nIElTIHN1cHBvcnRlZCBPUiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpcyBOT1Rcbi8vICh2ZXJ5IG5ldyBvciB2ZXJ5IG9sZCBicm93c2Vycylcbn0gZWxzZSB7XG4gIGxhenlpbWFnZXMuZm9yRWFjaChpbWcgPT4ge1xuICAgIHJlbmFtZURhdGFTZXQoaW1nKVxuICB9KVxufVxuIiwiLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIE1lZ2EgbWVudSBhY3Rpb24gb24gY2xpY2tcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJfX21lbnUtYnV0dG9uXCIpXG5cbmlmIChtZW51QnV0dG9uKSB7XG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJtZWdhLW5hdi0tb3BlblwiKVxuICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBtZW51QnV0dG9uLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwiZmFsc2VcIiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKVxuICB9KVxufVxuIiwiLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEZ1bmN0aW9uIHRvIHNocmluayBuYXYgb24gc2Nyb2xsXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIilcblxuaWYgKG5hdmJhcikge1xuICBsZXQgdGlja2luZyA9IGZhbHNlXG5cbiAgLyogZXZlbnRMaXN0ZW5lciBhbmQgdGhpY2tpbmcgZm9yIHBlcmZvcm1hbmNlICovXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBzaHJpbmtOYXYoKVxuICAgICAgICB0aWNraW5nID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGlja2luZyA9IHRydWVcbiAgfSlcblxuICAvKiBGdW5jdGlvbiB0byBzaG93IG9yIGhpZGUgbmF2YmFyICovXG4gIGZ1bmN0aW9uIHNocmlua05hdiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAxMDApIHtcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLS1zaHJpbmtcIilcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItLXNocmlua1wiKVxuICAgIH1cbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==