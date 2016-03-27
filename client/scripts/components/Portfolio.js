const Reflux     = require('reflux')
const StyleSheet = require('react-style')
const Navigation = require('react-router').Navigation
const Navbar     = require('./Navbar')
const Work       = require('./Work')

module.exports = React.createClass({
  displayName: 'Portfolio',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return {}
  },
  componentWillMount() {
    document.getElementsByTagName('html')[0].style.height = 'auto'
  },
  render() {
    return (
      <div styles={styles.container}>
        <Navbar/>
        <Work/>
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
  }
})
