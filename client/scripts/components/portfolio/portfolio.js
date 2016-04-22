'use strict'

const Work         = require('../work/work')
const Header       = require('../header/header')
const Navbar       = require('../navbar/navbar')
const Project      = require('../project/project')
const Toggle       = require('../toggle/toggle')
const Reflux       = require('reflux')
const actions      = require('../../actions')
const Navigation   = require('react-router').Navigation 
const MainStore    = require('../../stores/MainStore')
var opts           = require('../../constants/').opts

module.exports = React.createClass({
  displayName: 'Portfolio',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return { toggled: 'work' }
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
  onExit() {
    this.props.history.push('/')
  },
  handleToggle(opt) {
    this.setState({ toggled: opt })
  },
  handleTabSelected(opt) {
    this.props.history.push('/' + opt)
  },
  render() {
    var content = this.state.toggled === 'work' ? <Work /> : <Project />
    return (
      <div className='portfolio'>
       
        <Header onExit={this.onExit} />
        <Navbar opts={opts} />
       
        <div className='portfolioContent'>   
          <Toggle onToggleWork={this.onToggle.bind(this, 'work')}
                  onToggleProjects={this.onToggle.bind(this, 'projects')}/>
          {content}
        </div>
      </div>
    )
  }
})
