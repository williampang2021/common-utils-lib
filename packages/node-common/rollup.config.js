const pkg = require('./package.json')

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module || './es/index.js',
      format: 'cjs'
    },
    {
      file: pkg.module || './es/index.js',
      format: 'es'
    }
  ]
}
