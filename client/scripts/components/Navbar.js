'use strict'

const Reflux       = require('reflux')
const actions      = require('../actions')
const StyleSheet   = require('react-style')
const Navigation   = require('react-router').Navigation
const MainStore    = require('../stores/MainStore')

module.exports = React.createClass({
  displayName: 'Navbar',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return { isSelected: (window.location.pathname).substring(1) }
  },
  componentDidMount(){
    this.listenTo(MainStore, this.onStateChange)
  },
  onStateChange: function(cb, opts) {
    if (typeof this[cb] === 'function') this[cb](opts)
  },
  onHover(elem) {
    this.setState({ isHoverd: elem })
  },
  onTabSelected(opt) {
    actions.onTabSelected(opt)
  },
  handleTabSelected(opt) {
    this.setState({ isSelected: opt })
  },
  onSendEmail() {
    window.location.href = 'mailto:scottleejason@gmail.com?subject=Hi Scott!'
  },
  onDownloadResume() {
    var resume = 'https://dl.dropboxusercontent.com/u/7084808/Resume/Scott-Jason-Resume.pdf'
    window.open(resume, '_blank')
  },
  render() {
    var portfolio = this.state.isSelected === 'portfolio' ? [styles.tab, styles.isSelected] : [styles.tab]
    var about = this.state.isSelected === 'about' ? [styles.tab, styles.isSelected] : [styles.tab]
    var resume = this.state.isHoverd === 'resume' ? [styles.tab, styles.isHovered] : [styles.tab]
    var contact = this.state.isHoverd === 'contact' ? [styles.tab, styles.isHovered] : [styles.tab]
    this.state.isHoverd === 'portfolio' ? portfolio.push(styles.isHovered) : null
    this.state.isHoverd === 'about' ? about.push(styles.isHovered) : null
    return (
      <div styles={styles.navbar}>

        { /* PORTFOLIO */ }
        <div onClick={this.onTabSelected.bind(this, 'portfolio')}
             onMouseOver={this.onHover.bind(this, 'portfolio')}
             onMouseOut={this.onHover.bind(this, null)}
             styles={portfolio}>
          <p styles={styles.tabOpt}>PORTFOLIO</p>
        </div>

        { /* RESUME */ }
        <div onClick={this.onDownloadResume}
             onMouseOver={this.onHover.bind(this, 'resume')}
             onMouseOut={this.onHover.bind(this, null)}
             styles={resume}>
          <p styles={styles.tabOpt}>RESUME</p>
        </div>

        { /* ABOUT */ }
        <div className='tab'
             onClick={this.onTabSelected.bind(this, 'about')}
             onMouseOver={this.onHover.bind(this, 'about')}
             onMouseOut={this.onHover.bind(this, null)}
             styles={about}>
          <p styles={styles.tabOpt}>ABOUT</p>
        </div>

        { /* CONTACT */ }
        <div onClick={this.onSendEmail}
             onMouseOver={this.onHover.bind(this, 'contact')}
             onMouseOut={this.onHover.bind(this, null)}
             styles={contact}>
          <p styles={styles.tabOpt}>CONTACT</p>
        </div>
      </div>
    )
  }
})

var styles = StyleSheet.create({
   navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '90%',
    maxWidth: 1200,
    minWidth: 300,
    height: '130px'
  },
  tab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 30,
    marginRight: 10,
    color: 'rgba(225, 225, 225, .8)',
    backgroundColor: 'transparent',
    border: '1px solid rgba(225, 225, 225, .7)',
    borderBottom: 'transparent',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    cursor: 'pointer',
    'transition': 'color .2s ease-out'
  },
  tabOpt: {
    fontSize: 13,
    zIndex: 1,
  },
  isHovered: {
    color: '#ec7f72'
  },
  isSelected: {
    color: '#ec7f72',
    fontWeight: 600,
    backgroundColor: '#dedada'
  }
})
