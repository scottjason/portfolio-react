'use strict'

module.exports = {
  render: (req, res, next) => { res.render('index') },
  redirect: (req, res, next) => { res.redirect('/') }
}
