'use strict'

const Reflux    = require('reflux')
const actions   = require('../../actions')
const MainStore = require('../../stores/MainStore')

module.exports = React.createClass({
  displayName: 'Navbar',
  mixins: [Reflux.ListenerMixin],
  getInitialState() {
    return { selected: (window.location.pathname).substring(1), hovered: null }
  },
  componentDidMount(){
    this.listenTo(MainStore, this.onStateChange)
  },
  onStateChange: function(cb, opts) {
    if (typeof this[cb] === 'function') this[cb](opts)
  },
  onHover(elem) {
    this.setState({ hovered: elem })
  },
  onTabSelected(opt) {
    actions.onTabSelected(opt)
  },
  handleTabSelected(opt) {
    this.setState({ selected: opt })
  },
  onSendEmail() {
    window.location.href = 'mailto:scottleejason@gmail.com?subject=Hi Scott!'
  },
  onDownloadResume() {
    var resume = 'https://dl.dropboxusercontent.com/u/7084808/Resume/Scott-Jason-Resume.pdf'
    window.open(resume, '_blank')
  },
  render() {
    var portfolio = this.state.selected === 'portfolio' ? 'tab selected' : 'tab'
    var about = this.state.selected === 'about' ? 'tab selected' : 'tab'
    var resume = this.state.hovered === 'resume' ? 'tab hovered' : 'tab'
    var contact = this.state.hovered === 'contact' ? 'tab hovered' : 'tab'
    portfolio = this.state.hovered === 'portfolio' ? portfolio += ' hovered' : portfolio
    about = this.state.hovered === 'about' ? about += ' hovered' : about
    return (
      <div className='navbarWrap'>

        { /* PORTFOLIO */ }
        <div className={portfolio}
             onClick={this.onTabSelected.bind(this, 'portfolio')}
             onMouseOver={this.onHover.bind(this, 'portfolio')}
             onMouseOut={this.onHover.bind(this, null)}>
          <p className='opt'>PORTFOLIO</p>
        </div>

        { /* RESUME */ }
        <div className={resume}
             onClick={this.onDownloadResume}
             onMouseOver={this.onHover.bind(this, 'resume')}
             onMouseOut={this.onHover.bind(this, null)}>
          <p className='opt'>RESUME</p>
        </div>

        { /* ABOUT */ }
        <div className={about}
             onClick={this.onTabSelected.bind(this, 'about')}
             onMouseOver={this.onHover.bind(this, 'about')}
             onMouseOut={this.onHover.bind(this, null)}>
          <p className='opt'>ABOUT</p>
        </div>

        { /* CONTACT */ }
        <div className={contact}
             onClick={this.onSendEmail}
             onMouseOver={this.onHover.bind(this, 'contact')}
             onMouseOut={this.onHover.bind(this, null)}>
          <p className='opt'>CONTACT</p>
        </div>

      </div>
    )
  }
})