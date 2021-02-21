
const version = '1.0.0' // 静态文件的版本号（非npm包的版本号）
const libraryName = 'BaseUtils'

const filekeyname = libraryName.toLowerCase()
const fileName = filekeyname + '-' + version + '.js'
const miniFileName = filekeyname + '-' + version + '.min.js'
const pkg = require('./package.json')

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: './dist/' + fileName,
      format: 'umd',
      name: libraryName,
      exports: 'named'
    },
    {
      file: './dist/' + miniFileName,
      format: 'umd',
      name: libraryName,
      exports: 'named'
    },
    {
      file: pkg.module || './es/index.js',
      format: 'es'
    }
  ]
}
