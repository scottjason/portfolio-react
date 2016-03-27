'use strict'

const React             = window.React = require('react')
const ReactDOM          = require('react-dom')
const browserHistory    = require('history/lib/createBrowserHistory')
const Landing           = require('./components/Landing')
const Portfolio         = require('./components/Portfolio')
const { Router, Route } = require('react-router')

ReactDOM.render((
  <Router history={browserHistory()}>
    <Route path='/' component={Landing}></Route>
    <Route path='/portfolio' component={Portfolio}></Route>
  </Router>
), document.getElementById('main'))
