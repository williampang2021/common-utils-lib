const { entry } = require('./webpack.config')
let fileName
let miniFileName
for (const key in entry) {
  if (/\.min$/.test(key)) {
    miniFileName = key
  } else {
    fileName = key
  }
}
if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/' + fileName + '.js')
} else {
  module.exports = require('./dist/' + miniFileName + '.js')
}
