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

function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "react doms"));
}

var getE = function getE() {
  var div = document.createElement('div');
  document.body.appendChild(div);
  App.render(div, {
    aa: 'aaaaa'
  });
  window.alert('eeeeeee');
};

var index = {
  test: 1
};

export default index;
export { App as TestCom, getA, getB, getC, getD, getE };
