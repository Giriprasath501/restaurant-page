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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadcontact: () => (/* binding */ loadcontact)\n/* harmony export */ });\nfunction loadcontact(){\r\n    const content = document.getElementById('content');\r\n    const recipediv = document.createElement('div');\r\n    recipediv.className = 'box';\r\n    recipediv.innerHTML = `<h1>Recipes</h1>\r\n    <p>\r\n        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. \r\n        Perfect for everyday cooking or special occasions. \r\n        Each recipe is explained step by step, making it easy even for beginners. \r\n        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.\r\n    </p>`;\r\n\r\n    content.appendChild(recipediv);\r\n    \r\n    const sweetdiv = document.createElement('div');\r\n    sweetdiv.className('box');\r\n    sweetdiv.innerHTML = `<h1>Recipes</h1>\r\n    <p>\r\n        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. \r\n        Perfect for everyday cooking or special occasions. \r\n        Each recipe is explained step by step, making it easy even for beginners. \r\n        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.\r\n    </p>`;\r\n\r\n    content.appendChild(sweetdiv);\r\n    \r\n    const snackdiv = document.createElement('div');\r\n    snackdiv.className('box');\r\n    snackdiv.innerHTML = `<h1>Recipes</h1>\r\n    <p>\r\n        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. \r\n        Perfect for everyday cooking or special occasions. \r\n        Each recipe is explained step by step, making it easy even for beginners. \r\n        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.\r\n    </p>`;\r\n\r\n    content.appendChild(snackdiv);\r\n\r\n    \r\n}\r\n\n\n//# sourceURL=webpack://rest-page/./src/contact.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadhome: () => (/* binding */ loadhome)\n/* harmony export */ });\nfunction loadhome(){\r\n    const content = document.getElementById('content');\r\n    const recipediv = document.createElement('div');\r\n    recipediv.className = 'box';\r\n    recipediv.innerHTML = `<h1>Recipes</h1>\r\n    <p>\r\n        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. \r\n        Perfect for everyday cooking or special occasions. \r\n        Each recipe is explained step by step, making it easy even for beginners. \r\n        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.\r\n    </p>`;\r\n\r\n    content.appendChild(recipediv);\r\n    \r\n    const sweetdiv = document.createElement('div');\r\n    sweetdiv.className('box');\r\n    sweetdiv.innerHTML = `<h1>Recipes</h1>\r\n    <p>\r\n        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. \r\n        Perfect for everyday cooking or special occasions. \r\n        Each recipe is explained step by step, making it easy even for beginners. \r\n        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.\r\n    </p>`;\r\n\r\n    content.appendChild(sweetdiv);\r\n    \r\n    const snackdiv = document.createElement('div');\r\n    snackdiv.className('box');\r\n    snackdiv.innerHTML = `<h1>Recipes</h1>\r\n    <p>\r\n        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. \r\n        Perfect for everyday cooking or special occasions. \r\n        Each recipe is explained step by step, making it easy even for beginners. \r\n        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.\r\n    </p>`;\r\n\r\n    content.appendChild(snackdiv);\r\n\r\n    \r\n}\r\n\n\n//# sourceURL=webpack://rest-page/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\nconst btn = document.querySelector('.home');\r\nbtn.addEventListener('click', ()=>{\r\n    btn.innerHTML = \"\";\r\n    btn.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.loadhome)());\r\n\r\n});\r\nconst btn1 = document.querySelector('.menu');\r\nbtn1.addEventListener('click', ()=>{\r\n    btn.innerHTML = \"\";\r\n    btn.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadmenu)());\r\n\r\n});\r\nconst btn2 = document.querySelector('.contact');\r\nbtn2.addEventListener('click', ()=>{\r\n    btn.innerHTML = \"\";\r\n    btn.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadcontact)());\r\n\r\n});\n\n//# sourceURL=webpack://rest-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadmenu: () => (/* binding */ loadmenu)\n/* harmony export */ });\nfunction loadmenu(){\r\n    const content = document.getElementById('content');\r\n    const recipediv = document.createElement('div');\r\n    recipediv.className = 'box';\r\n    recipediv.innerHTML = `<h1>Recipes</h1>\r\n    <p>\r\n        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. \r\n        Perfect for everyday cooking or special occasions. \r\n        Each recipe is explained step by step, making it easy even for beginners. \r\n        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.\r\n    </p>`;\r\n\r\n    content.appendChild(recipediv);\r\n    \r\n    const sweetdiv = document.createElement('div');\r\n    sweetdiv.className('box');\r\n    sweetdiv.innerHTML = `<h1>Recipes</h1>\r\n    <p>\r\n        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. \r\n        Perfect for everyday cooking or special occasions. \r\n        Each recipe is explained step by step, making it easy even for beginners. \r\n        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.\r\n    </p>`;\r\n\r\n    content.appendChild(sweetdiv);\r\n    \r\n    const snackdiv = document.createElement('div');\r\n    snackdiv.className('box');\r\n    snackdiv.innerHTML = `<h1>Recipes</h1>\r\n    <p>\r\n        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. \r\n        Perfect for everyday cooking or special occasions. \r\n        Each recipe is explained step by step, making it easy even for beginners. \r\n        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.\r\n    </p>`;\r\n\r\n    content.appendChild(snackdiv);\r\n\r\n    \r\n}\r\n\n\n//# sourceURL=webpack://rest-page/./src/menu.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;