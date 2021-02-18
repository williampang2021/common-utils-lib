const { entry } = require('./webpack.config')
let fileName
let miniFileName
for (const key in entry) {
  if (key.indexOf('min.js') > -1) {
    miniFileName = key
  } else {
    fileName = key
  }
}
if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/' + fileName)
} else {
  module.exports = require('./dist/' + miniFileName)
}
