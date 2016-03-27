const Reflux     = require('reflux')
const StyleSheet = require('react-style')
const Navigation = require('react-router').Navigation
const Navbar     = require('./Navbar')
const Work       = require('./Work')
const Project    = require('./Project')

module.exports = React.createClass({
  displayName: 'Portfolio',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return { isSelected: 'work' }
  },
  componentWillMount() {
    document.getElementsByTagName('html')[0].style.height = 'auto'
  },
  onSelectOpt(type) {
    this.setState({ isSelected: type })
  },
  render() {
    var work = this.state.isSelected === 'work' ? [styles.subnavOpt, styles.navOptIsSelected, styles.subCopyFirst] : [styles.subnavOpt, styles.subCopyFirst]
    var projects = this.state.isSelected === 'projects' ? [styles.subnavOpt, styles.navOptIsSelected] : styles.subnavOpt
    var content = this.state.isSelected === 'work' ? <Work /> : <Project />
    return (
      <div styles={styles.container}>
        
        <Navbar />


        <div styles={styles.content}>

          { /* SUBNAV */ }
          <div styles={styles.subnav}>
            <p onClick={this.onSelectOpt.bind(this, 'work')}
               styles={work}>PROFESSIONAL WORK</p>
            <p styles={styles.subnavOpt}>//</p>
            <p onClick={this.onSelectOpt.bind(this, 'projects')}
               styles={projects}>PORTFOLIO PROJECTS</p>
          </div>
        
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
    minWidth: 280,
    maxWidth: 1200,
    width: '90%',
    height: 'auto',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    border: '1px solid rgba(225, 225, 225, .7)'
  },  
  subnav: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18
  },
  subnavOpt: {
    display: 'inline-block',
    color: 'rgba(225, 225, 225, .8)',    
    marginLeft: 10,
    cursor: 'pointer'
  },
  subCopyFirst: {
    marginLeft: 0
  },
  noClick: {
    cursor: 'auto'
  },
  navOptIsSelected: {
    color: '#ec7f72'
  }  
})
