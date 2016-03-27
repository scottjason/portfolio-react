'use strict'

const Reflux  = require('reflux')
const actions = require('../actions')

module.exports = Reflux.createStore({
  init() {
    this.listenTo(actions.onToggle, this.onToggle)
    this.listenTo(actions.onTabSelected, this.onTabSelected)
  },
  onToggle() {
    var opts = Array.prototype.slice.call(arguments)[0]
    this.trigger('handleToggle', opts)
  },
  onTabSelected() {
    var opts = Array.prototype.slice.call(arguments)[0]
    this.trigger('handleTabSelected', opts)
  }
})
