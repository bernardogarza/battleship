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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _partials_put_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/put-ship */ \"./src/partials/put-ship.js\");\n/* harmony import */ var _partials_create_ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/create-ships */ \"./src/partials/create-ships.js\");\n\n\n\n\nObject(_partials_put_ship__WEBPACK_IMPORTED_MODULE_1__[\"putship\"])();\nObject(_partials_create_ships__WEBPACK_IMPORTED_MODULE_2__[\"createShips\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgcHV0c2hpcCB9IGZyb20gJy4vcGFydGlhbHMvcHV0LXNoaXAnO1xuaW1wb3J0IHsgY3JlYXRlU2hpcHMgfSBmcm9tICcuL3BhcnRpYWxzL2NyZWF0ZS1zaGlwcyc7XG5cbnB1dHNoaXAoKTtcbmNyZWF0ZVNoaXBzKCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/partials/create-ships.js":
/*!**************************************!*\
  !*** ./src/partials/create-ships.js ***!
  \**************************************/
/*! exports provided: ships, createShips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ships\", function() { return ships; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createShips\", function() { return createShips; });\n/* harmony import */ var _ship_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-class */ \"./src/partials/ship-class.js\");\n\n\nlet ships = [];\n\nlet createShips = () => {\n  ships.push(Object(_ship_class__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"])(0, 'Ship 1', 5));\n  ships.push(Object(_ship_class__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"])(1, 'Ship 2', 4));\n  ships.push(Object(_ship_class__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"])(2, 'Ship 3', 3));\n  ships.push(Object(_ship_class__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"])(3, 'Ship 4', 2));\n  ships.push(Object(_ship_class__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"])(4, 'Ship 5', 2));\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY3JlYXRlLXNoaXBzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpYWxzL2NyZWF0ZS1zaGlwcy5qcz9kN2EwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAtY2xhc3MnO1xuXG5sZXQgc2hpcHMgPSBbXTtcblxubGV0IGNyZWF0ZVNoaXBzID0gKCkgPT4ge1xuICBzaGlwcy5wdXNoKFNoaXAoMCwgJ1NoaXAgMScsIDUpKTtcbiAgc2hpcHMucHVzaChTaGlwKDEsICdTaGlwIDInLCA0KSk7XG4gIHNoaXBzLnB1c2goU2hpcCgyLCAnU2hpcCAzJywgMykpO1xuICBzaGlwcy5wdXNoKFNoaXAoMywgJ1NoaXAgNCcsIDIpKTtcbiAgc2hpcHMucHVzaChTaGlwKDQsICdTaGlwIDUnLCAyKSk7XG59XG5cbmV4cG9ydCB7IHNoaXBzLCBjcmVhdGVTaGlwcyB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/create-ships.js\n");

/***/ }),

/***/ "./src/partials/put-ship.js":
/*!**********************************!*\
  !*** ./src/partials/put-ship.js ***!
  \**********************************/
