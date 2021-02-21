(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (function () {
    var current = global.BaseUtils;
    var exports = global.BaseUtils = {};
    factory(exports);
    exports.noConflict = function () { global.BaseUtils = current; return exports; };
  }()));
}(this, (function (exports) { 'use strict';

  var getA = function getA() {
    window.alert('aaaaaaaa11111');
  };
  var getB = function getB() {
    window.alert('bbbbbbbbbb');
  };
  var getC = function getC() {
    window.alert('cccccccc');
  };

  var getD = function getD() {
    window.alert('dddddddd');
  };

  var getE = function getE() {
    window.alert('eeeeeee');
  };

  var index = {
    test: 1
  };

  exports.default = index;
  exports.getA = getA;
  exports.getB = getB;
  exports.getC = getC;
  exports.getD = getD;
  exports.getE = getE;

})));
