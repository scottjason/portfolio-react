'use strict'

const React             = window.React = require('react')
const ReactDOM          = require('react-dom')
const browserHistory    = require('history/lib/createBrowserHistory')
const Landing           = require('./components/landing/landing')
const Portfolio         = require('./components/portfolio/portfolio')
const About             = require('./components/about/about')
const actions           = require('./actions/')
const { Router, Route } = require('react-router')

require('react-tap-event-plugin')()

window.isExit = e => actions.isExit(e)

ReactDOM.render((
  <Router history={browserHistory()}>
    <Route path='/' component={Landing}></Route>
    <Route path='/portfolio' component={Portfolio}></Route>
    <Route path='/about' component={About}></Route>
  </Router>
), document.getElementById('main'))
