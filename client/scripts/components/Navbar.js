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
  onTabHovered(elem) {
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
    var portfolioTab = this.state.isSelected === 'portfolio' ? [styles.tab, styles.isSelected] : styles.tab
    var resumeTab = this.state.isHoverd === 'resume' ? [styles.tab, styles.isHovered] : styles.tab
    var resumeCopy = this.state.isHoverd === 'resume' ? 'DOWNLOAD' : 'RESUME'
    var aboutTab = this.state.isSelected === 'about' ? [styles.tab, styles.isSelected] : styles.tab
    var contactTab = this.state.isHoverd === 'contact' ? [styles.tab, styles.isHovered] : styles.tab
    var contactCopy = this.state.isHoverd === 'contact' ? 'EMAIL' : 'CONTACT'
    return (
      <div styles={styles.navbar}>

        { /* PORTFOLIO */ }
        <div className='tab'
             onClick={this.onTabSelected.bind(this, 'portfolio')}
             styles={portfolioTab}>
          <p styles={styles.tabOpt}>PORTFOLIO</p>
        </div>

        { /* RESUME */ }
        <div onClick={this.onDownloadResume}
             onMouseOver={this.onTabHovered.bind(this, 'resume')}
             onMouseOut={this.onTabHovered.bind(this, null)}
             styles={resumeTab}>
          <p styles={styles.tabOpt}>{resumeCopy}</p>
        </div>

        { /* ABOUT */ }
        <div className='tab'
             onClick={this.onTabSelected.bind(this, 'about')}
             styles={aboutTab}>
          <p styles={styles.tabOpt}>ABOUT</p>
        </div>

        { /* CONTACT */ }
        <div onClick={this.onSendEmail}
             onMouseOver={this.onTabHovered.bind(this, 'contact')}
             onMouseOut={this.onTabHovered.bind(this, null)}
             styles={contactTab}>
          <p styles={styles.tabOpt}>{contactCopy}</p>
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
    cursor: 'pointer'
  },
  tabOpt: {
    fontSize: 13,
    zIndex: 1,
  },
  isHovered: {
    color: '#2baade'
  },
  isSelected: {
    color: '#ec7f72',
    fontWeight: 600,
    backgroundColor: '#E4E4E4'
  }
})
