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

export default index;
export { App as TestCom, getA, getB, getC, getD };
