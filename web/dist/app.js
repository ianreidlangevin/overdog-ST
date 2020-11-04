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

/***/ "./node_modules/object-fit-images/dist/ofi.common-js.js":
/*!**************************************************************!*\
  !*** ./node_modules/object-fit-images/dist/ofi.common-js.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! npm.im/object-fit-images 3.2.4 */


var OFI = 'bfred-it:object-fit-images';
var propRegex = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g;
var testImg = typeof Image === 'undefined' ? {style: {'object-position': 1}} : new Image();
var supportsObjectFit = 'object-fit' in testImg.style;
var supportsObjectPosition = 'object-position' in testImg.style;
var supportsOFI = 'background-size' in testImg.style;
var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
var nativeGetAttribute = testImg.getAttribute;
var nativeSetAttribute = testImg.setAttribute;
var autoModeEnabled = false;

function createPlaceholder(w, h) {
	return ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E");
}

function polyfillCurrentSrc(el) {
	if (el.srcset && !supportsCurrentSrc && window.picturefill) {
		var pf = window.picturefill._;
		// parse srcset with picturefill where currentSrc isn't available
		if (!el[pf.ns] || !el[pf.ns].evaled) {
			// force synchronous srcset parsing
			pf.fillImg(el, {reselect: true});
		}

		if (!el[pf.ns].curSrc) {
			// force picturefill to parse srcset
			el[pf.ns].supported = false;
			pf.fillImg(el, {reselect: true});
		}

		// retrieve parsed currentSrc, if any
		el.currentSrc = el[pf.ns].curSrc || el.src;
	}
}

function getStyle(el) {
	var style = getComputedStyle(el).fontFamily;
	var parsed;
	var props = {};
	while ((parsed = propRegex.exec(style)) !== null) {
		props[parsed[1]] = parsed[2];
	}
	return props;
}

function setPlaceholder(img, width, height) {
	// Default: fill width, no height
	var placeholder = createPlaceholder(width || 1, height || 0);

	// Only set placeholder if it's different
	if (nativeGetAttribute.call(img, 'src') !== placeholder) {
		nativeSetAttribute.call(img, 'src', placeholder);
	}
}

function onImageReady(img, callback) {
	// naturalWidth is only available when the image headers are loaded,
	// this loop will poll it every 100ms.
	if (img.naturalWidth) {
		callback(img);
	} else {
		setTimeout(onImageReady, 100, img, callback);
	}
}

function fixOne(el) {
	var style = getStyle(el);
	var ofi = el[OFI];
	style['object-fit'] = style['object-fit'] || 'fill'; // default value

	// Avoid running where unnecessary, unless OFI had already done its deed
	if (!ofi.img) {
		// fill is the default behavior so no action is necessary
		if (style['object-fit'] === 'fill') {
			return;
		}

		// Where object-fit is supported and object-position isn't (Safari < 10)
		if (
			!ofi.skipTest && // unless user wants to apply regardless of browser support
			supportsObjectFit && // if browser already supports object-fit
			!style['object-position'] // unless object-position is used
		) {
			return;
		}
	}

	// keep a clone in memory while resetting the original to a blank
	if (!ofi.img) {
		ofi.img = new Image(el.width, el.height);
		ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
		ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src;

		// preserve for any future cloneNode calls
		// https://github.com/bfred-it/object-fit-images/issues/53
		nativeSetAttribute.call(el, "data-ofi-src", el.src);
		if (el.srcset) {
			nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
		}

		setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);

		// remove srcset because it overrides src
		if (el.srcset) {
			el.srcset = '';
		}
		try {
			keepSrcUsable(el);
		} catch (err) {
			if (window.console) {
				console.warn('https://bit.ly/ofi-old-browser');
			}
		}
	}

	polyfillCurrentSrc(ofi.img);

	el.style.backgroundImage = "url(\"" + ((ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"')) + "\")";
	el.style.backgroundPosition = style['object-position'] || 'center';
	el.style.backgroundRepeat = 'no-repeat';
	el.style.backgroundOrigin = 'content-box';

	if (/scale-down/.test(style['object-fit'])) {
		onImageReady(ofi.img, function () {
			if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
				el.style.backgroundSize = 'contain';
			} else {
				el.style.backgroundSize = 'auto';
			}
		});
	} else {
		el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
	}

	onImageReady(ofi.img, function (img) {
		setPlaceholder(el, img.naturalWidth, img.naturalHeight);
	});
}

