const pkg = require('./package.json')

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main || './dist/index.js',
      format: 'cjs'
    },
    {
      file: pkg.module || './es/index.js',
      format: 'es'
    }
  ]
}
