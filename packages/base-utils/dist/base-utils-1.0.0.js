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

    var getA = function (message) {
        if (message === void 0) { message = 'tst'; }
        window.alert('aaaaaaaa11111' + message);
    };
    var getB = function () {
        window.alert('bbbbbbbbbb');
    };
    var getC = function () {
        window.alert('cccccccc');
    };

    var getD = function () {
        window.alert('dddddddd');
    };

    function App() {
        var test = 'test';
        return (React.createElement("div", null,
            React.createElement("p", null,
                "react doms ",
                test)));
    }

    var index = {
        test: 1
    };

    exports.TestCom = App;
    exports.default = index;
    exports.getA = getA;
    exports.getB = getB;
    exports.getC = getC;
    exports.getD = getD;

})));