function keepSrcUsable(el) {
	var descriptors = {
		get: function get(prop) {
			return el[OFI].img[prop ? prop : 'src'];
		},
		set: function set(value, prop) {
			el[OFI].img[prop ? prop : 'src'] = value;
			nativeSetAttribute.call(el, ("data-ofi-" + prop), value); // preserve for any future cloneNode
			fixOne(el);
			return value;
		}
	};
	Object.defineProperty(el, 'src', descriptors);
	Object.defineProperty(el, 'currentSrc', {
		get: function () { return descriptors.get('currentSrc'); }
	});
	Object.defineProperty(el, 'srcset', {
		get: function () { return descriptors.get('srcset'); },
		set: function (ss) { return descriptors.set(ss, 'srcset'); }
	});
}

function hijackAttributes() {
	function getOfiImageMaybe(el, name) {
		return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
	}
	if (!supportsObjectPosition) {
		HTMLImageElement.prototype.getAttribute = function (name) {
			return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
		};

		HTMLImageElement.prototype.setAttribute = function (name, value) {
			return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
		};
	}
}

function fix(imgs, opts) {
	var startAutoMode = !autoModeEnabled && !imgs;
	opts = opts || {};
	imgs = imgs || 'img';

	if ((supportsObjectPosition && !opts.skipTest) || !supportsOFI) {
		return false;
	}

	// use imgs as a selector or just select all images
	if (imgs === 'img') {
		imgs = document.getElementsByTagName('img');
	} else if (typeof imgs === 'string') {
		imgs = document.querySelectorAll(imgs);
	} else if (!('length' in imgs)) {
		imgs = [imgs];
	}

	// apply fix to all
	for (var i = 0; i < imgs.length; i++) {
		imgs[i][OFI] = imgs[i][OFI] || {
			skipTest: opts.skipTest
		};
		fixOne(imgs[i]);
	}

	if (startAutoMode) {
		document.body.addEventListener('load', function (e) {
			if (e.target.tagName === 'IMG') {
				fix(e.target, {
					skipTest: opts.skipTest
				});
			}
		}, true);
		autoModeEnabled = true;
		imgs = 'img'; // reset to a generic selector for watchMQ
	}

	// if requested, watch media queries for object-fit change
	if (opts.watchMQ) {
		window.addEventListener('resize', fix.bind(null, imgs, {
			skipTest: opts.skipTest
		}));
	}
}

fix.supportsObjectFit = supportsObjectFit;
fix.supportsObjectPosition = supportsObjectPosition;

hijackAttributes();

module.exports = fix;


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_objectfit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/objectfit.js */ "./src/js/parts/objectfit.js");
/* harmony import */ var _parts_a11y_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/a11y.js */ "./src/js/parts/a11y.js");
/* harmony import */ var _parts_a11y_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parts_a11y_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parts_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/menu.js */ "./src/js/parts/menu.js");
/* harmony import */ var _parts_menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parts_menu_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_lazysizes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/lazysizes.js */ "./src/js/parts/lazysizes.js");
/* harmony import */ var _parts_lazysizes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_parts_lazysizes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_shrink_nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/shrink-nav.js */ "./src/js/parts/shrink-nav.js");
/* harmony import */ var _parts_shrink_nav_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_parts_shrink_nav_js__WEBPACK_IMPORTED_MODULE_4__);

// polyfill for objectfit and svg def

// app






/***/ }),

/***/ "./src/js/parts/a11y.js":
/*!******************************!*\
  !*** ./src/js/parts/a11y.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {


/*
* Detect if user press the TAB key, then add class focus
*/

window.addEventListener("keydown", event => {
  if (event.keyCode === 9) { // if the tab key is pressed
    document.body.classList.add("outline-focus")
  }
})


