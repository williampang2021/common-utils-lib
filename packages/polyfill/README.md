# polyfill
对es6的一些方法的polyfill
当判断当前浏览器/webview的运行环境对下列方法任一个不支持的时候，引入polyfill
```javascript
Promise === 'undefined'
Map === 'undefined'
Set === 'undefined'
Object.keys !== 'function'
Object.assign !== 'function'
Object.values !== 'function'
Array.prototype.find !== 'function'
Array.prototype.findIndex !== 'function'
Array.prototype.keys !== 'function'
String.fromCodePoint !== 'function
```



## Usage
必须在body中react之前引入，react依赖`Map`方法


