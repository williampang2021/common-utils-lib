import { terser } from 'rollup-plugin-terser'
export default [
  {
    input: 'src/polyfill.js',
    output: [
      {
        file: '../../lib/polyfill.min.js',
        format: 'iife',
        plugins: [terser()]
      }
    ]
  }
]
