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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/BinaryCalculator.js":
/*!********************************!*\
  !*** ./js/BinaryCalculator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BinaryCalculator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Calculator2 = __webpack_require__(/*! ./Calculator */ "./js/Calculator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BinaryCalculator = function (_Calculator) {
    _inherits(BinaryCalculator, _Calculator);

    function BinaryCalculator(settings) {
        _classCallCheck(this, BinaryCalculator);

        var _this = _possibleConstructorReturn(this, (BinaryCalculator.__proto__ || Object.getPrototypeOf(BinaryCalculator)).call(this, settings));

        console.log(_this.getName());
        return _this;
    }

    /* Method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */


    _createClass(BinaryCalculator, [{
        key: "add",
        value: function add(numberX, numberY) {
            var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (var i = numberX.length - 1; i >= 0; i--) {
                var carryBit = numberX[i] + numberY[i] + result[i];
                if (carryBit === 2) {
                    result[i] = 0;
                    result[i - 1] = 1;
                } else if (carryBit === 3) {
                    result[i] = 1;
                    result[i - 1] = 1;
                } else {
                    result[i] = carryBit;
                }
            }
            return result;
        }

        /* Method changing number
        *  @param {jQuery element} root Parent element
        */

    }, {
        key: "changeNumber",
        value: function changeNumber(root) {
            var _this2 = this;

            var activeElement = root.find('.active');
            activeElement.removeClass("active");
            activeElement.siblings().addClass("active");
            root.children(":first-child").slideToggle(function () {
                _this2.checkNumber();
                _this2.updateResult();
            });
        }

        /* Method changing Result
        */

    }, {
        key: "updateResult",
        value: function updateResult() {
            var root = this.$calculatorDOMElement;
            var $resultNumber = root.children(".group-number").children(".result-bit");
            for (var i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
                var valueResult = parseInt($resultNumber.eq(j).find(".active").text());
                if (this.resultNumberArray[i] != valueResult) {
                    var activeElement = $resultNumber.eq(j).find(".active").removeClass("active");
                    activeElement.siblings().addClass("active");
                    $resultNumber.eq(j).children(":first-child").slideToggle();
                }
            }
        }
    }]);

    return BinaryCalculator;
}(_Calculator2.Calculator);

exports.BinaryCalculator = BinaryCalculator;

/***/ }),

/***/ "./js/Calculator.js":
/*!**************************!*\
  !*** ./js/Calculator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* abstract */var Calculator = function () {
    function Calculator(selectorName) {
        _classCallCheck(this, Calculator);

        this.name = selectorName;
        this.$calculatorDOMElement = $(selectorName);

        this.firstNumberArray = [];
        this.secondNumberArray = [];
        this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.initEvents();
    }

    /* Abstract method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */


    _createClass(Calculator, [{
        key: "add",
        value: function add(numberX, numberY) {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
            return [0, 0, 0, 0, 0, 0, 0, 0];
        }

        /* Abstract method changing number
        *  @param {jQuery element} root Parent element
        */

    }, {
        key: "changeNumber",
        value: function changeNumber(root) {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
        }

        /* Abstract method changing Result
        */

    }, {
        key: "updateResult",
        value: function updateResult() {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
        }

        /* Get the name of calculator selector
        *  @return {string}
        */

    }, {
        key: "getName",
        value: function getName() {
            return "Hello I am " + this.name;
        }

        /* Check what number is set in both numbers and add
        *  @return {string}
        */

    }, {
        key: "checkNumber",
        value: function checkNumber() {
            var root = this.$calculatorDOMElement;
            var $firstNumber = root.children(".group-number").children("label:first-child");
            var $secondNumber = root.children(".group-number").children("label:nth-child(2)");
            var $resultNumber = root.children(".group-number").children(".result-bit");

            for (var i = $firstNumber.length - 1, j = 0; i >= 0; i--, j++) {
                this.firstNumberArray[i] = parseInt($firstNumber.eq(j).find('.active').text());
                this.secondNumberArray[i] = parseInt($secondNumber.eq(j).find('.active').text());
                this.resultNumberArray[i] = parseInt($resultNumber.eq(j).find('.active').text());
            }
            this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
        }

        /* Set event click on number
        */

    }, {
        key: "initEvents",
        value: function initEvents() {
            var _this = this;

            this.$calculatorDOMElement.find(".display-number").on('click', function (event) {
                var parentLabel = $(event.target).parent(".display-number");
                _this.changeNumber(parentLabel);
            });
        }
    }]);

    return Calculator;
}();

exports.Calculator = Calculator;

/***/ }),

/***/ "./js/DecCalculator.js":
/*!*****************************!*\
  !*** ./js/DecCalculator.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DecCalculator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Calculator2 = __webpack_require__(/*! ./Calculator */ "./js/Calculator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecCalculator = function (_Calculator) {
    _inherits(DecCalculator, _Calculator);

    function DecCalculator(settings) {
        _classCallCheck(this, DecCalculator);

        var _this = _possibleConstructorReturn(this, (DecCalculator.__proto__ || Object.getPrototypeOf(DecCalculator)).call(this, settings));

        console.log(_this.getName());
        return _this;
    }

    _createClass(DecCalculator, [{
        key: 'changeNumber',
        value: function changeNumber(root) {
            var _this2 = this;

            var active = root.find('.active');
            var i = parseInt(active.text(), 10);

            i++;

            if (i === 10) {
                i = 0;
            }

            var span = $('<span>', { class: 'display-number__value--zero active' }).text(i);
            active.after(span);

            active.removeClass('active').slideUp(function () {
                active.remove();

                _this2.checkNumber();
                _this2.updateResult();
            });
        }

        /* Method add numbers in two array
        *  @param {array} numberX First number
        *  @param {array} numberY Second number
        *  @return {array}
        */

    }, {
        key: 'add',
        value: function add(numberX, numberY) {
            var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];

            for (var i = numberX.length - 1; i >= 0; i--) {
                var carryBit = numberX[i] + numberY[i] + result[i];
                if (carryBit >= 10) {
                    result[i] = carryBit - 10;
                    result[i - 1]++;
                } else {
                    result[i] = carryBit;
                }
            }
            // console.log(result);
            return result;
        }
    }, {
        key: 'updateResult',
        value: function updateResult() {
            var _this3 = this;

            var root = this.$calculatorDOMElement;
            var $resultNumber = root.children(".group-number").children(".result-bit");

            var _loop = function _loop(i, j) {

                var active = $resultNumber.eq(j).find(".active");
                var valueResult = parseInt(active.text());

                // console.log(valueResult, this.resultNumberArray[i]);
                if (_this3.resultNumberArray[i] !== valueResult) {

                    // active.text(this.resultNumberArray[i]);

                    var span = $('<span>', { class: 'display-number__value--zero active' }).text(_this3.resultNumberArray[i]);

                    active.after(span);

                    active.removeClass('active').slideUp(function () {
                        active.remove();
                    });
                }
            };

            for (var i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
                _loop(i, j);
            }
        }
    }]);

    return DecCalculator;
}(_Calculator2.Calculator);

exports.DecCalculator = DecCalculator;

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BinaryCalculator = __webpack_require__(/*! ./BinaryCalculator */ "./js/BinaryCalculator.js");

var _DecCalculator = __webpack_require__(/*! ./DecCalculator */ "./js/DecCalculator.js");

__webpack_require__(/*! ./style.scss */ "./js/style.scss");

$(document).ready(function () {
    var bitCalc = new _BinaryCalculator.BinaryCalculator(".binary-calculator");
    var decCalc = new _DecCalculator.DecCalculator(".dec-calculator");
});

