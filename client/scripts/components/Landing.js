'use strict'

const StyleSheet = require('react-style')
const Navigation = require('react-router').Navigation

module.exports = React.createClass({
  displayName: 'Landing',
  mixins: [Navigation],
  getInitialState() {
    return { isHovered: null }
  },
  onHover(elem) {
    this.setState({ isHovered: elem })
  },  
  onEnter() {
    this.props.history.push('/portfolio')
  },
  render() {
    var circle = this.state.isHovered === 'circle' ? [styles.circle, styles.isHovered] : styles.circle
    var line = this.state.isHovered === 'circle' ? [styles.line, styles.grow] : styles.line
    return (

      <div styles={styles.container}>

        {/* CONTENT */}
        <div styles={styles.content}>

          {/* HEADER */}
          <p id='name'
             styles={styles.header}>SCOTT JASON
          </p>
          
          <div className='landingLine'
               styles={styles.divider}>
          </div>

          {/* SUB-HEADER */}
          <p className='subHeader'
             styles={styles.subheader}> Software Engineer, San Francisco, Ca
          </p>
          
          {/* LINE + CIRCLE */}
          <div styles={line}></div>
          <div className='circle'
               styles={circle}
               onMouseOver={this.onHover.bind(this, 'circle')}
               onMouseOut={this.onHover.bind(this, null)}
               onClick={this.onEnter}></div>
        
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
    position: 'absolute', 
    left: 0,
    right: 9,
    width: 1,
    height: 75,
    backgroundColor: 'rgba(225, 225, 225, .4)',
    transition: 'all .2s linear'
  },
  grow: {
    height: 85
  },
  circle: {
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 10,
    top: 181,
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    border: '1px solid rgba(225, 225, 225, .4)',
    borderRadius: 50,
    cursor: 'pointer',
    transition: 'all .2s linear'
  },
  isHovered: {
    transform: 'translateY(10px)'
  }  
})