/***/ }),

/***/ "./src/js/parts/lazysizes.js":
/*!***********************************!*\
  !*** ./src/js/parts/lazysizes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
--------------------------------------------------------------------------
  Lazysizes
--------------------------------------------------------------------------

  Delay image loading on scroll
  Docs : https://github.com/aFarkas/lazysizes

  Overdog : See the lazyload utility in SCSS folder for more details

*/

// import lazySizes from "lazysizes"

/*
* Set your options here if you need, defaults should be good
* Example
*

lazySizes.init({
    hFac: 10,
    loadMode: 1,
    throttleDelay: 100,
});

*/


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

const menuButton = document.querySelector(".navbar__menu-button");

menuButton.addEventListener("click", () => {
  document.body.classList.toggle("mega-nav--open")
})


/***/ }),

/***/ "./src/js/parts/objectfit.js":
/*!***********************************!*\
  !*** ./src/js/parts/objectfit.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_0__);
/*
--------------------------------------------------------------------------
  OBJECT FIT POLYFILL
--------------------------------------------------------------------------

  1. See objectfit mixin in SCSS for more details
  2. Docs for parameters https://github.com/fregante/object-fit-images

*/



// initialization
object_fit_images__WEBPACK_IMPORTED_MODULE_0___default()()


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

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    navbar.classList.add("navbar--shrink")
  } else {
    navbar.classList.remove("navbar--shrink")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1maXQtaW1hZ2VzL2Rpc3Qvb2ZpLmNvbW1vbi1qcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYXJ0cy9hMTF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYXJ0cy9sYXp5c2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnRzL29iamVjdGZpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFydHMvc2hyaW5rLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDYTs7QUFFYjtBQUNBO0FBQ0EsOENBQThDLFFBQVEsc0JBQXNCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQ0FBc0M7QUFDMUQsRUFBRTtBQUNGO0FBQ0Esb0JBQW9CLGtDQUFrQyxFQUFFO0FBQ3hELHNCQUFzQixzQ0FBc0M7QUFDNUQsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JPQTtBQUM4QjtBQUM5QjtBQUN5QjtBQUNBO0FBQ0s7QUFDQzs7Ozs7Ozs7Ozs7OztBQ04vQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRStDOztBQUUvQztBQUNBLHdEQUFlOzs7Ozs7Ozs7Ozs7QUNiZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qISBucG0uaW0vb2JqZWN0LWZpdC1pbWFnZXMgMy4yLjQgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIE9GSSA9ICdiZnJlZC1pdDpvYmplY3QtZml0LWltYWdlcyc7XG52YXIgcHJvcFJlZ2V4ID0gLyhvYmplY3QtZml0fG9iamVjdC1wb3NpdGlvbilcXHMqOlxccyooWy0uXFx3XFxzJV0rKS9nO1xudmFyIHRlc3RJbWcgPSB0eXBlb2YgSW1hZ2UgPT09ICd1bmRlZmluZWQnID8ge3N0eWxlOiB7J29iamVjdC1wb3NpdGlvbic6IDF9fSA6IG5ldyBJbWFnZSgpO1xudmFyIHN1cHBvcnRzT2JqZWN0Rml0ID0gJ29iamVjdC1maXQnIGluIHRlc3RJbWcuc3R5bGU7XG52YXIgc3VwcG9ydHNPYmplY3RQb3NpdGlvbiA9ICdvYmplY3QtcG9zaXRpb24nIGluIHRlc3RJbWcuc3R5bGU7XG52YXIgc3VwcG9ydHNPRkkgPSAnYmFja2dyb3VuZC1zaXplJyBpbiB0ZXN0SW1nLnN0eWxlO1xudmFyIHN1cHBvcnRzQ3VycmVudFNyYyA9IHR5cGVvZiB0ZXN0SW1nLmN1cnJlbnRTcmMgPT09ICdzdHJpbmcnO1xudmFyIG5hdGl2ZUdldEF0dHJpYnV0ZSA9IHRlc3RJbWcuZ2V0QXR0cmlidXRlO1xudmFyIG5hdGl2ZVNldEF0dHJpYnV0ZSA9IHRlc3RJbWcuc2V0QXR0cmlidXRlO1xudmFyIGF1dG9Nb2RlRW5hYmxlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjcmVhdGVQbGFjZWhvbGRlcih3LCBoKSB7XG5cdHJldHVybiAoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9J1wiICsgdyArIFwiJyBoZWlnaHQ9J1wiICsgaCArIFwiJyUzRSUzQy9zdmclM0VcIik7XG59XG5cbmZ1bmN0aW9uIHBvbHlmaWxsQ3VycmVudFNyYyhlbCkge1xuXHRpZiAoZWwuc3Jjc2V0ICYmICFzdXBwb3J0c0N1cnJlbnRTcmMgJiYgd2luZG93LnBpY3R1cmVmaWxsKSB7XG5cdFx0dmFyIHBmID0gd2luZG93LnBpY3R1cmVmaWxsLl87XG5cdFx0Ly8gcGFyc2Ugc3Jjc2V0IHdpdGggcGljdHVyZWZpbGwgd2hlcmUgY3VycmVudFNyYyBpc24ndCBhdmFpbGFibGVcblx0XHRpZiAoIWVsW3BmLm5zXSB8fCAhZWxbcGYubnNdLmV2YWxlZCkge1xuXHRcdFx0Ly8gZm9yY2Ugc3luY2hyb25vdXMgc3Jjc2V0IHBhcnNpbmdcblx0XHRcdHBmLmZpbGxJbWcoZWwsIHtyZXNlbGVjdDogdHJ1ZX0pO1xuXHRcdH1cblxuXHRcdGlmICghZWxbcGYubnNdLmN1clNyYykge1xuXHRcdFx0Ly8gZm9yY2UgcGljdHVyZWZpbGwgdG8gcGFyc2Ugc3Jjc2V0XG5cdFx0XHRlbFtwZi5uc10uc3VwcG9ydGVkID0gZmFsc2U7XG5cdFx0XHRwZi5maWxsSW1nKGVsLCB7cmVzZWxlY3Q6IHRydWV9KTtcblx0XHR9XG5cblx0XHQvLyByZXRyaWV2ZSBwYXJzZWQgY3VycmVudFNyYywgaWYgYW55XG5cdFx0ZWwuY3VycmVudFNyYyA9IGVsW3BmLm5zXS5jdXJTcmMgfHwgZWwuc3JjO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlKGVsKSB7XG5cdHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpLmZvbnRGYW1pbHk7XG5cdHZhciBwYXJzZWQ7XG5cdHZhciBwcm9wcyA9IHt9O1xuXHR3aGlsZSAoKHBhcnNlZCA9IHByb3BSZWdleC5leGVjKHN0eWxlKSkgIT09IG51bGwpIHtcblx0XHRwcm9wc1twYXJzZWRbMV1dID0gcGFyc2VkWzJdO1xuXHR9XG5cdHJldHVybiBwcm9wcztcbn1cblxuZnVuY3Rpb24gc2V0UGxhY2Vob2xkZXIoaW1nLCB3aWR0aCwgaGVpZ2h0KSB7XG5cdC8vIERlZmF1bHQ6IGZpbGwgd2lkdGgsIG5vIGhlaWdodFxuXHR2YXIgcGxhY2Vob2xkZXIgPSBjcmVhdGVQbGFjZWhvbGRlcih3aWR0aCB8fCAxLCBoZWlnaHQgfHwgMCk7XG5cblx0Ly8gT25seSBzZXQgcGxhY2Vob2xkZXIgaWYgaXQncyBkaWZmZXJlbnRcblx0aWYgKG5hdGl2ZUdldEF0dHJpYnV0ZS5jYWxsKGltZywgJ3NyYycpICE9PSBwbGFjZWhvbGRlcikge1xuXHRcdG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGltZywgJ3NyYycsIHBsYWNlaG9sZGVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiBvbkltYWdlUmVhZHkoaW1nLCBjYWxsYmFjaykge1xuXHQvLyBuYXR1cmFsV2lkdGggaXMgb25seSBhdmFpbGFibGUgd2hlbiB0aGUgaW1hZ2UgaGVhZGVycyBhcmUgbG9hZGVkLFxuXHQvLyB0aGlzIGxvb3Agd2lsbCBwb2xsIGl0IGV2ZXJ5IDEwMG1zLlxuXHRpZiAoaW1nLm5hdHVyYWxXaWR0aCkge1xuXHRcdGNhbGxiYWNrKGltZyk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGltZW91dChvbkltYWdlUmVhZHksIDEwMCwgaW1nLCBjYWxsYmFjayk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZml4T25lKGVsKSB7XG5cdHZhciBzdHlsZSA9IGdldFN0eWxlKGVsKTtcblx0dmFyIG9maSA9IGVsW09GSV07XG5cdHN0eWxlWydvYmplY3QtZml0J10gPSBzdHlsZVsnb2JqZWN0LWZpdCddIHx8ICdmaWxsJzsgLy8gZGVmYXVsdCB2YWx1ZVxuXG5cdC8vIEF2b2lkIHJ1bm5pbmcgd2hlcmUgdW5uZWNlc3NhcnksIHVubGVzcyBPRkkgaGFkIGFscmVhZHkgZG9uZSBpdHMgZGVlZFxuXHRpZiAoIW9maS5pbWcpIHtcblx0XHQvLyBmaWxsIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIHNvIG5vIGFjdGlvbiBpcyBuZWNlc3Nhcnlcblx0XHRpZiAoc3R5bGVbJ29iamVjdC1maXQnXSA9PT0gJ2ZpbGwnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gV2hlcmUgb2JqZWN0LWZpdCBpcyBzdXBwb3J0ZWQgYW5kIG9iamVjdC1wb3NpdGlvbiBpc24ndCAoU2FmYXJpIDwgMTApXG5cdFx0aWYgKFxuXHRcdFx0IW9maS5za2lwVGVzdCAmJiAvLyB1bmxlc3MgdXNlciB3YW50cyB0byBhcHBseSByZWdhcmRsZXNzIG9mIGJyb3dzZXIgc3VwcG9ydFxuXHRcdFx0c3VwcG9ydHNPYmplY3RGaXQgJiYgLy8gaWYgYnJvd3NlciBhbHJlYWR5IHN1cHBvcnRzIG9iamVjdC1maXRcblx0XHRcdCFzdHlsZVsnb2JqZWN0LXBvc2l0aW9uJ10gLy8gdW5sZXNzIG9iamVjdC1wb3NpdGlvbiBpcyB1c2VkXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Ly8ga2VlcCBhIGNsb25lIGluIG1lbW9yeSB3aGlsZSByZXNldHRpbmcgdGhlIG9yaWdpbmFsIHRvIGEgYmxhbmtcblx0aWYgKCFvZmkuaW1nKSB7XG5cdFx0b2ZpLmltZyA9IG5ldyBJbWFnZShlbC53aWR0aCwgZWwuaGVpZ2h0KTtcblx0XHRvZmkuaW1nLnNyY3NldCA9IG5hdGl2ZUdldEF0dHJpYnV0ZS5jYWxsKGVsLCBcImRhdGEtb2ZpLXNyY3NldFwiKSB8fCBlbC5zcmNzZXQ7XG5cdFx0b2ZpLmltZy5zcmMgPSBuYXRpdmVHZXRBdHRyaWJ1dGUuY2FsbChlbCwgXCJkYXRhLW9maS1zcmNcIikgfHwgZWwuc3JjO1xuXG5cdFx0Ly8gcHJlc2VydmUgZm9yIGFueSBmdXR1cmUgY2xvbmVOb2RlIGNhbGxzXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2JmcmVkLWl0L29iamVjdC1maXQtaW1hZ2VzL2lzc3Vlcy81M1xuXHRcdG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGVsLCBcImRhdGEtb2ZpLXNyY1wiLCBlbC5zcmMpO1xuXHRcdGlmIChlbC5zcmNzZXQpIHtcblx0XHRcdG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGVsLCBcImRhdGEtb2ZpLXNyY3NldFwiLCBlbC5zcmNzZXQpO1xuXHRcdH1cblxuXHRcdHNldFBsYWNlaG9sZGVyKGVsLCBlbC5uYXR1cmFsV2lkdGggfHwgZWwud2lkdGgsIGVsLm5hdHVyYWxIZWlnaHQgfHwgZWwuaGVpZ2h0KTtcblxuXHRcdC8vIHJlbW92ZSBzcmNzZXQgYmVjYXVzZSBpdCBvdmVycmlkZXMgc3JjXG5cdFx0aWYgKGVsLnNyY3NldCkge1xuXHRcdFx0ZWwuc3Jjc2V0ID0gJyc7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRrZWVwU3JjVXNhYmxlKGVsKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGlmICh3aW5kb3cuY29uc29sZSkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ2h0dHBzOi8vYml0Lmx5L29maS1vbGQtYnJvd3NlcicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHBvbHlmaWxsQ3VycmVudFNyYyhvZmkuaW1nKTtcblxuXHRlbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcXFwiXCIgKyAoKG9maS5pbWcuY3VycmVudFNyYyB8fCBvZmkuaW1nLnNyYykucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpKSArIFwiXFxcIilcIjtcblx0ZWwuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gc3R5bGVbJ29iamVjdC1wb3NpdGlvbiddIHx8ICdjZW50ZXInO1xuXHRlbC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG5cdGVsLnN0eWxlLmJhY2tncm91bmRPcmlnaW4gPSAnY29udGVudC1ib3gnO1xuXG5cdGlmICgvc2NhbGUtZG93bi8udGVzdChzdHlsZVsnb2JqZWN0LWZpdCddKSkge1xuXHRcdG9uSW1hZ2VSZWFkeShvZmkuaW1nLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAob2ZpLmltZy5uYXR1cmFsV2lkdGggPiBlbC53aWR0aCB8fCBvZmkuaW1nLm5hdHVyYWxIZWlnaHQgPiBlbC5oZWlnaHQpIHtcblx0XHRcdFx0ZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdhdXRvJztcblx0XHRcdH1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRlbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IHN0eWxlWydvYmplY3QtZml0J10ucmVwbGFjZSgnbm9uZScsICdhdXRvJykucmVwbGFjZSgnZmlsbCcsICcxMDAlIDEwMCUnKTtcblx0fVxuXG5cdG9uSW1hZ2VSZWFkeShvZmkuaW1nLCBmdW5jdGlvbiAoaW1nKSB7XG5cdFx0c2V0UGxhY2Vob2xkZXIoZWwsIGltZy5uYXR1cmFsV2lkdGgsIGltZy5uYXR1cmFsSGVpZ2h0KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBTcmNVc2FibGUoZWwpIHtcblx0dmFyIGRlc2NyaXB0b3JzID0ge1xuXHRcdGdldDogZnVuY3Rpb24gZ2V0KHByb3ApIHtcblx0XHRcdHJldHVybiBlbFtPRkldLmltZ1twcm9wID8gcHJvcCA6ICdzcmMnXTtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24gc2V0KHZhbHVlLCBwcm9wKSB7XG5cdFx0XHRlbFtPRkldLmltZ1twcm9wID8gcHJvcCA6ICdzcmMnXSA9IHZhbHVlO1xuXHRcdFx0bmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoZWwsIChcImRhdGEtb2ZpLVwiICsgcHJvcCksIHZhbHVlKTsgLy8gcHJlc2VydmUgZm9yIGFueSBmdXR1cmUgY2xvbmVOb2RlXG5cdFx0XHRmaXhPbmUoZWwpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsLCAnc3JjJywgZGVzY3JpcHRvcnMpO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsICdjdXJyZW50U3JjJywge1xuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVzY3JpcHRvcnMuZ2V0KCdjdXJyZW50U3JjJyk7IH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbCwgJ3NyY3NldCcsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlc2NyaXB0b3JzLmdldCgnc3Jjc2V0Jyk7IH0sXG5cdFx0c2V0OiBmdW5jdGlvbiAoc3MpIHsgcmV0dXJuIGRlc2NyaXB0b3JzLnNldChzcywgJ3NyY3NldCcpOyB9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBoaWphY2tBdHRyaWJ1dGVzKCkge1xuXHRmdW5jdGlvbiBnZXRPZmlJbWFnZU1heWJlKGVsLCBuYW1lKSB7XG5cdFx0cmV0dXJuIGVsW09GSV0gJiYgZWxbT0ZJXS5pbWcgJiYgKG5hbWUgPT09ICdzcmMnIHx8IG5hbWUgPT09ICdzcmNzZXQnKSA/IGVsW09GSV0uaW1nIDogZWw7XG5cdH1cblx0aWYgKCFzdXBwb3J0c09iamVjdFBvc2l0aW9uKSB7XG5cdFx0SFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRcdHJldHVybiBuYXRpdmVHZXRBdHRyaWJ1dGUuY2FsbChnZXRPZmlJbWFnZU1heWJlKHRoaXMsIG5hbWUpLCBuYW1lKTtcblx0XHR9O1xuXG5cdFx0SFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gbmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoZ2V0T2ZpSW1hZ2VNYXliZSh0aGlzLCBuYW1lKSwgbmFtZSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBmaXgoaW1ncywgb3B0cykge1xuXHR2YXIgc3RhcnRBdXRvTW9kZSA9ICFhdXRvTW9kZUVuYWJsZWQgJiYgIWltZ3M7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHRpbWdzID0gaW1ncyB8fCAnaW1nJztcblxuXHRpZiAoKHN1cHBvcnRzT2JqZWN0UG9zaXRpb24gJiYgIW9wdHMuc2tpcFRlc3QpIHx8ICFzdXBwb3J0c09GSSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIHVzZSBpbWdzIGFzIGEgc2VsZWN0b3Igb3IganVzdCBzZWxlY3QgYWxsIGltYWdlc1xuXHRpZiAoaW1ncyA9PT0gJ2ltZycpIHtcblx0XHRpbWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBpbWdzID09PSAnc3RyaW5nJykge1xuXHRcdGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGltZ3MpO1xuXHR9IGVsc2UgaWYgKCEoJ2xlbmd0aCcgaW4gaW1ncykpIHtcblx0XHRpbWdzID0gW2ltZ3NdO1xuXHR9XG5cblx0Ly8gYXBwbHkgZml4IHRvIGFsbFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRpbWdzW2ldW09GSV0gPSBpbWdzW2ldW09GSV0gfHwge1xuXHRcdFx0c2tpcFRlc3Q6IG9wdHMuc2tpcFRlc3Rcblx0XHR9O1xuXHRcdGZpeE9uZShpbWdzW2ldKTtcblx0fVxuXG5cdGlmIChzdGFydEF1dG9Nb2RlKSB7XG5cdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnSU1HJykge1xuXHRcdFx0XHRmaXgoZS50YXJnZXQsIHtcblx0XHRcdFx0XHRza2lwVGVzdDogb3B0cy5za2lwVGVzdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LCB0cnVlKTtcblx0XHRhdXRvTW9kZUVuYWJsZWQgPSB0cnVlO1xuXHRcdGltZ3MgPSAnaW1nJzsgLy8gcmVzZXQgdG8gYSBnZW5lcmljIHNlbGVjdG9yIGZvciB3YXRjaE1RXG5cdH1cblxuXHQvLyBpZiByZXF1ZXN0ZWQsIHdhdGNoIG1lZGlhIHF1ZXJpZXMgZm9yIG9iamVjdC1maXQgY2hhbmdlXG5cdGlmIChvcHRzLndhdGNoTVEpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4LmJpbmQobnVsbCwgaW1ncywge1xuXHRcdFx0c2tpcFRlc3Q6IG9wdHMuc2tpcFRlc3Rcblx0XHR9KSk7XG5cdH1cbn1cblxuZml4LnN1cHBvcnRzT2JqZWN0Rml0ID0gc3VwcG9ydHNPYmplY3RGaXQ7XG5maXguc3VwcG9ydHNPYmplY3RQb3NpdGlvbiA9IHN1cHBvcnRzT2JqZWN0UG9zaXRpb247XG5cbmhpamFja0F0dHJpYnV0ZXMoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaXg7XG4iLCJcbi8vIHBvbHlmaWxsIGZvciBvYmplY3RmaXQgYW5kIHN2ZyBkZWZcbmltcG9ydCAnLi9wYXJ0cy9vYmplY3RmaXQuanMnO1xuLy8gYXBwXG5pbXBvcnQgJy4vcGFydHMvYTExeS5qcyc7XG5pbXBvcnQgJy4vcGFydHMvbWVudS5qcyc7XG5pbXBvcnQgJy4vcGFydHMvbGF6eXNpemVzLmpzJztcbmltcG9ydCAnLi9wYXJ0cy9zaHJpbmstbmF2LmpzJztcbiIsIlxuLypcbiogRGV0ZWN0IGlmIHVzZXIgcHJlc3MgdGhlIFRBQiBrZXksIHRoZW4gYWRkIGNsYXNzIGZvY3VzXG4qL1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSkgeyAvLyBpZiB0aGUgdGFiIGtleSBpcyBwcmVzc2VkXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwib3V0bGluZS1mb2N1c1wiKVxuICB9XG59KVxuIiwiLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIExhenlzaXplc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBEZWxheSBpbWFnZSBsb2FkaW5nIG9uIHNjcm9sbFxuICBEb2NzIDogaHR0cHM6Ly9naXRodWIuY29tL2FGYXJrYXMvbGF6eXNpemVzXG5cbiAgT3ZlcmRvZyA6IFNlZSB0aGUgbGF6eWxvYWQgdXRpbGl0eSBpbiBTQ1NTIGZvbGRlciBmb3IgbW9yZSBkZXRhaWxzXG5cbiovXG5cbi8vIGltcG9ydCBsYXp5U2l6ZXMgZnJvbSBcImxhenlzaXplc1wiXG5cbi8qXG4qIFNldCB5b3VyIG9wdGlvbnMgaGVyZSBpZiB5b3UgbmVlZCwgZGVmYXVsdHMgc2hvdWxkIGJlIGdvb2RcbiogRXhhbXBsZVxuKlxuXG5sYXp5U2l6ZXMuaW5pdCh7XG4gICAgaEZhYzogMTAsXG4gICAgbG9hZE1vZGU6IDEsXG4gICAgdGhyb3R0bGVEZWxheTogMTAwLFxufSk7XG5cbiovXG4iLCIvKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgTWVnYSBtZW51IGFjdGlvbiBvbiBjbGlja1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9fbWVudS1idXR0b25cIik7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibWVnYS1uYXYtLW9wZW5cIilcbn0pXG4iLCIvKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgT0JKRUNUIEZJVCBQT0xZRklMTFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAxLiBTZWUgb2JqZWN0Zml0IG1peGluIGluIFNDU1MgZm9yIG1vcmUgZGV0YWlsc1xuICAyLiBEb2NzIGZvciBwYXJhbWV0ZXJzIGh0dHBzOi8vZ2l0aHViLmNvbS9mcmVnYW50ZS9vYmplY3QtZml0LWltYWdlc1xuXG4qL1xuXG5pbXBvcnQgb2JqZWN0Rml0SW1hZ2VzIGZyb20gXCJvYmplY3QtZml0LWltYWdlc1wiXG5cbi8vIGluaXRpYWxpemF0aW9uXG5vYmplY3RGaXRJbWFnZXMoKVxuIiwiLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEZ1bmN0aW9uIHRvIHNocmluayBuYXYgb24gc2Nyb2xsXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIilcblxud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDEwMCkge1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLS1zaHJpbmtcIilcbiAgfSBlbHNlIHtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci0tc2hyaW5rXCIpXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=