'use strict'

const Reflux     = require('reflux')
const MainStore  = require('../../stores/MainStore')

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
    var work = this.state.toggled === 'work' ? 'toggleOpt first selected' : 'toggleOpt first'
    var projects = this.state.toggled === 'projects' ? 'toggleOpt selected'  : 'toggleOpt'
    work = this.state.hovered === 'work' ? work += ' hovered' : work
    projects = this.state.hovered === 'projects' ? projects += ' hovered' : projects
    var github = this.state.hovered === 'github' ? 'icon-mark-github hovered ' : 'icon-mark-github'
    var linkedin = this.state.hovered === 'linkedin' ? 'icon-linkedin hovered ' : 'icon-linkedin'
    var twitter = this.state.hovered === 'twitter' ? 'icon-twitter hovered ' : 'icon-twitter'
    return (
      <div>

        <div className='social'>
          <i onClick={this.onOpenLink.bind(this, 'https://github.com/scottjason')}
             onMouseOver={this.onHover.bind(this, 'github')}
             onMouseOut={this.onHover.bind(this, null)}
             className={github}></i>
          <i onClick={this.onOpenLink.bind(this, 'https://www.linkedin.com/in/scottleejason')}
             onMouseOver={this.onHover.bind(this, 'linkedin')}
             onMouseOut={this.onHover.bind(this, null)}
             className={linkedin}></i>
          <i onClick={this.onOpenLink.bind(this, 'https://twitter.com/scottleejason')}
             onMouseOver={this.onHover.bind(this, 'twitter')}
             onMouseOut={this.onHover.bind(this, null)}
             className={twitter}></i>
        </div>

        <div className='toggle'>

          <p onClick={this.props.onToggleWork}
             onMouseOver={this.onHover.bind(this, 'work')}
             onMouseOut={this.onHover.bind(this, null)}
             className={work}>
             PROFESSIONAL WORK
          </p>

          <p className='toggleOpt slash'>//</p>

          <p onClick={this.props.onToggleProjects}
             onMouseOver={this.onHover.bind(this, 'projects')}
             onMouseOut={this.onHover.bind(this, null)  }
             className={projects}>
             PORTFOLIO PROJECTS
          </p>
        </div>

      </div>
    )
  }
})