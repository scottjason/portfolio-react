'use strict'

const Work         = require('./Work')
const Navbar       = require('./Navbar')
const Project      = require('./Project')
const Toggle       = require('./Toggle')
const Reflux       = require('reflux')
const actions      = require('../actions')
const StyleSheet   = require('react-style')
const Navigation   = require('react-router').Navigation 
const MainStore    = require('../stores/MainStore')

module.exports = React.createClass({
  displayName: 'Portfolio',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return { isToggled: 'work' }
  },
  componentDidMount(){
    this.listenTo(MainStore, this.onStateChange)
  },
  onStateChange: function(cb, opts) {
    if (typeof this[cb] === 'function') this[cb](opts)
  },
  onToggle(opt) {
    actions.onToggle(opt)
  },
  handleToggle(opt) {
    this.setState({ isToggled: opt })
  },
  handleTabSelected(opt) {
    this.props.history.push('/' + opt)
  },
  render() {
    var content = this.state.isToggled === 'work' ? <Work /> : <Project />
    return (
      <div styles={styles.container}>
        <Navbar />
        <div styles={styles.content}>
          <Toggle onToggleWork={this.onToggle.bind(this, 'work')}
                  onToggleProjects={this.onToggle.bind(this, 'projects')}/>
          {content}
        </div>
      </div>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    paddingBottom: 30,
    backgroundColor: 'transparent'
  },
  content: {
    padding: 20,
    paddingRight: 30,
    minWidth: 280,
    maxWidth: 1200,
    width: '90%',
    height: 'auto',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    border: '1px solid rgba(225, 225, 225, .7)'
  }
})
