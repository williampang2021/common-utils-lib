/**
 * 在顶部polyfill，这样基础库和页面都可以使用这些es6的api
 * 旧版是在底部引入polyfill
 */
if (
  typeof Promise === 'undefined' ||
  typeof Map === 'undefined' ||
  typeof Set === 'undefined' ||
  typeof Object.keys !== 'function' ||
  typeof Object.assign !== 'function' ||
  typeof Object.values !== 'function' ||
  typeof Array.prototype.find !== 'function' ||
  typeof Array.prototype.includes !== 'function' ||
  typeof Array.prototype.findIndex !== 'function' ||
  typeof Array.prototype.keys !== 'function' ||
  typeof String.fromCodePoint !== 'function'
) {
  document.write(
    '<script src="http://first.test.com/cdn/js/lib/es6-shim.min.js"></script>'
  );
}