/***/ }),

/***/ "./js/style.scss":
/*!***********************!*\
  !*** ./js/style.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./js/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./js/style.scss":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./js/style.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: #C0C0C0; }\n\nh2 {\n  font-family: Tahoma;\n  font-size: 2.6em;\n  text-align: center;\n  color: white;\n  text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.3);\n  padding: 1em;\n  box-sizing: border-box; }\n\n.info {\n  width: 45vw;\n  max-width: 600px;\n  font-family: Tahoma;\n  line-height: 1.4;\n  margin: 0 auto;\n  text-align: center;\n  color: #8D8276; }\n\nsection {\n  margin-bottom: 50px; }\n\n.binary-calculator, .dec-calculator {\n  display: block;\n  width: 950px;\n  height: 255px;\n  position: relative;\n  left: 10vw;\n  margin-top: 15vh; }\n  .binary-calculator .group-number, .dec-calculator .group-number {\n    position: absolute; }\n  .binary-calculator .display-number,\n  .binary-calculator .result-bit, .dec-calculator .display-number,\n  .dec-calculator .result-bit {\n    display: block;\n    width: 85px;\n    height: 85px;\n    position: absolute;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: Arial;\n    font-size: 34px; }\n  .binary-calculator .display-number, .dec-calculator .display-number {\n    cursor: pointer;\n    background: #dadada;\n    border-radius: 10%; }\n    .binary-calculator .display-number:hover, .dec-calculator .display-number:hover {\n      font-size: 42.5px; }\n  .binary-calculator .display-number__value--zero,\n  .binary-calculator .display-number__value--one, .dec-calculator .display-number__value--zero,\n  .dec-calculator .display-number__value--one {\n    display: block;\n    float: left;\n    width: 85px;\n    height: 85px;\n    text-align: center;\n    line-height: 85px; }\n  .binary-calculator .display-number__value--zero,\n  .binary-calculator .display-number__value--one, .dec-calculator .display-number__value--zero,\n  .dec-calculator .display-number__value--one {\n    color: #8D8276; }\n  .binary-calculator .result-bit .display-number__value--zero,\n  .binary-calculator .result-bit .display-number__value--one, .dec-calculator .result-bit .display-number__value--zero,\n  .dec-calculator .result-bit .display-number__value--one {\n    color: white; }\n  .binary-calculator .operator-bar, .dec-calculator .operator-bar {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 5px;\n    background: #545E6E;\n    top: 195px;\n    left: 85px;\n    border-radius: 5px; }\n    .binary-calculator .operator-bar span, .dec-calculator .operator-bar span {\n      font-size: 85px;\n      position: absolute;\n      top: -85px;\n      left: 25px;\n      font-family: Tahoma;\n      color: #545E6E;\n      cursor: pointer; }\n  .binary-calculator .group-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(1) {\n    right: 0px; }\n    .binary-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(1) .result-bit, .dec-calculator .group-number:nth-of-type(1) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(2) {\n    right: 95px; }\n    .binary-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(2) .result-bit, .dec-calculator .group-number:nth-of-type(2) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(3), .dec-calculator .group-number:nth-of-type(3) {\n    right: 190px; }\n    .binary-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(3) .result-bit, .dec-calculator .group-number:nth-of-type(3) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(4), .dec-calculator .group-number:nth-of-type(4) {\n    right: 285px; }\n    .binary-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(4) .result-bit, .dec-calculator .group-number:nth-of-type(4) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(5), .dec-calculator .group-number:nth-of-type(5) {\n    right: 380px; }\n    .binary-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(5) .result-bit, .dec-calculator .group-number:nth-of-type(5) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(6), .dec-calculator .group-number:nth-of-type(6) {\n    right: 475px; }\n    .binary-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(6) .result-bit, .dec-calculator .group-number:nth-of-type(6) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(7), .dec-calculator .group-number:nth-of-type(7) {\n    right: 570px; }\n    .binary-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(7) .result-bit, .dec-calculator .group-number:nth-of-type(7) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(8), .dec-calculator .group-number:nth-of-type(8) {\n    right: 665px; }\n    .binary-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(8) .result-bit, .dec-calculator .group-number:nth-of-type(8) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(9), .dec-calculator .group-number:nth-of-type(9) {\n    right: 760px; }\n    .binary-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(9) .result-bit, .dec-calculator .group-number:nth-of-type(9) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(10), .dec-calculator .group-number:nth-of-type(10) {\n    right: 855px; }\n    .binary-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(10) .result-bit, .dec-calculator .group-number:nth-of-type(10) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(11), .dec-calculator .group-number:nth-of-type(11) {\n    right: 950px; }\n    .binary-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(11) .result-bit, .dec-calculator .group-number:nth-of-type(11) .result-bit {\n      top: 200px; }\n  .binary-calculator .display-17,\n  .binary-calculator .display-18, .dec-calculator .display-17,\n  .dec-calculator .display-18 {\n    visibility: hidden; }\n  .binary-calculator .result-9, .dec-calculator .result-9 {\n    border-bottom: 5px solid #dadada; }\n    .binary-calculator .result-9:after, .dec-calculator .result-9:after {\n      content: 'carry';\n      position: absolute;\n      bottom: 5px;\n      left: 0;\n      text-align: center;\n      font-size: .5em;\n      font-family: Tahoma;\n      width: 100%;\n      color: white; }\n\n.tooltip {\n  display: none; }\n\n.tooltip {\n  background: lightslategrey;\n  border: 2px solid #666666;\n  font-size: 20px;\n  padding: 10px;\n  position: relative;\n  text-align: center;\n  width: 158px;\n  top: -111px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  -moz-box-shadow: 0px 0px 5px #aaa;\n  -webkit-box-shadow: 0px 0px 5px #aaa;\n  box-shadow: 0px 0px 5px #aaa; }\n\n.chatBubbleArrow {\n  border-color: lightslategrey transparent transparent transparent;\n  border-style: solid;\n  border-width: 10px;\n  height: 0px;\n  width: 0px;\n  position: absolute;\n  bottom: -19px;\n  left: 30px; }\n\n.chatBubbleArrowBorder {\n  border-color: #666666 transparent transparent transparent;\n  border-style: solid;\n  border-width: 10px;\n  height: 0;\n  width: 0;\n  position: absolute;\n  bottom: -22px;\n  left: 30px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQmluYXJ5Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL2pzL0RlY0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3N0eWxlLnNjc3M/YmFkYiIsIndlYnBhY2s6Ly8vLi9qcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6WyJCaW5hcnlDYWxjdWxhdG9yIiwic2V0dGluZ3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0TmFtZSIsIm51bWJlclgiLCJudW1iZXJZIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImNhcnJ5Qml0Iiwicm9vdCIsImFjdGl2ZUVsZW1lbnQiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwiY2hpbGRyZW4iLCJzbGlkZVRvZ2dsZSIsImNoZWNrTnVtYmVyIiwidXBkYXRlUmVzdWx0IiwiJGNhbGN1bGF0b3JET01FbGVtZW50IiwiJHJlc3VsdE51bWJlciIsInJlc3VsdE51bWJlckFycmF5IiwiaiIsInZhbHVlUmVzdWx0IiwicGFyc2VJbnQiLCJlcSIsInRleHQiLCJDYWxjdWxhdG9yIiwic2VsZWN0b3JOYW1lIiwibmFtZSIsIiQiLCJmaXJzdE51bWJlckFycmF5Iiwic2Vjb25kTnVtYmVyQXJyYXkiLCJpbml0RXZlbnRzIiwiZXJyb3IiLCIkZmlyc3ROdW1iZXIiLCIkc2Vjb25kTnVtYmVyIiwiYWRkIiwib24iLCJldmVudCIsInBhcmVudExhYmVsIiwidGFyZ2V0IiwicGFyZW50IiwiY2hhbmdlTnVtYmVyIiwiRGVjQ2FsY3VsYXRvciIsImFjdGl2ZSIsInNwYW4iLCJjbGFzcyIsImFmdGVyIiwic2xpZGVVcCIsInJlbW92ZSIsImRvY3VtZW50IiwicmVhZHkiLCJiaXRDYWxjIiwiZGVjQ2FsYyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7SUFFTUEsZ0I7OztBQUNGLDhCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUEsd0lBQ1pBLFFBRFk7O0FBRWxCQyxnQkFBUUMsR0FBUixDQUFhLE1BQUtDLE9BQUwsRUFBYjtBQUZrQjtBQUdyQjs7QUFFRDs7Ozs7Ozs7OzRCQUtJQyxPLEVBQVNDLE8sRUFBUztBQUNsQixnQkFBSUMsU0FBUyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBQWI7QUFDQSxpQkFBSSxJQUFJQyxJQUFJSCxRQUFRSSxNQUFSLEdBQWlCLENBQTdCLEVBQWdDRCxLQUFLLENBQXJDLEVBQTBDQSxHQUExQyxFQUErQztBQUMzQyxvQkFBSUUsV0FBWUwsUUFBUUcsQ0FBUixJQUFhRixRQUFRRSxDQUFSLENBQWIsR0FBMEJELE9BQU9DLENBQVAsQ0FBMUM7QUFDQSxvQkFBSUUsYUFBYyxDQUFsQixFQUFxQjtBQUNqQkgsMkJBQU9DLENBQVAsSUFBWSxDQUFaO0FBQ0FELDJCQUFPQyxJQUFFLENBQVQsSUFBYyxDQUFkO0FBQ0gsaUJBSEQsTUFHTyxJQUFJRSxhQUFhLENBQWpCLEVBQW9CO0FBQ3ZCSCwyQkFBT0MsQ0FBUCxJQUFZLENBQVo7QUFDQUQsMkJBQU9DLElBQUUsQ0FBVCxJQUFjLENBQWQ7QUFDSCxpQkFITSxNQUdBO0FBQ0hELDJCQUFPQyxDQUFQLElBQVlFLFFBQVo7QUFDSDtBQUNKO0FBQ0QsbUJBQU9ILE1BQVA7QUFDSDs7QUFFRDs7Ozs7O3FDQUdhSSxJLEVBQU07QUFBQTs7QUFDZixnQkFBSUMsZ0JBQWdCRCxLQUFLRSxJQUFMLENBQVUsU0FBVixDQUFwQjtBQUNBRCwwQkFBY0UsV0FBZCxDQUEwQixRQUExQjtBQUNBRiwwQkFBY0csUUFBZCxHQUF5QkMsUUFBekIsQ0FBa0MsUUFBbEM7QUFDQUwsaUJBQUtNLFFBQUwsQ0FBYyxjQUFkLEVBQThCQyxXQUE5QixDQUEwQyxZQUFNO0FBQzNDLHVCQUFLQyxXQUFMO0FBQ0EsdUJBQUtDLFlBQUw7QUFDSixhQUhEO0FBSUg7O0FBRUQ7Ozs7O3VDQUVlO0FBQ1YsZ0JBQUlULE9BQVEsS0FBS1UscUJBQWpCO0FBQ0EsZ0JBQUlDLGdCQUFnQlgsS0FBS00sUUFBTCxDQUFjLGVBQWQsRUFBK0JBLFFBQS9CLENBQXdDLGFBQXhDLENBQXBCO0FBQ0EsaUJBQUksSUFBSVQsSUFBSyxLQUFLZSxpQkFBTCxDQUF1QmQsTUFBdkIsR0FBZ0MsQ0FBekMsRUFBNENlLElBQUksQ0FBcEQsRUFBdURoQixLQUFLLENBQTVELEVBQWdFQSxLQUFLZ0IsR0FBckUsRUFBMEU7QUFDdkUsb0JBQUlDLGNBQWNDLFNBQVVKLGNBQWNLLEVBQWQsQ0FBaUJILENBQWpCLEVBQW9CWCxJQUFwQixDQUF5QixTQUF6QixFQUFvQ2UsSUFBcEMsRUFBVixDQUFsQjtBQUNBLG9CQUFJLEtBQUtMLGlCQUFMLENBQXVCZixDQUF2QixLQUE2QmlCLFdBQWpDLEVBQStDO0FBQzNDLHdCQUFJYixnQkFBZ0JVLGNBQWNLLEVBQWQsQ0FBaUJILENBQWpCLEVBQW9CWCxJQUFwQixDQUF5QixTQUF6QixFQUFvQ0MsV0FBcEMsQ0FBZ0QsUUFBaEQsQ0FBcEI7QUFDQUYsa0NBQWNHLFFBQWQsR0FBeUJDLFFBQXpCLENBQWtDLFFBQWxDO0FBQ0FNLGtDQUFjSyxFQUFkLENBQWlCSCxDQUFqQixFQUFvQlAsUUFBcEIsQ0FBNkIsY0FBN0IsRUFBNkNDLFdBQTdDO0FBQ0g7QUFDSDtBQUNMOzs7O0VBdEQwQlcsdUI7O1FBeUR0QjdCLGdCLEdBQUFBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RULGMsSUFBcUI2QixVO0FBQ2pCLHdCQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQ3JCLGFBQUtDLElBQUwsR0FBWUQsWUFBWjtBQUNBLGFBQUtULHFCQUFMLEdBQTZCVyxFQUFFRixZQUFGLENBQTdCOztBQUVBLGFBQUtHLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0EsYUFBS0MsaUJBQUwsR0FBeUIsRUFBekI7QUFDQSxhQUFLWCxpQkFBTCxHQUF5QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBQXpCO0FBQ0EsYUFBS1ksVUFBTDtBQUNMOztBQUVEOzs7Ozs7Ozs7NEJBS0k5QixPLEVBQVNDLE8sRUFBUztBQUNsQkosb0JBQVFrQyxLQUFSLENBQWMsK0RBQWQ7QUFDQSxtQkFBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBQVA7QUFDSDs7QUFFRDs7Ozs7O3FDQUdhekIsSSxFQUFNO0FBQ2ZULG9CQUFRa0MsS0FBUixDQUFjLCtEQUFkO0FBQ0g7O0FBRUQ7Ozs7O3VDQUVlO0FBQ1hsQyxvQkFBUWtDLEtBQVIsQ0FBYywrREFBZDtBQUNIOztBQUVEOzs7Ozs7a0NBR1U7QUFDTixtQ0FBcUIsS0FBS0wsSUFBMUI7QUFDSDs7QUFFRDs7Ozs7O3NDQUdjO0FBQ1YsZ0JBQUlwQixPQUFRLEtBQUtVLHFCQUFqQjtBQUNBLGdCQUFJZ0IsZUFBZTFCLEtBQUtNLFFBQUwsQ0FBYyxlQUFkLEVBQStCQSxRQUEvQixDQUF3QyxtQkFBeEMsQ0FBbkI7QUFDQSxnQkFBSXFCLGdCQUFnQjNCLEtBQUtNLFFBQUwsQ0FBYyxlQUFkLEVBQStCQSxRQUEvQixDQUF3QyxvQkFBeEMsQ0FBcEI7QUFDQSxnQkFBSUssZ0JBQWdCWCxLQUFLTSxRQUFMLENBQWMsZUFBZCxFQUErQkEsUUFBL0IsQ0FBd0MsYUFBeEMsQ0FBcEI7O0FBRUEsaUJBQUksSUFBSVQsSUFBSTZCLGFBQWE1QixNQUFiLEdBQW9CLENBQTVCLEVBQStCZSxJQUFJLENBQXZDLEVBQTBDaEIsS0FBSyxDQUEvQyxFQUFtREEsS0FBS2dCLEdBQXhELEVBQTZEO0FBQ3pELHFCQUFLUyxnQkFBTCxDQUFzQnpCLENBQXRCLElBQTJCa0IsU0FBVVcsYUFBYVYsRUFBYixDQUFnQkgsQ0FBaEIsRUFBbUJYLElBQW5CLENBQXdCLFNBQXhCLEVBQW1DZSxJQUFuQyxFQUFWLENBQTNCO0FBQ0EscUJBQUtNLGlCQUFMLENBQXVCMUIsQ0FBdkIsSUFBNEJrQixTQUFVWSxjQUFjWCxFQUFkLENBQWlCSCxDQUFqQixFQUFvQlgsSUFBcEIsQ0FBeUIsU0FBekIsRUFBb0NlLElBQXBDLEVBQVYsQ0FBNUI7QUFDQSxxQkFBS0wsaUJBQUwsQ0FBdUJmLENBQXZCLElBQTRCa0IsU0FBVUosY0FBY0ssRUFBZCxDQUFpQkgsQ0FBakIsRUFBb0JYLElBQXBCLENBQXlCLFNBQXpCLEVBQW9DZSxJQUFwQyxFQUFWLENBQTVCO0FBQ0g7QUFDRCxpQkFBS0wsaUJBQUwsR0FBeUIsS0FBS2dCLEdBQUwsQ0FBUyxLQUFLTixnQkFBZCxFQUFnQyxLQUFLQyxpQkFBckMsQ0FBekI7QUFDSDs7QUFFRDs7Ozs7cUNBRWE7QUFBQTs7QUFDUixpQkFBS2IscUJBQUwsQ0FBMkJSLElBQTNCLENBQWdDLGlCQUFoQyxFQUFtRDJCLEVBQW5ELENBQXNELE9BQXRELEVBQStELFVBQUNDLEtBQUQsRUFBVztBQUN0RSxvQkFBTUMsY0FBY1YsRUFBRVMsTUFBTUUsTUFBUixFQUFnQkMsTUFBaEIsQ0FBdUIsaUJBQXZCLENBQXBCO0FBQ0Esc0JBQUtDLFlBQUwsQ0FBa0JILFdBQWxCO0FBQ0gsYUFIRDtBQUlKOzs7Ozs7UUFHS2IsVSxHQUFBQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRVQ7Ozs7Ozs7O0lBRU1pQixhOzs7QUFDRiwyQkFBWTdDLFFBQVosRUFBc0I7QUFBQTs7QUFBQSxrSUFDWkEsUUFEWTs7QUFFbEJDLGdCQUFRQyxHQUFSLENBQWEsTUFBS0MsT0FBTCxFQUFiO0FBRmtCO0FBR3JCOzs7O3FDQUVVTyxJLEVBQU07QUFBQTs7QUFDZixnQkFBSW9DLFNBQVNwQyxLQUFLRSxJQUFMLENBQVUsU0FBVixDQUFiO0FBQ0EsZ0JBQUlMLElBQUlrQixTQUFTcUIsT0FBT25CLElBQVAsRUFBVCxFQUF3QixFQUF4QixDQUFSOztBQUVBcEI7O0FBRUEsZ0JBQUdBLE1BQU0sRUFBVCxFQUFZO0FBQ1JBLG9CQUFJLENBQUo7QUFDSDs7QUFFRCxnQkFBSXdDLE9BQU9oQixFQUFFLFFBQUYsRUFBWSxFQUFDaUIsT0FBTyxvQ0FBUixFQUFaLEVBQTJEckIsSUFBM0QsQ0FBZ0VwQixDQUFoRSxDQUFYO0FBQ0F1QyxtQkFBT0csS0FBUCxDQUFhRixJQUFiOztBQUVBRCxtQkFBT2pDLFdBQVAsQ0FBbUIsUUFBbkIsRUFBNkJxQyxPQUE3QixDQUFxQyxZQUFNO0FBQ3pDSix1QkFBT0ssTUFBUDs7QUFFQSx1QkFBS2pDLFdBQUw7QUFDQSx1QkFBS0MsWUFBTDtBQUNELGFBTEQ7QUFNSDs7QUFFRDs7Ozs7Ozs7NEJBT0lmLE8sRUFBU0MsTyxFQUFTO0FBQ2xCLGdCQUFJQyxTQUFTLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FBYjs7QUFFQSxpQkFBSSxJQUFJQyxJQUFJSCxRQUFRSSxNQUFSLEdBQWlCLENBQTdCLEVBQWdDRCxLQUFLLENBQXJDLEVBQTBDQSxHQUExQyxFQUErQztBQUMzQyxvQkFBSUUsV0FBWUwsUUFBUUcsQ0FBUixJQUFhRixRQUFRRSxDQUFSLENBQWIsR0FBMEJELE9BQU9DLENBQVAsQ0FBMUM7QUFDQSxvQkFBSUUsWUFBYSxFQUFqQixFQUFxQjtBQUNqQkgsMkJBQU9DLENBQVAsSUFBWUUsV0FBVyxFQUF2QjtBQUNBSCwyQkFBT0MsSUFBRSxDQUFUO0FBQ0gsaUJBSEQsTUFHTztBQUNIRCwyQkFBT0MsQ0FBUCxJQUFZRSxRQUFaO0FBQ0g7QUFDSjtBQUNEO0FBQ0EsbUJBQU9ILE1BQVA7QUFDSDs7O3VDQUVjO0FBQUE7O0FBQ1YsZ0JBQUlJLE9BQVEsS0FBS1UscUJBQWpCO0FBQ0EsZ0JBQUlDLGdCQUFnQlgsS0FBS00sUUFBTCxDQUFjLGVBQWQsRUFBK0JBLFFBQS9CLENBQXdDLGFBQXhDLENBQXBCOztBQUZVLHVDQUdGVCxDQUhFLEVBR3NDZ0IsQ0FIdEM7O0FBS1Asb0JBQUl1QixTQUFTekIsY0FBY0ssRUFBZCxDQUFpQkgsQ0FBakIsRUFBb0JYLElBQXBCLENBQXlCLFNBQXpCLENBQWI7QUFDQSxvQkFBSVksY0FBY0MsU0FBVXFCLE9BQU9uQixJQUFQLEVBQVYsQ0FBbEI7O0FBRUE7QUFDQSxvQkFBSSxPQUFLTCxpQkFBTCxDQUF1QmYsQ0FBdkIsTUFBOEJpQixXQUFsQyxFQUFnRDs7QUFFNUM7O0FBRUEsd0JBQUl1QixPQUFPaEIsRUFBRSxRQUFGLEVBQVksRUFBQ2lCLE9BQU8sb0NBQVIsRUFBWixFQUEyRHJCLElBQTNELENBQWdFLE9BQUtMLGlCQUFMLENBQXVCZixDQUF2QixDQUFoRSxDQUFYOztBQUdBdUMsMkJBQU9HLEtBQVAsQ0FBYUYsSUFBYjs7QUFFQUQsMkJBQU9qQyxXQUFQLENBQW1CLFFBQW5CLEVBQTZCcUMsT0FBN0IsQ0FBcUMsWUFBTTtBQUN6Q0osK0JBQU9LLE1BQVA7QUFDRCxxQkFGRDtBQUlIO0FBdEJNOztBQUdWLGlCQUFJLElBQUk1QyxJQUFLLEtBQUtlLGlCQUFMLENBQXVCZCxNQUF2QixHQUFnQyxDQUF6QyxFQUE0Q2UsSUFBSSxDQUFwRCxFQUF1RGhCLEtBQUssQ0FBNUQsRUFBZ0VBLEtBQUtnQixHQUFyRSxFQUEwRTtBQUFBLHNCQUFsRWhCLENBQWtFLEVBQTFCZ0IsQ0FBMEI7QUFvQnpFO0FBQ0w7Ozs7RUExRXlCSyx1Qjs7UUErRW5CaUIsYSxHQUFBQSxhOzs7Ozs7Ozs7Ozs7OztBQ2pGVDs7QUFDQTs7QUFFQTs7QUFJQWQsRUFBRXFCLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCLFFBQU1DLFVBQVUsSUFBSXZELGtDQUFKLENBQXFCLG9CQUFyQixDQUFoQjtBQUNBLFFBQU13RCxVQUFVLElBQUlWLDRCQUFKLENBQWtCLGlCQUFsQixDQUFoQjtBQUNILENBSEQsRTs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFHQTtBQUNBLCtCQUFnQyx3QkFBd0IsRUFBRSxRQUFRLHdCQUF3QixxQkFBcUIsdUJBQXVCLGlCQUFpQixvREFBb0QsaUJBQWlCLDJCQUEyQixFQUFFLFdBQVcsZ0JBQWdCLHFCQUFxQix3QkFBd0IscUJBQXFCLG1CQUFtQix1QkFBdUIsbUJBQW1CLEVBQUUsYUFBYSx3QkFBd0IsRUFBRSx5Q0FBeUMsbUJBQW1CLGlCQUFpQixrQkFBa0IsdUJBQXVCLGVBQWUscUJBQXFCLEVBQUUscUVBQXFFLHlCQUF5QixFQUFFLDRJQUE0SSxxQkFBcUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsdUJBQXVCLDZCQUE2Qix5QkFBeUIsc0JBQXNCLEVBQUUseUVBQXlFLHNCQUFzQiwwQkFBMEIseUJBQXlCLEVBQUUsdUZBQXVGLDBCQUEwQixFQUFFLHNNQUFzTSxxQkFBcUIsa0JBQWtCLGtCQUFrQixtQkFBbUIseUJBQXlCLHdCQUF3QixFQUFFLHNNQUFzTSxxQkFBcUIsRUFBRSxzUEFBc1AsbUJBQW1CLEVBQUUscUVBQXFFLHlCQUF5QixxQkFBcUIsa0JBQWtCLGtCQUFrQiwwQkFBMEIsaUJBQWlCLGlCQUFpQix5QkFBeUIsRUFBRSxpRkFBaUYsd0JBQXdCLDJCQUEyQixtQkFBbUIsbUJBQW1CLDRCQUE0Qix1QkFBdUIsd0JBQXdCLEVBQUUsbUdBQW1HLGlCQUFpQixFQUFFLG1LQUFtSyxlQUFlLEVBQUUsbUtBQW1LLGtCQUFrQixFQUFFLDZIQUE2SCxtQkFBbUIsRUFBRSxtR0FBbUcsa0JBQWtCLEVBQUUsbUtBQW1LLGVBQWUsRUFBRSxtS0FBbUssa0JBQWtCLEVBQUUsNkhBQTZILG1CQUFtQixFQUFFLG1HQUFtRyxtQkFBbUIsRUFBRSxtS0FBbUssZUFBZSxFQUFFLG1LQUFtSyxrQkFBa0IsRUFBRSw2SEFBNkgsbUJBQW1CLEVBQUUsbUdBQW1HLG1CQUFtQixFQUFFLG1LQUFtSyxlQUFlLEVBQUUsbUtBQW1LLGtCQUFrQixFQUFFLDZIQUE2SCxtQkFBbUIsRUFBRSxtR0FBbUcsbUJBQW1CLEVBQUUsbUtBQW1LLGVBQWUsRUFBRSxtS0FBbUssa0JBQWtCLEVBQUUsNkhBQTZILG1CQUFtQixFQUFFLG1HQUFtRyxtQkFBbUIsRUFBRSxtS0FBbUssZUFBZSxFQUFFLG1LQUFtSyxrQkFBa0IsRUFBRSw2SEFBNkgsbUJBQW1CLEVBQUUsbUdBQW1HLG1CQUFtQixFQUFFLG1LQUFtSyxlQUFlLEVBQUUsbUtBQW1LLGtCQUFrQixFQUFFLDZIQUE2SCxtQkFBbUIsRUFBRSxtR0FBbUcsbUJBQW1CLEVBQUUsbUtBQW1LLGVBQWUsRUFBRSxtS0FBbUssa0JBQWtCLEVBQUUsNkhBQTZILG1CQUFtQixFQUFFLG1HQUFtRyxtQkFBbUIsRUFBRSxtS0FBbUssZUFBZSxFQUFFLG1LQUFtSyxrQkFBa0IsRUFBRSw2SEFBNkgsbUJBQW1CLEVBQUUscUdBQXFHLG1CQUFtQixFQUFFLHFLQUFxSyxlQUFlLEVBQUUscUtBQXFLLGtCQUFrQixFQUFFLCtIQUErSCxtQkFBbUIsRUFBRSxxR0FBcUcsbUJBQW1CLEVBQUUscUtBQXFLLGVBQWUsRUFBRSxxS0FBcUssa0JBQWtCLEVBQUUsK0hBQStILG1CQUFtQixFQUFFLG9JQUFvSSx5QkFBeUIsRUFBRSw2REFBNkQsdUNBQXVDLEVBQUUsMkVBQTJFLHlCQUF5QiwyQkFBMkIsb0JBQW9CLGdCQUFnQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixvQkFBb0IscUJBQXFCLEVBQUUsY0FBYyxrQkFBa0IsRUFBRSxjQUFjLCtCQUErQiw4QkFBOEIsb0JBQW9CLGtCQUFrQix1QkFBdUIsdUJBQXVCLGlCQUFpQixnQkFBZ0IsNEJBQTRCLCtCQUErQix1QkFBdUIsc0NBQXNDLHlDQUF5QyxpQ0FBaUMsRUFBRSxzQkFBc0IscUVBQXFFLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLGVBQWUsdUJBQXVCLGtCQUFrQixlQUFlLEVBQUUsNEJBQTRCLDhEQUE4RCx3QkFBd0IsdUJBQXVCLGNBQWMsYUFBYSx1QkFBdUIsa0JBQWtCLGVBQWUsRUFBRTs7QUFFbHJWOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2FwcC5qc1wiKTtcbiIsImltcG9ydCB7IENhbGN1bGF0b3IgfSBmcm9tIFwiLi9DYWxjdWxhdG9yXCI7XG5cbmNsYXNzIEJpbmFyeUNhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9ye1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgICAgIHN1cGVyKHNldHRpbmdzKTtcbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMuZ2V0TmFtZSgpICk7XG4gICAgfVxuXG4gICAgLyogTWV0aG9kIGFkZCBudW1iZXJzIGluIHR3byBhcnJheVxuICAgICogIEBwYXJhbSB7YXJyYXl9IG51bWJlclggRmlyc3QgbnVtYmVyXG4gICAgKiAgQHBhcmFtIHthcnJheX0gbnVtYmVyWSBTZWNvbmQgbnVtYmVyXG4gICAgKiAgQHJldHVybiB7YXJyYXl9XG4gICAgKi9cbiAgICBhZGQobnVtYmVyWCwgbnVtYmVyWSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gWzAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICAgICAgZm9yKGxldCBpID0gbnVtYmVyWC5sZW5ndGggLSAxOyBpID49IDAgIDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgY2FycnlCaXQgPSAgbnVtYmVyWFtpXSArIG51bWJlcllbaV0gKyByZXN1bHRbaV07XG4gICAgICAgICAgICBpZiggY2FycnlCaXQgID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gMDtcbiAgICAgICAgICAgICAgICByZXN1bHRbaS0xXSA9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhcnJ5Qml0ID09PSAzICl7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gMTtcbiAgICAgICAgICAgICAgICByZXN1bHRbaS0xXSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IGNhcnJ5Qml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyogTWV0aG9kIGNoYW5naW5nIG51bWJlclxuICAgICogIEBwYXJhbSB7alF1ZXJ5IGVsZW1lbnR9IHJvb3QgUGFyZW50IGVsZW1lbnRcbiAgICAqL1xuICAgIGNoYW5nZU51bWJlcihyb290KSB7XG4gICAgICAgIGxldCBhY3RpdmVFbGVtZW50ID0gcm9vdC5maW5kKCcuYWN0aXZlJyk7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuc2libGluZ3MoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgcm9vdC5jaGlsZHJlbihcIjpmaXJzdC1jaGlsZFwiKS5zbGlkZVRvZ2dsZSgoKSA9PiB7XG4gICAgICAgICAgICAgdGhpcy5jaGVja051bWJlcigpO1xuICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIE1ldGhvZCBjaGFuZ2luZyBSZXN1bHRcbiAgICAqL1xuICAgIHVwZGF0ZVJlc3VsdCgpIHtcbiAgICAgICAgIGxldCByb290ID0gIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50O1xuICAgICAgICAgbGV0ICRyZXN1bHROdW1iZXIgPSByb290LmNoaWxkcmVuKFwiLmdyb3VwLW51bWJlclwiKS5jaGlsZHJlbihcIi5yZXN1bHQtYml0XCIpO1xuICAgICAgICAgZm9yKGxldCBpID0gIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMCA7IGktLSwgaisrKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVSZXN1bHQgPSBwYXJzZUludCggJHJlc3VsdE51bWJlci5lcShqKS5maW5kKFwiLmFjdGl2ZVwiKS50ZXh0KCkgKTtcbiAgICAgICAgICAgIGlmKCB0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldICE9IHZhbHVlUmVzdWx0ICkge1xuICAgICAgICAgICAgICAgIGxldCBhY3RpdmVFbGVtZW50ID0gJHJlc3VsdE51bWJlci5lcShqKS5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LnNpYmxpbmdzKCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJHJlc3VsdE51bWJlci5lcShqKS5jaGlsZHJlbihcIjpmaXJzdC1jaGlsZFwiKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgQmluYXJ5Q2FsY3VsYXRvciAgfTtcbiIsIi8qIGFic3RyYWN0ICovIGNsYXNzIENhbGN1bGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yTmFtZSkge1xuICAgICAgICAgdGhpcy5uYW1lID0gc2VsZWN0b3JOYW1lO1xuICAgICAgICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQgPSAkKHNlbGVjdG9yTmFtZSk7XG5cbiAgICAgICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSA9IFtdO1xuICAgICAgICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheSA9IFtdO1xuICAgICAgICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IFswLDAsMCwwLDAsMCwwLDAsMF07XG4gICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgIH1cblxuICAgLyogQWJzdHJhY3QgbWV0aG9kIGFkZCBudW1iZXJzIGluIHR3byBhcnJheVxuICAgKiAgQHBhcmFtIHthcnJheX0gbnVtYmVyWCBGaXJzdCBudW1iZXJcbiAgICogIEBwYXJhbSB7YXJyYXl9IG51bWJlclkgU2Vjb25kIG51bWJlclxuICAgKiAgQHJldHVybiB7YXJyYXl9XG4gICAqL1xuICAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcbiAgICAgICBjb25zb2xlLmVycm9yKFwiUG93aW5pZW5lxZsgemFpbXBsZW1lbnRvd2HEhyB0xIUgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai4gXCIpO1xuICAgICAgIHJldHVybiBbMCwwLDAsMCwwLDAsMCwwXTtcbiAgIH1cblxuICAgLyogQWJzdHJhY3QgbWV0aG9kIGNoYW5naW5nIG51bWJlclxuICAgKiAgQHBhcmFtIHtqUXVlcnkgZWxlbWVudH0gcm9vdCBQYXJlbnQgZWxlbWVudFxuICAgKi9cbiAgIGNoYW5nZU51bWJlcihyb290KSB7XG4gICAgICAgY29uc29sZS5lcnJvcihcIlBvd2luaWVuZcWbIHphaW1wbGVtZW50b3dhxIcgdMSFIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouIFwiKTtcbiAgIH1cblxuICAgLyogQWJzdHJhY3QgbWV0aG9kIGNoYW5naW5nIFJlc3VsdFxuICAgKi9cbiAgIHVwZGF0ZVJlc3VsdCgpIHtcbiAgICAgICBjb25zb2xlLmVycm9yKFwiUG93aW5pZW5lxZsgemFpbXBsZW1lbnRvd2HEhyB0xIUgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai4gXCIpO1xuICAgfVxuXG4gICAvKiBHZXQgdGhlIG5hbWUgb2YgY2FsY3VsYXRvciBzZWxlY3RvclxuICAgKiAgQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgIGdldE5hbWUoKSB7XG4gICAgICAgcmV0dXJuIGBIZWxsbyBJIGFtICR7dGhpcy5uYW1lfWA7XG4gICB9XG5cbiAgIC8qIENoZWNrIHdoYXQgbnVtYmVyIGlzIHNldCBpbiBib3RoIG51bWJlcnMgYW5kIGFkZFxuICAgKiAgQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgIGNoZWNrTnVtYmVyKCkge1xuICAgICAgIGxldCByb290ID0gIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50O1xuICAgICAgIGxldCAkZmlyc3ROdW1iZXIgPSByb290LmNoaWxkcmVuKFwiLmdyb3VwLW51bWJlclwiKS5jaGlsZHJlbihcImxhYmVsOmZpcnN0LWNoaWxkXCIpO1xuICAgICAgIGxldCAkc2Vjb25kTnVtYmVyID0gcm9vdC5jaGlsZHJlbihcIi5ncm91cC1udW1iZXJcIikuY2hpbGRyZW4oXCJsYWJlbDpudGgtY2hpbGQoMilcIik7XG4gICAgICAgbGV0ICRyZXN1bHROdW1iZXIgPSByb290LmNoaWxkcmVuKFwiLmdyb3VwLW51bWJlclwiKS5jaGlsZHJlbihcIi5yZXN1bHQtYml0XCIpO1xuXG4gICAgICAgZm9yKGxldCBpID0gJGZpcnN0TnVtYmVyLmxlbmd0aC0xLCBqID0gMDsgaSA+PSAwIDsgaS0tLCBqKyspIHtcbiAgICAgICAgICAgdGhpcy5maXJzdE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoICRmaXJzdE51bWJlci5lcShqKS5maW5kKCcuYWN0aXZlJykudGV4dCgpICk7XG4gICAgICAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludCggJHNlY29uZE51bWJlci5lcShqKS5maW5kKCcuYWN0aXZlJykudGV4dCgpICk7XG4gICAgICAgICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludCggJHJlc3VsdE51bWJlci5lcShqKS5maW5kKCcuYWN0aXZlJykudGV4dCgpICk7XG4gICAgICAgfVxuICAgICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSB0aGlzLmFkZCh0aGlzLmZpcnN0TnVtYmVyQXJyYXksIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkpO1xuICAgfVxuXG4gICAvKiBTZXQgZXZlbnQgY2xpY2sgb24gbnVtYmVyXG4gICAqL1xuICAgaW5pdEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQuZmluZChcIi5kaXNwbGF5LW51bWJlclwiKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudExhYmVsID0gJChldmVudC50YXJnZXQpLnBhcmVudChcIi5kaXNwbGF5LW51bWJlclwiKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTnVtYmVyKHBhcmVudExhYmVsKTtcbiAgICAgICAgfSlcbiAgIH1cbn1cblxuZXhwb3J0IHsgQ2FsY3VsYXRvciAgfTtcbiIsImltcG9ydCB7IENhbGN1bGF0b3IgfSBmcm9tIFwiLi9DYWxjdWxhdG9yXCI7XG5cbmNsYXNzIERlY0NhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLmdldE5hbWUoKSApO1xuICAgIH1cblxuICBjaGFuZ2VOdW1iZXIocm9vdCkge1xuICAgICAgbGV0IGFjdGl2ZSA9IHJvb3QuZmluZCgnLmFjdGl2ZScpXG4gICAgICBsZXQgaSA9IHBhcnNlSW50KGFjdGl2ZS50ZXh0KCksIDEwKTtcblxuICAgICAgaSsrO1xuXG4gICAgICBpZihpID09PSAxMCl7XG4gICAgICAgICAgaSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBzcGFuID0gJCgnPHNwYW4+Jywge2NsYXNzOiAnZGlzcGxheS1udW1iZXJfX3ZhbHVlLS16ZXJvIGFjdGl2ZSd9KS50ZXh0KGkpO1xuICAgICAgYWN0aXZlLmFmdGVyKHNwYW4pO1xuXG4gICAgICBhY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLnNsaWRlVXAoKCkgPT4ge1xuICAgICAgICBhY3RpdmUucmVtb3ZlKCk7XG5cbiAgICAgICAgdGhpcy5jaGVja051bWJlcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiBNZXRob2QgYWRkIG51bWJlcnMgaW4gdHdvIGFycmF5XG4gICogIEBwYXJhbSB7YXJyYXl9IG51bWJlclggRmlyc3QgbnVtYmVyXG4gICogIEBwYXJhbSB7YXJyYXl9IG51bWJlclkgU2Vjb25kIG51bWJlclxuICAqICBAcmV0dXJuIHthcnJheX1cbiAgKi9cblxuXG4gIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gWzAsMCwwLDAsMCwwLDAsMCwwXTtcblxuICAgICAgZm9yKGxldCBpID0gbnVtYmVyWC5sZW5ndGggLSAxOyBpID49IDAgIDsgaS0tKSB7XG4gICAgICAgICAgbGV0IGNhcnJ5Qml0ID0gIG51bWJlclhbaV0gKyBudW1iZXJZW2ldICsgcmVzdWx0W2ldO1xuICAgICAgICAgIGlmKCBjYXJyeUJpdCAgPj0gMTApIHtcbiAgICAgICAgICAgICAgcmVzdWx0W2ldID0gY2FycnlCaXQgLSAxMDtcbiAgICAgICAgICAgICAgcmVzdWx0W2ktMV0rKyA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0W2ldID0gY2FycnlCaXQ7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB1cGRhdGVSZXN1bHQoKSB7XG4gICAgICAgbGV0IHJvb3QgPSAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQ7XG4gICAgICAgbGV0ICRyZXN1bHROdW1iZXIgPSByb290LmNoaWxkcmVuKFwiLmdyb3VwLW51bWJlclwiKS5jaGlsZHJlbihcIi5yZXN1bHQtYml0XCIpO1xuICAgICAgIGZvcihsZXQgaSA9ICB0aGlzLnJlc3VsdE51bWJlckFycmF5Lmxlbmd0aCAtIDEsIGogPSAwOyBpID49IDAgOyBpLS0sIGorKykge1xuXG4gICAgICAgICAgbGV0IGFjdGl2ZSA9ICRyZXN1bHROdW1iZXIuZXEoaikuZmluZChcIi5hY3RpdmVcIik7XG4gICAgICAgICAgbGV0IHZhbHVlUmVzdWx0ID0gcGFyc2VJbnQoIGFjdGl2ZS50ZXh0KCkgKTtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlUmVzdWx0LCB0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldKTtcbiAgICAgICAgICBpZiggdGhpcy5yZXN1bHROdW1iZXJBcnJheVtpXSAhPT0gdmFsdWVSZXN1bHQgKSB7XG5cbiAgICAgICAgICAgICAgLy8gYWN0aXZlLnRleHQodGhpcy5yZXN1bHROdW1iZXJBcnJheVtpXSk7XG5cbiAgICAgICAgICAgICAgbGV0IHNwYW4gPSAkKCc8c3Bhbj4nLCB7Y2xhc3M6ICdkaXNwbGF5LW51bWJlcl9fdmFsdWUtLXplcm8gYWN0aXZlJ30pLnRleHQodGhpcy5yZXN1bHROdW1iZXJBcnJheVtpXSk7XG5cblxuICAgICAgICAgICAgICBhY3RpdmUuYWZ0ZXIoc3Bhbik7XG5cbiAgICAgICAgICAgICAgYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5zbGlkZVVwKCgpID0+IHtcbiAgICAgICAgICAgICAgICBhY3RpdmUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICB9XG4gICAgICAgfVxuICB9XG5cbn1cblxuXG5leHBvcnQgeyBEZWNDYWxjdWxhdG9yIH1cbiIsImltcG9ydCB7IEJpbmFyeUNhbGN1bGF0b3IgfSBmcm9tIFwiLi9CaW5hcnlDYWxjdWxhdG9yXCI7XG5pbXBvcnQgeyBEZWNDYWxjdWxhdG9yIH0gZnJvbSBcIi4vRGVjQ2FsY3VsYXRvclwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJpdENhbGMgPSBuZXcgQmluYXJ5Q2FsY3VsYXRvcihcIi5iaW5hcnktY2FsY3VsYXRvclwiKTtcbiAgICBjb25zdCBkZWNDYWxjID0gbmV3IERlY0NhbGN1bGF0b3IoXCIuZGVjLWNhbGN1bGF0b3JcIik7XG59KVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNDMEMwQzA7IH1cXG5cXG5oMiB7XFxuICBmb250LWZhbWlseTogVGFob21hO1xcbiAgZm9udC1zaXplOiAyLjZlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5pbmZvIHtcXG4gIHdpZHRoOiA0NXZ3O1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGZvbnQtZmFtaWx5OiBUYWhvbWE7XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzhEODI3NjsgfVxcblxcbnNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxcblxcbi5iaW5hcnktY2FsY3VsYXRvciwgLmRlYy1jYWxjdWxhdG9yIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDk1MHB4O1xcbiAgaGVpZ2h0OiAyNTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDEwdnc7XFxuICBtYXJnaW4tdG9wOiAxNXZoOyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlciwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXIsXFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLnJlc3VsdC1iaXQsIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXIsXFxuICAuZGVjLWNhbGN1bGF0b3IgLnJlc3VsdC1iaXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDg1cHg7XFxuICAgIGhlaWdodDogODVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogQXJpYWw7XFxuICAgIGZvbnQtc2l6ZTogMzRweDsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5kaXNwbGF5LW51bWJlciwgLmRlYy1jYWxjdWxhdG9yIC5kaXNwbGF5LW51bWJlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogI2RhZGFkYTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlOyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXI6aG92ZXIsIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXI6aG92ZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogNDIuNXB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmRpc3BsYXktbnVtYmVyX192YWx1ZS0temVybyxcXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXJfX3ZhbHVlLS1vbmUsIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXJfX3ZhbHVlLS16ZXJvLFxcbiAgLmRlYy1jYWxjdWxhdG9yIC5kaXNwbGF5LW51bWJlcl9fdmFsdWUtLW9uZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDg1cHg7XFxuICAgIGhlaWdodDogODVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogODVweDsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5kaXNwbGF5LW51bWJlcl9fdmFsdWUtLXplcm8sXFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmRpc3BsYXktbnVtYmVyX192YWx1ZS0tb25lLCAuZGVjLWNhbGN1bGF0b3IgLmRpc3BsYXktbnVtYmVyX192YWx1ZS0temVybyxcXG4gIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXJfX3ZhbHVlLS1vbmUge1xcbiAgICBjb2xvcjogIzhEODI3NjsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5yZXN1bHQtYml0IC5kaXNwbGF5LW51bWJlcl9fdmFsdWUtLXplcm8sXFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLnJlc3VsdC1iaXQgLmRpc3BsYXktbnVtYmVyX192YWx1ZS0tb25lLCAuZGVjLWNhbGN1bGF0b3IgLnJlc3VsdC1iaXQgLmRpc3BsYXktbnVtYmVyX192YWx1ZS0temVybyxcXG4gIC5kZWMtY2FsY3VsYXRvciAucmVzdWx0LWJpdCAuZGlzcGxheS1udW1iZXJfX3ZhbHVlLS1vbmUge1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAub3BlcmF0b3ItYmFyLCAuZGVjLWNhbGN1bGF0b3IgLm9wZXJhdG9yLWJhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZDogIzU0NUU2RTtcXG4gICAgdG9wOiAxOTVweDtcXG4gICAgbGVmdDogODVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAub3BlcmF0b3ItYmFyIHNwYW4sIC5kZWMtY2FsY3VsYXRvciAub3BlcmF0b3ItYmFyIHNwYW4ge1xcbiAgICAgIGZvbnQtc2l6ZTogODVweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtODVweDtcXG4gICAgICBsZWZ0OiAyNXB4O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBUYWhvbWE7XFxuICAgICAgY29sb3I6ICM1NDVFNkU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMSkge1xcbiAgICByaWdodDogMHB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDEpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxKSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIHRvcDogOTVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxKSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMSkgLnJlc3VsdC1iaXQge1xcbiAgICAgIHRvcDogMjAwcHg7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDIpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgyKSB7XFxuICAgIHJpZ2h0OiA5NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDIpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMikgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMikgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgyKSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIHRvcDogOTVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgyKSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMikgLnJlc3VsdC1iaXQge1xcbiAgICAgIHRvcDogMjAwcHg7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDMpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgzKSB7XFxuICAgIHJpZ2h0OiAxOTBweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgzKSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMSksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDMpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgdG9wOiAwOyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDMpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMykgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpIHtcXG4gICAgICB0b3A6IDk1cHg7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMykgLnJlc3VsdC1iaXQsIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDMpIC5yZXN1bHQtYml0IHtcXG4gICAgICB0b3A6IDIwMHB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg0KSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNCkge1xcbiAgICByaWdodDogMjg1cHg7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNCkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg0KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgIHRvcDogMDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg0KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMiksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDQpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgdG9wOiA5NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDQpIC5yZXN1bHQtYml0LCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg0KSAucmVzdWx0LWJpdCB7XFxuICAgICAgdG9wOiAyMDBweDsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNSksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDUpIHtcXG4gICAgcmlnaHQ6IDM4MHB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDUpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg1KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIHRvcDogOTVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg1KSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNSkgLnJlc3VsdC1iaXQge1xcbiAgICAgIHRvcDogMjAwcHg7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDYpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg2KSB7XFxuICAgIHJpZ2h0OiA0NzVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg2KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMSksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDYpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgdG9wOiAwOyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDYpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNikgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpIHtcXG4gICAgICB0b3A6IDk1cHg7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNikgLnJlc3VsdC1iaXQsIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDYpIC5yZXN1bHQtYml0IHtcXG4gICAgICB0b3A6IDIwMHB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg3KSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNykge1xcbiAgICByaWdodDogNTcwcHg7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNykgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg3KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgIHRvcDogMDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg3KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMiksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDcpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgdG9wOiA5NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDcpIC5yZXN1bHQtYml0LCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg3KSAucmVzdWx0LWJpdCB7XFxuICAgICAgdG9wOiAyMDBweDsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOCksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDgpIHtcXG4gICAgcmlnaHQ6IDY2NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDgpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOCkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOCkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg4KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIHRvcDogOTVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg4KSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOCkgLnJlc3VsdC1iaXQge1xcbiAgICAgIHRvcDogMjAwcHg7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDkpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg5KSB7XFxuICAgIHJpZ2h0OiA3NjBweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg5KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMSksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDkpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgdG9wOiAwOyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDkpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpIHtcXG4gICAgICB0b3A6IDk1cHg7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOSkgLnJlc3VsdC1iaXQsIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDkpIC5yZXN1bHQtYml0IHtcXG4gICAgICB0b3A6IDIwMHB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMCksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDEwKSB7XFxuICAgIHJpZ2h0OiA4NTVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMCkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMCkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTApIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTApIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgdG9wOiA5NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDEwKSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTApIC5yZXN1bHQtYml0IHtcXG4gICAgICB0b3A6IDIwMHB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMSksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDExKSB7XFxuICAgIHJpZ2h0OiA5NTBweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTEpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTEpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgdG9wOiA5NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDExKSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTEpIC5yZXN1bHQtYml0IHtcXG4gICAgICB0b3A6IDIwMHB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmRpc3BsYXktMTcsXFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmRpc3BsYXktMTgsIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS0xNyxcXG4gIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS0xOCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5yZXN1bHQtOSwgLmRlYy1jYWxjdWxhdG9yIC5yZXN1bHQtOSB7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGFkYWRhOyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAucmVzdWx0LTk6YWZ0ZXIsIC5kZWMtY2FsY3VsYXRvciAucmVzdWx0LTk6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6ICdjYXJyeSc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogNXB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogLjVlbTtcXG4gICAgICBmb250LWZhbWlseTogVGFob21hO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi50b29sdGlwIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4udG9vbHRpcCB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodHNsYXRlZ3JleTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NjY2NjY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDE1OHB4O1xcbiAgdG9wOiAtMTExcHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAjYWFhO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAjYWFhO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2FhYTsgfVxcblxcbi5jaGF0QnViYmxlQXJyb3cge1xcbiAgYm9yZGVyLWNvbG9yOiBsaWdodHNsYXRlZ3JleSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDBweDtcXG4gIHdpZHRoOiAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xOXB4O1xcbiAgbGVmdDogMzBweDsgfVxcblxcbi5jaGF0QnViYmxlQXJyb3dCb3JkZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjNjY2NjY2IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMTBweDtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjJweDtcXG4gIGxlZnQ6IDMwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==