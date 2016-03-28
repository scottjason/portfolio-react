'use strict'

const StyleSheet = require('react-style')

module.exports = React.createClass({
  displayName: 'Header',
  getInitialState() {
    return {}
  },
  render() {
    return (
      <div styles={styles.container}>
        <p className='name'
           onClick={this.props.onExit}
           styles={styles.header}>SCOTT JASON</p>
      </div>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '90%',
    height: 'auto',
    textAlign: 'center'
  },
  header: {
    color: 'rgba(225, 225, 225, .3)',
    fontSize: 48,
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 300,
    letterSpacing: '32px',
    margin: 0,
    padding: 0,
    marginTop: 40,
    transition: 'all .2s ease',
    cursor: 'pointer'
  }
})
