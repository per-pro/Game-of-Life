/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cell)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Cell = /*#__PURE__*/function () {
  function Cell(context, gridX, gridY) {
    _classCallCheck(this, Cell);

    this.context = context;
    this.gridX = gridX;
    this.gridY = gridY;
    this.on = Math.random() > 0.5;
  }

  _createClass(Cell, [{
    key: "draw",
    value: function draw() {
      switch (window.selectedColor) {
        case "Warm":
          this.context.fillStyle = this.on ? '#FFDAB9' : '#0B6623';
          break;

        case "Dark":
          this.context.fillStyle = this.on ? '#B7B4AD' : '#8E9096';
          break;

        case "Light":
          this.context.fillStyle = this.on ? '#FF7F50' : '#848884';
          break;

        default:
          this.context.fillStyle = this.on ? 'red' : 'black';
          break;
      } //'forest' - 0B6623
      //'mint' - '#98FF98'
      //'peach' - '#FFDAB9'
      //'tide' - '#B7B4AD'
      //'Oslo Gray' - '#8E9096'
      //'coral' - '#FF7F50'
      //'Smoke' - '#848884'


      this.context.fillRect(this.gridX * window.width, this.gridY * window.height, window.width, window.height);
    }
  }]);

  return Cell;
}();



/***/ }),

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

/***/ }),

/***/ "./src/world.js":
/*!**********************!*\
  !*** ./src/world.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/cell.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var World = /*#__PURE__*/function () {
  function World(canvasId) {
    var _this = this;

    _classCallCheck(this, World);

    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.entities = [];
    this.numMoves = 0;
    this.makeGrid();
    window.requestAnimationFrame(function () {
      return _this.loop();
    });
  }

  _createClass(World, [{
    key: "makeGrid",
    value: function makeGrid() {
      for (var y = 0; y < window.numRows; y++) {
        for (var x = 0; x < window.numColumns; x++) {
          this.entities.push(new _cell__WEBPACK_IMPORTED_MODULE_0__.default(this.context, x, y));
        }
      }
    }
  }, {
    key: "isOn",
    value: function isOn(x, y) {
      if (x < 0 || x >= window.numColumns || y < 0 || y >= window.numRows) {
        return false;
      }

      return this.entities[this.gridToIndex(x, y)].on ? 1 : 0;
    }
  }, {
    key: "gridToIndex",
    value: function gridToIndex(x, y) {
      return x + y * window.numColumns;
    }
  }, {
    key: "checkNeighborhood",
    value: function checkNeighborhood() {
      for (var x = 0; x < window.numColumns; x++) {
        for (var y = 0; y < window.numRows; y++) {
          var numOn = this.isOn(x - 1, y - 1) + this.isOn(x, y - 1) + this.isOn(x + 1, y - 1) + this.isOn(x - 1, y) + this.isOn(x + 1, y) + this.isOn(x - 1, y + 1) + this.isOn(x, y + 1) + this.isOn(x + 1, y + 1);
          var index = this.gridToIndex(x, y);

          if (numOn == 2) {
            this.entities[index].nextOn = this.entities[index].on;
          } else if (numOn == 3) {
            this.entities[index].nextOn = true;
          } else {
            this.entities[index].nextOn = false;
          }
        }
      }

      for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].on = this.entities[i].nextOn;
      }
    }
  }, {
    key: "incrementNumberOfMoves",
    value: function incrementNumberOfMoves() {
      this.numMoves += 1;
    }
  }, {
    key: "loop",
    value: function loop() {
      var _this2 = this;

      this.checkNeighborhood();
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw();
      }

      ; // this.incrementGeneration();
      // console.log(this.generation);
      //check if system is stable: compare state configuration between any given state and the one after a successor generation
      //if yes, stop incrementing generation and display number until stable

      setTimeout(function () {
        window.requestAnimationFrame(function () {
          return _this2.loop();
        });
      }, 100);
    }
  }]);

  return World;
}();



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
}; //number of moves until steady state
//play button
//styling
//custom color
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map