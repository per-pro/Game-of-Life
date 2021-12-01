/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/***/ (() => {

window.selectedColor = "Cold";
window.numColumns = 100;
window.numRows = 100;
window.width = 10;
window.height = 10;
window.initialState = [];
window.postSequentialState = [];
window.numMoves = 0;

/***/ }),

/***/ "./src/world.js":
/*!**********************!*\
  !*** ./src/world.js ***!
  \**********************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/imfarhi/Desktop/GameofLife/src/world.js: Unexpected token ',' (86:35)\n\n\u001b[0m \u001b[90m 84 |\u001b[39m         \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmapState()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 85 |\u001b[39m         window\u001b[33m.\u001b[39mpostSequentialState \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msequentialState\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 86 |\u001b[39m         console\u001b[33m.\u001b[39mlog(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39misSteady(\u001b[33m,\u001b[39m window\u001b[33m.\u001b[39mpostSequentialState))\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 87 |\u001b[39m         \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontext\u001b[33m.\u001b[39mclearRect(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m \u001b[35m0\u001b[39m\u001b[33m,\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcanvas\u001b[33m.\u001b[39mwidth\u001b[33m,\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcanvas\u001b[33m.\u001b[39mheight)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 88 |\u001b[39m         \u001b[36mfor\u001b[39m (\u001b[36mlet\u001b[39m i \u001b[33m=\u001b[39m \u001b[35m0\u001b[39m\u001b[33m;\u001b[39m i \u001b[33m<\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mentities\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m i\u001b[33m++\u001b[39m) {\u001b[0m\n\u001b[0m \u001b[90m 89 |\u001b[39m             \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mentities[i]\u001b[33m.\u001b[39mdraw()\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:776:17)\n    at Parser.raiseWithData (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:769:17)\n    at Parser.raise (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:737:17)\n    at Parser.parseExprListItem (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:11774:14)\n    at Parser.parseCallExpressionArguments (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:10835:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:10745:29)\n    at Parser.parseSubscript (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:10681:19)\n    at Parser.parseSubscripts (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:10654:19)\n    at Parser.parseExprSubscripts (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:10643:17)\n    at Parser.parseUpdate (/home/imfarhi/Desktop/GameofLife/node_modules/@babel/parser/lib/index.js:10617:21)");

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ "./src/world.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_1__);



window.onload = function () {
  var world = new _world__WEBPACK_IMPORTED_MODULE_0__.default('canvas', 'width', 'height', 'rows', 'cols', 'color');
  var colorInput = document.getElementById('color'); // console.log('the color is ', colorInput.value)

  colorInput.addEventListener('change', function (e) {
    switch (e.currentTarget.value) {
      case "Cold":
        window.selectedColor = "Cold";
        return;

      case "Warm":
        window.selectedColor = "Warm";
        return;

      case "Dark":
        window.selectedColor = "Dark";
        return;

      case "Light":
        window.selectedColor = "Light";
        return;
    }

    ;
  });
  var columnInput = document.getElementById('column'); // console.log('the color is ', colorInput.value)

  columnInput.addEventListener('click', function (e) {// switch statement
  });
  var rowInput = document.getElementById('row');
  rowInput.addEventListener('click', function (e) {// switch statement
  });
  var widthInput = document.getElementById('width');
  widthInput.addEventListener('click', function (e) {// switch statement
  });
  var heightInput = document.getElementById('height');
  heightInput.addEventListener('click', function (e) {// switch statement
  });
  world.makeGrid();
}; //steady state
//play button
//styling
//custom color
//variants
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map