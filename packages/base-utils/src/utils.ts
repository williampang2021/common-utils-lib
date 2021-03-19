/**
* 获取A的值
* @param name 姓名
* @param age 年龄
*/

// todo  配置写到tsconfig/json中
// 使用webpack插件 //https://www.npmjs.com/package/typedoc-webpack-plugin
// typedoc-plugin-single-line-tags
// typedoc-plugin-external-module-name
// typedoc-plugin-toc-group
export const getA = (message:string='tst') => {
  window.alert('aaaaaaaa11111'+message)
}

export const getB = () => {
  window.alert('bbbbbbbbbb')
}

export function getC () {
  window.alert('cccccccc')
}
