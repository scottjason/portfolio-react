'use strict'

const path = require('path')

module.exports = {
  server: {
    port: process.env.PORT || 3000
  },
  root: path.normalize(path.join(__dirname, '..', '..'))
}