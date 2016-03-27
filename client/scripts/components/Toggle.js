'use strict'

const Reflux       = require('reflux')
const StyleSheet   = require('react-style')
const MainStore    = require('../stores/MainStore')

module.exports = React.createClass({
  displayName: 'Toggle',
  mixins: [Reflux.ListenerMixin],  
  getInitialState() {
    return { isToggled: 'work'}
  },
  componentDidMount() {
    this.listenTo(MainStore, this.onStateChange)
  },
  onStateChange: function(cb, opts) {
    if (typeof this[cb] === 'function') this[cb](opts)
  },  
  handleToggle(opt) {
    this.setState({ isToggled: opt })
  },
  render() {
    var work = this.state.isToggled === 'work' ? [styles.toggleOpt, styles.isSelected, styles.first] : [styles.toggleOpt, styles.first]
    var projects = this.state.isToggled === 'projects' ? [styles.toggleOpt, styles.isSelected] : styles.toggleOpt
    return (
      <div styles={styles.toggle}>
        <p onClick={this.props.onToggleWork}
           styles={work}>PROFESSIONAL WORK</p>
        <p styles={styles.toggleOpt}>//</p>
        <p onClick={this.props.onToggleProjects}
           styles={projects}>PORTFOLIO PROJECTS</p>
      </div>
    )
  }
})

var styles = StyleSheet.create({
  toggle: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18
  },
  toggleOpt: {
    display: 'inline-block',
    color: 'rgba(225, 225, 225, .8)',    
    marginLeft: 10,
    cursor: 'pointer'
  },
  first: {
    marginLeft: 0
  },
  noClick: {
    cursor: 'auto'
  },
  isSelected: {
    color: '#ec7f72'
  }  
})
