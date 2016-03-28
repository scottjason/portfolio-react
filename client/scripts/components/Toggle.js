'use strict'

const Reflux       = require('reflux')
const StyleSheet   = require('react-style')
const MainStore    = require('../stores/MainStore')

module.exports = React.createClass({
  displayName: 'Toggle',
  mixins: [Reflux.ListenerMixin],
  getInitialState() {
    return { toggled: 'work', hovered: null }
  },
  componentDidMount() {
    this.listenTo(MainStore, this.onStateChange)
  },
  onStateChange: function(cb, opts) {
    if (typeof this[cb] === 'function') this[cb](opts)
  },
  onHover(elem) {
    this.setState({ hovered: elem })
  },
  onOpenLink(link) {
    window.open(link, '_blank')
  },  
  handleToggle(opt) {
    this.setState({ toggled: opt })
  },
  render() {
    var work = this.state.toggled === 'work' ? [styles.toggleOpt, styles.isSelected, styles.first] : [styles.toggleOpt, styles.first]
    var projects = this.state.toggled === 'projects' ? [styles.toggleOpt, styles.isSelected] : styles.toggleOpt
    this.state.hovered === 'work' ? work.push(styles.hovered) : null
    projects = this.state.hovered === 'projects' ? [styles.toggleOpt, styles.hovered] : projects
    var github = this.state.hovered === 'github' ? [styles.icon, styles.hovered] : styles.icon
    var linkedin = this.state.hovered === 'linkedin' ? [styles.icon, styles.hovered] : styles.icon
    var twitter = this.state.hovered === 'twitter' ? [styles.icon, styles.hovered] : styles.icon
    return (
      <div>

        <div styles={styles.social}>
          <i onClick={this.onOpenLink.bind(this, 'https://github.com/scottjason')}
             onMouseOver={this.onHover.bind(this, 'github')}
             onMouseOut={this.onHover.bind(this, null)}
             styles={github}
             className='icon-mark-github'></i>
          <i onClick={this.onOpenLink.bind(this, 'https://www.linkedin.com/in/scottleejason')}          
             onMouseOver={this.onHover.bind(this, 'linkedin')}
             onMouseOut={this.onHover.bind(this, null)}
             styles={linkedin}
             className='icon-linkedin'></i>
          <i onClick={this.onOpenLink.bind(this, 'https://twitter.com/scottleejason')}
             onMouseOver={this.onHover.bind(this, 'twitter')}
             onMouseOut={this.onHover.bind(this, null)}
             styles={twitter}
             className='icon-twitter'></i>
        </div>            
        
        <div styles={styles.toggle}
             className='toggle'>

          <p onClick={this.props.onToggleWork}
             onMouseOver={this.onHover.bind(this, 'work')}
             onMouseOut={this.onHover.bind(this, null)}
             styles={work}
             className='toggleOpt'>
             PROFESSIONAL WORK
          </p>

          <p styles={[styles.toggleOpt, styles.cursorAuto]}
             className='toggleOpt'>//</p>

          <p onClick={this.props.onToggleProjects}
             onMouseOver={this.onHover.bind(this, 'projects')}
             onMouseOut={this.onHover.bind(this, null)  }
             styles={projects}
             className='toggleOptSecond'>
             PORTFOLIO PROJECTS
          </p>
        </div>

      </div>
    )
  }
})

var styles = StyleSheet.create({
  toggle: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
    textAlign: 'left',
    fontSize: 18
  },
  toggleOpt: {
    display: 'inline-block',
    color: 'rgba(225, 225, 225, .8)',
    marginLeft: 10,
    cursor: 'pointer',
    transition: 'color .2s ease-out'
  },
  first: {
    marginLeft: 15
  },
  cursorAuto: {
    cursor: 'auto'
  },
   hovered: {
    color: '#ec7f72'
  },
  isSelected: {
    color: '#ec7f72'
  },
  social: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center'
  },
  icon: {
    color: 'white',
    fontSize: 16,
    margin: '0 20px',
    cursor: 'pointer',
    transition: 'color .2s ease-out'
  }
})
