(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (function () {
        var current = global.T;
        var exports = global.T = {};
        factory(exports);
        exports.noConflict = function () { global.T = current; return exports; };
    }()));
}(this, (function (exports) { 'use strict';

    function App() {
        console.log('init');
    }

    exports.default = App;

})));
