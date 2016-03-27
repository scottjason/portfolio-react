const Reflux     = require('reflux')
const StyleSheet = require('react-style')
const Navigation = require('react-router').Navigation

module.exports = React.createClass({
  displayName: 'Navbar',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return {}
  },
  render() {
    return (
      <div styles={styles.navbar}>
        <div styles={styles.tab}>
          <p styles={styles.navOpt}>PORTFOLIO</p>
        </div>             
        <div styles={styles.tab}>
          <p styles={styles.navOpt}>RESUME</p>
        </div>        
        <div styles={styles.tab}>
          <p styles={styles.navOpt}>ABOUT</p>
        </div>
        <div styles={styles.tab}>
          <p styles={styles.navOpt}>CONTACT</p>          
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
    height: '130px'
  },
  tab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 30,
    marginRight: 10,
    backgroundColor: 'transparent',
    border: '1px solid rgba(225, 225, 225, .7)',
    borderBottom: 'transparent',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5    
  },
  navOpt: {
    color: 'rgba(225, 225, 225, .8)',
    fontSize: 14
  }
})
