const Reflux     = require('reflux')
const StyleSheet = require('react-style')
const Navigation = require('react-router').Navigation

module.exports = React.createClass({
  displayName: 'Landing',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return {}
  },
  onEnter() {
    this.props.history.pushState(null, '/portfolio')
  },
  render() {
    return (

      <div styles={styles.container}>

        {/* CONTENT */}
        <div styles={styles.content}>

          {/* HEADER */}
          <p id='name' styles={styles.header}>
            SCOTT JASON
          </p>
          
          <div styles={styles.divider}></div>

          {/* SUB-HEADER */}
          <p styles={styles.subheader}> Software Engineer, San Francisco, Ca</p>
          
          {/* LINE + CIRCLE */}
          <div styles={styles.line}></div>
          <div onClick={this.onEnter} id='circle'></div>
        
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
    height: '100%',
    backgroundColor: 'transparent'
  },
  content: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
    marginBottom: 0
  },
  header: {
    position: 'relative',
    color: 'white',
    fontSize: 48,
    fontWeight: 300,
    letterSpacing: '7px',
    margin: 0
  },
  divider: {
    position: 'relative',
    width: 600,
    height: 1,
    backgroundColor: 'rgba(225, 225, 225, .3)',
    margin: 0,
    marginTop: -13
  },
  subheader: {
    color: 'rgba(225, 225, 225, .7)',
    fontSize: 16
  },
  line: {
    margin: 'auto',
    width: 1,
    height: 75,
    backgroundColor: 'rgba(225, 225, 225, .4)'
  }
})
