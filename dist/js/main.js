/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_progressBarRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/progressBarRender */ \"./modules/progressBarRender.js\");\n/* harmony import */ var _modules_course__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/course */ \"./modules/course.js\");\n\r\n\r\n\r\n\r\n// рендеринг анимации прогресса для карточки курса на главной странице и на странице курса\r\n//чтобы все работало нужно для линейного прогрессбара в элемент span <div  class=\"progress\"> передать значение процента в виде атрибута data-progress\r\n// для кольцевого значение передается вот в такой элемент <div data-progress=\"95\" class=\"circle\">\r\n//передавать значение процента при рендеринге страницы\r\n(0,_modules_progressBarRender__WEBPACK_IMPORTED_MODULE_0__.progressBarRender)();\r\n\r\n//скрипты для страницы курса\r\n(0,_modules_course__WEBPACK_IMPORTED_MODULE_1__.course)();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/course.js":
/*!***************************!*\
  !*** ./modules/course.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   course: () => (/* binding */ course)\n/* harmony export */ });\nconst course = () => {\r\n\r\n\r\n\r\n    document.addEventListener('click', (e)=>{\r\n        if(e.target.closest('.course__tab') && !e.target.closest('.course__tab').classList.contains('active')){\r\n            document.querySelector('.course__tab.active').classList.remove('active')\r\n            e.target.closest('.course__tab').classList.add('active')\r\n\r\n            const tabType = e.target.closest('.course__tab').dataset.state\r\n\r\n            document.querySelectorAll('.course__state').forEach(el=>{\r\n                if(el.dataset.state === tabType){\r\n                     el.classList.remove('hidden')\r\n                    } else {\r\n                        el.classList.add('hidden')\r\n                    }\r\n            })\r\n        }\r\n\r\n        if(e.target.closest('.course__filter-body') && !e.target.closest('.course__filter-list')){\r\n            e.target.closest('.course__filter-body').classList.toggle('active')\r\n        }\r\n\r\n        if(e.target.closest('.course__filter-input')){\r\n            e.target.closest('.course__filter-input').classList.toggle('checked')\r\n            let number = e.target.closest('.course__filter').querySelectorAll('.checked').length\r\n            \r\n            const span = e.target.closest('.course__filter').querySelector('span')\r\n            if(number > 0){\r\n                \r\n                span.textContent = number\r\n                span.classList.add('checked-filter')\r\n\r\n            } else {\r\n                span.classList.remove('checked-filter')\r\n            }\r\n        }\r\n\r\n        if(document.querySelector('.course__filter-body.active') && !e.target.closest('.course__filter')){\r\n            document.querySelectorAll('.course__filter-body.active').forEach(el=>{\r\n                el.classList.remove('active')\r\n            })\r\n        }\r\n\r\n        if(e.target.closest('.course__filter-clear')){\r\n            document.querySelectorAll('.course__filter .checked').forEach(el=>{\r\n                el.classList.remove('checked')\r\n                el.querySelector('input').checked=false\r\n            })\r\n            document.querySelectorAll('.checked-filter').forEach(el=>{\r\n                el.classList.remove('checked-filter')\r\n            })\r\n        }\r\n\r\n        if(e.target.closest('.course__module-title')) e.target.closest('.course__module').classList.toggle('active')\r\n\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/course.js?");

/***/ }),

/***/ "./modules/progressBarRender.js":
/*!**************************************!*\
  !*** ./modules/progressBarRender.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   progressBarRender: () => (/* binding */ progressBarRender)\n/* harmony export */ });\n\r\n\r\nconst progressBarRender = () => {\r\n\r\n    if(document.querySelector('.progress')){\r\n        document.querySelectorAll('.progress').forEach(el=>{\r\n            let percent = el.dataset.progress\r\n            \r\n            el.querySelector('.progress-result').style.width = percent+'%'\r\n        })\r\n    }\r\n\r\n    if(document.querySelector('.circle')){\r\n        document.querySelectorAll('.circle').forEach(el=>{\r\n            let percent = parseFloat(el.dataset.progress)\r\n            let counter = 0\r\n\r\n \r\n            // 263 это 100% для этого конкретно svg\r\n            \r\n            let intervalId = setInterval(()=>{\r\n                if(counter >= percent){\r\n                    clearInterval(intervalId)\r\n                }else{\r\n                    counter++\r\n                    el.querySelector('circle').style.strokeDashoffset = 263 - 2.63 * counter\r\n                }\r\n                \r\n            },25)\r\n\r\n        })\r\n    }\r\n\r\n    \r\n\r\n    \r\n    \r\n    \r\n\r\n}\n\n//# sourceURL=webpack:///./modules/progressBarRender.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;