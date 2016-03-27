'use strict'

const ctrl   = require('../controllers/index')
const router = require('express').Router()

module.exports = (app) => {
  router.get('/', ctrl.render)
  router.get('/portfolio', ctrl.render)
  router.get('/about', ctrl.render)
  router.get('/*', ctrl.redirect)
  app.use(router)
}