/*! exports provided: putship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"putship\", function() { return putship; });\n/* harmony import */ var _create_ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-ships */ \"./src/partials/create-ships.js\");\n\n\nlet putShipButton = document.querySelector('#put-ship');\nlet selectedShip = document.querySelector('#ships-list');\nlet selectedOrientation = document.querySelector('#ship-orientation');\nlet selectedRow = document.querySelector('#select-row');\nlet selectedColumn = document.querySelector('#select-column');\nlet table1 = document.querySelector('#table1');\n\n\nlet validateEmpty = (ship, orientation, row, column) => {\n  if (ship === '' || orientation === '' || row === '' || column === '') {\n    return false;\n  } else {\n    return true;\n  }\n}\n\nlet identifyShip = (shipSelected, shipArr) => {\n  for (let i = 0; i < shipArr.length; i++) {\n    if (parseInt(shipSelected) === shipArr[i].id) {\n      return shipArr[i];\n    }\n  }\n}\n\nlet validateLength = (shipSelected, shipArr, orientation, row, column) => {\n  let ship = identifyShip(shipSelected, shipArr);\n  if (parseInt(orientation) === 0) {\n    if (10 - column < ship.size) {\n      return false;\n    } else {\n      return true;\n    }\n  } else {\n    if (10 - row < ship.size) {\n      return false;\n    } else {\n      return true;\n    }\n  }\n}\n\nlet validateCell = (table, shipSel, shipArr, orientation, row, column) => {\n  let ship = identifyShip(shipSel, shipArr);\n  if (parseInt(orientation) === 0) {\n    for (let i = parseInt(column); i < (parseInt(column) + ship.size); i++) {\n      for (let j = 0; j < shipArr.length; j++) {\n        if (shipArr[j].cells.includes(table.firstChild.children[parseInt(row)].children[i])) {\n          return false\n        }\n      }\n    }\n    return true;\n  } else {\n    for (let i = parseInt(row); i < (parseInt(row) + ship.size); i++) {\n      for (let j = 0; j < shipArr.length; j++) {\n        if (shipArr[j].cells.includes(table.firstChild.children[i].children[parseInt(column)])) {\n          return false\n        }\n      }\n    }\n    return true;\n  }\n}\n\nlet markCell = (table, shipSel, shipArr, orientation, row, column, addClass) => {\n  let ship = identifyShip(shipSel, shipArr);\n  if (parseInt(orientation) === 0) {\n    for (let i = parseInt(column); i < (parseInt(column) + ship.size); i++) {\n      if (addClass) {\n        table.firstChild.children[parseInt(row)].children[i].classList.add(addClass);\n      }\n      ship.cells.push(table.firstChild.children[parseInt(row)].children[i]);\n    }\n  } else {\n    for (let i = parseInt(row); i < (parseInt(row) + ship.size); i++) {\n      if (addClass) {\n        table.firstChild.children[i].children[parseInt(column)].classList.add(addClass);\n      }\n      ship.cells.push(table.firstChild.children[i].children[parseInt(column)]);\n    }\n  }\n}\n\nlet putship = () => {\n  putShipButton.addEventListener('click', () => {\n    if (validateEmpty(selectedShip.value, selectedOrientation.value, selectedRow.value, selectedColumn.value) && validateLength(selectedShip.value, _create_ships__WEBPACK_IMPORTED_MODULE_0__[\"ships\"], selectedOrientation.value, selectedRow.value, selectedColumn.value) && validateCell(table1, selectedShip.value, _create_ships__WEBPACK_IMPORTED_MODULE_0__[\"ships\"], selectedOrientation.value, selectedRow.value, selectedColumn.value)) {\n      markCell(table1, selectedShip.value, _create_ships__WEBPACK_IMPORTED_MODULE_0__[\"ships\"], selectedOrientation.value, selectedRow.value, selectedColumn.value, 'ship');\n    }\n  })\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvcHV0LXNoaXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvcHV0LXNoaXAuanM/NWVlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGlwcyB9IGZyb20gJy4vY3JlYXRlLXNoaXBzJ1xuXG5sZXQgcHV0U2hpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwdXQtc2hpcCcpO1xubGV0IHNlbGVjdGVkU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwcy1saXN0Jyk7XG5sZXQgc2VsZWN0ZWRPcmllbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwLW9yaWVudGF0aW9uJyk7XG5sZXQgc2VsZWN0ZWRSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXJvdycpO1xubGV0IHNlbGVjdGVkQ29sdW1uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC1jb2x1bW4nKTtcbmxldCB0YWJsZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUxJyk7XG5cblxubGV0IHZhbGlkYXRlRW1wdHkgPSAoc2hpcCwgb3JpZW50YXRpb24sIHJvdywgY29sdW1uKSA9PiB7XG4gIGlmIChzaGlwID09PSAnJyB8fCBvcmllbnRhdGlvbiA9PT0gJycgfHwgcm93ID09PSAnJyB8fCBjb2x1bW4gPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmxldCBpZGVudGlmeVNoaXAgPSAoc2hpcFNlbGVjdGVkLCBzaGlwQXJyKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwYXJzZUludChzaGlwU2VsZWN0ZWQpID09PSBzaGlwQXJyW2ldLmlkKSB7XG4gICAgICByZXR1cm4gc2hpcEFycltpXTtcbiAgICB9XG4gIH1cbn1cblxubGV0IHZhbGlkYXRlTGVuZ3RoID0gKHNoaXBTZWxlY3RlZCwgc2hpcEFyciwgb3JpZW50YXRpb24sIHJvdywgY29sdW1uKSA9PiB7XG4gIGxldCBzaGlwID0gaWRlbnRpZnlTaGlwKHNoaXBTZWxlY3RlZCwgc2hpcEFycik7XG4gIGlmIChwYXJzZUludChvcmllbnRhdGlvbikgPT09IDApIHtcbiAgICBpZiAoMTAgLSBjb2x1bW4gPCBzaGlwLnNpemUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICgxMCAtIHJvdyA8IHNoaXAuc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxubGV0IHZhbGlkYXRlQ2VsbCA9ICh0YWJsZSwgc2hpcFNlbCwgc2hpcEFyciwgb3JpZW50YXRpb24sIHJvdywgY29sdW1uKSA9PiB7XG4gIGxldCBzaGlwID0gaWRlbnRpZnlTaGlwKHNoaXBTZWwsIHNoaXBBcnIpO1xuICBpZiAocGFyc2VJbnQob3JpZW50YXRpb24pID09PSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IHBhcnNlSW50KGNvbHVtbik7IGkgPCAocGFyc2VJbnQoY29sdW1uKSArIHNoaXAuc2l6ZSk7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwQXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChzaGlwQXJyW2pdLmNlbGxzLmluY2x1ZGVzKHRhYmxlLmZpcnN0Q2hpbGQuY2hpbGRyZW5bcGFyc2VJbnQocm93KV0uY2hpbGRyZW5baV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IHBhcnNlSW50KHJvdyk7IGkgPCAocGFyc2VJbnQocm93KSArIHNoaXAuc2l6ZSk7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwQXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChzaGlwQXJyW2pdLmNlbGxzLmluY2x1ZGVzKHRhYmxlLmZpcnN0Q2hpbGQuY2hpbGRyZW5baV0uY2hpbGRyZW5bcGFyc2VJbnQoY29sdW1uKV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxubGV0IG1hcmtDZWxsID0gKHRhYmxlLCBzaGlwU2VsLCBzaGlwQXJyLCBvcmllbnRhdGlvbiwgcm93LCBjb2x1bW4sIGFkZENsYXNzKSA9PiB7XG4gIGxldCBzaGlwID0gaWRlbnRpZnlTaGlwKHNoaXBTZWwsIHNoaXBBcnIpO1xuICBpZiAocGFyc2VJbnQob3JpZW50YXRpb24pID09PSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IHBhcnNlSW50KGNvbHVtbik7IGkgPCAocGFyc2VJbnQoY29sdW1uKSArIHNoaXAuc2l6ZSk7IGkrKykge1xuICAgICAgaWYgKGFkZENsYXNzKSB7XG4gICAgICAgIHRhYmxlLmZpcnN0Q2hpbGQuY2hpbGRyZW5bcGFyc2VJbnQocm93KV0uY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZChhZGRDbGFzcyk7XG4gICAgICB9XG4gICAgICBzaGlwLmNlbGxzLnB1c2godGFibGUuZmlyc3RDaGlsZC5jaGlsZHJlbltwYXJzZUludChyb3cpXS5jaGlsZHJlbltpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSBwYXJzZUludChyb3cpOyBpIDwgKHBhcnNlSW50KHJvdykgKyBzaGlwLnNpemUpOyBpKyspIHtcbiAgICAgIGlmIChhZGRDbGFzcykge1xuICAgICAgICB0YWJsZS5maXJzdENoaWxkLmNoaWxkcmVuW2ldLmNoaWxkcmVuW3BhcnNlSW50KGNvbHVtbildLmNsYXNzTGlzdC5hZGQoYWRkQ2xhc3MpO1xuICAgICAgfVxuICAgICAgc2hpcC5jZWxscy5wdXNoKHRhYmxlLmZpcnN0Q2hpbGQuY2hpbGRyZW5baV0uY2hpbGRyZW5bcGFyc2VJbnQoY29sdW1uKV0pO1xuICAgIH1cbiAgfVxufVxuXG5sZXQgcHV0c2hpcCA9ICgpID0+IHtcbiAgcHV0U2hpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAodmFsaWRhdGVFbXB0eShzZWxlY3RlZFNoaXAudmFsdWUsIHNlbGVjdGVkT3JpZW50YXRpb24udmFsdWUsIHNlbGVjdGVkUm93LnZhbHVlLCBzZWxlY3RlZENvbHVtbi52YWx1ZSkgJiYgdmFsaWRhdGVMZW5ndGgoc2VsZWN0ZWRTaGlwLnZhbHVlLCBzaGlwcywgc2VsZWN0ZWRPcmllbnRhdGlvbi52YWx1ZSwgc2VsZWN0ZWRSb3cudmFsdWUsIHNlbGVjdGVkQ29sdW1uLnZhbHVlKSAmJiB2YWxpZGF0ZUNlbGwodGFibGUxLCBzZWxlY3RlZFNoaXAudmFsdWUsIHNoaXBzLCBzZWxlY3RlZE9yaWVudGF0aW9uLnZhbHVlLCBzZWxlY3RlZFJvdy52YWx1ZSwgc2VsZWN0ZWRDb2x1bW4udmFsdWUpKSB7XG4gICAgICBtYXJrQ2VsbCh0YWJsZTEsIHNlbGVjdGVkU2hpcC52YWx1ZSwgc2hpcHMsIHNlbGVjdGVkT3JpZW50YXRpb24udmFsdWUsIHNlbGVjdGVkUm93LnZhbHVlLCBzZWxlY3RlZENvbHVtbi52YWx1ZSwgJ3NoaXAnKTtcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCB7IHB1dHNoaXAgfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/put-ship.js\n");

/***/ }),

/***/ "./src/partials/ship-class.js":
/*!************************************!*\
  !*** ./src/partials/ship-class.js ***!
  \************************************/
/*! exports provided: Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ship\", function() { return Ship; });\nlet Ship = (id, name, size) => {\n  return {\n    id,\n    name,\n    size,\n    cells: [],\n    cellsHit: [],\n    sink: false\n  }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc2hpcC1jbGFzcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9zaGlwLWNsYXNzLmpzP2I3OTEiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IFNoaXAgPSAoaWQsIG5hbWUsIHNpemUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIHNpemUsXG4gICAgY2VsbHM6IFtdLFxuICAgIGNlbGxzSGl0OiBbXSxcbiAgICBzaW5rOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCB7IFNoaXAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/ship-class.js\n");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/YTViNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/style.scss\n");

/***/ })

/******/ });