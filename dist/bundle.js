/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/world.js":
/*!**********************!*\
  !*** ./src/world.js ***!
  \**********************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/imfarhi/Desktop/GameofLife/src/world.js: Unexpected token (6:8)\n\n\u001b[0m \u001b[90m 4 |\u001b[39m     \u001b[36mstatic\u001b[39m numColumns \u001b[33m=\u001b[39m \u001b[35m100\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m     \u001b[36mstatic\u001b[39m numRows \u001b[33m=\u001b[39m \u001b[35m100\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 |\u001b[39m     \u001b[36mlet\u001b[39m gen\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 8 |\u001b[39m     constructor(canvasId) {\u001b[0m\n\u001b[0m \u001b[90m 9 |\u001b[39m         \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcanvas \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mgetElementById(canvasId)\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:776:17)\n    at Parser.raiseWithData (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:769:17)\n    at Parser.raise (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:737:17)\n    at Parser.unexpected (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:9668:16)\n    at Parser.parseClassMemberWithIsStatic (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:13145:12)\n    at Parser.parseClassMember (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:13038:10)\n    at withTopicForbiddingContext (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:12983:14)\n    at Parser.withTopicForbiddingContext (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:12002:14)\n    at Parser.parseClassBody (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:12960:10)\n    at Parser.parseClass (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:12933:22)");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ "./src/world.js");


window.onload = function () {
  var world = new _world__WEBPACK_IMPORTED_MODULE_0__.default('canvas', 'width', 'height', 'rows', 'cols', 'color');
};
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map