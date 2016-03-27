'use strict'

const path         = require('path')
const logger       = require('morgan')
const config       = require('./config')
const express      = require('express')
const favicon      = require('serve-favicon')
const bodyParser   = require('body-parser')
const cookieParser = require('cookie-parser')

require('colors')

var app = express()
var env = (process.env.NODE_ENV === 'production') ? 'production' : 'development'

app.set('env', env)
app.set('views', path.join(config.root, 'server/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(config.root, 'client/dist')))

require('./routes/index')(app)
require('./routes/error')(app)

app.listen(config.server.port, () => {
  console.log('Server listening on port '.green + config.server.port.toString().green)
})
