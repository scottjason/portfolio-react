'use strict'

const path    = require('path')
const logger  = require('morgan')
const config  = require('./config')
const express = require('express')

require('colors')

var app = express()

app.set('views', path.join(config.root, 'server/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(logger('dev'))
app.use(express.static(path.join(config.root, 'client/dist')))

require('./routes/index')(app)
require('./routes/error')(app)

app.listen(config.server.port, () => {
  console.log('Server listening on port '.green + config.server.port.toString().green)
})