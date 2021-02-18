const path = require('path')
const version = '1.0.0' // 静态文件的版本号（非npm包的版本号）
const libraryName = 'BaseUtils'
const filekeyname = libraryName.toLowerCase()
const fileName = filekeyname + '-' + version
const miniFileName = filekeyname + '-' + version + '.min'

module.exports = {
  entry: {
    [fileName]: './src/index.js',
    [miniFileName]: './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: libraryName,
    path: path.resolve(__dirname, './dist'),
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
}
