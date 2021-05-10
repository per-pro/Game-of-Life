/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cell)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      this.context.fillStyle = this.on ? 'red' : '#303030';
      this.context.fillRect(this.gridX * Cell.width, this.gridY * Cell.height, Cell.width, Cell.height);
    }
  }]);

  return Cell;
}();

_defineProperty(Cell, "width", 10);

_defineProperty(Cell, "height", 10);



/***/ }),

/***/ "./src/world.js":
/*!**********************!*\
  !*** ./src/world.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/cell.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var World = /*#__PURE__*/function () {
  function World(canvasId) {
    var _this = this;

    _classCallCheck(this, World);

    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.entities = [];
    this.generation = 0; // this.makeGrid();

    window.requestAnimationFrame(function () {
      return _this.loop();
    });
  }

  _createClass(World, [{
    key: "makeGrid",
    value: function makeGrid() {
      for (var y = 0; y < World.numRows; y++) {
        for (var x = 0; x < World.numColumns; x++) {
          this.entities.push(new _cell__WEBPACK_IMPORTED_MODULE_0__.default(this.context, x, y));
        }
      }
    }
  }, {
    key: "isOn",
    value: function isOn(x, y) {
      if (x < 0 || x >= World.numColumns || y < 0 || y >= World.numRows) {
        return false;
      }

      return this.entities[this.gridToIndex(x, y)].on ? 1 : 0;
    }
  }, {
    key: "gridToIndex",
    value: function gridToIndex(x, y) {
      return x + y * World.numColumns;
    }
  }, {
    key: "checkNeighborhood",
    value: function checkNeighborhood() {
      for (var x = 0; x < World.numColumns; x++) {
        for (var y = 0; y < World.numRows; y++) {
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
    key: "incrementGeneration",
    value: function incrementGeneration() {
      this.generation += 1;
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

      ;
      this.incrementGeneration(); // console.log(this.generation);
      //check if system is stable
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

_defineProperty(World, "numColumns", 100);

_defineProperty(World, "numRows", 100);



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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ "./src/world.js");

var selectedColor = '';

window.onload = function () {
  var world = new _world__WEBPACK_IMPORTED_MODULE_0__.default('canvas', 'width', 'height', 'rows', 'cols', 'color');
  var colorInput = document.getElementById('color');
  colorInput.addEventListener('click', function (e) {// switch statement
  });
  var columnInput = document.getElementById('column');
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
}; //play button
//default?
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map