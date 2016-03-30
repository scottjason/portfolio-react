'use strict'

const Navigation = require('react-router').Navigation

module.exports = React.createClass({
  displayName: 'Landing',
  mixins: [Navigation],
  getInitialState() {
    return { hovered: null }
  },
  onHover(elem) {
    this.setState({ hovered: elem })
  },
  onEnter() {
    this.props.history.push('/portfolio')
  },
  render() {
    var circle = this.state.hovered === 'circle' ? 'circle hovered' : 'circle'
    var line = this.state.hovered === 'circle' ? 'line grow' : 'line'
    return (

      <div className='landingWrap'>

        {/* CONTENT */}
        <div className='content'>

          {/* HEADER */}
          <p className='header'>SCOTT JASON</p>

          {/* DIVIDER */}
          <div className='divider'></div>

          {/* SUB-HEADER */}
          <p className='subheader'> Software Engineer, San Francisco, Ca</p>

          {/* LINE */}
          <div className={line}></div>

          {/* CIRCLE */}
          <div className={circle}
               onMouseOver={this.onHover.bind(this, 'circle')}
               onMouseOut={this.onHover.bind(this, null)}
               onClick={this.onEnter}
               onTouchTap={this.onEnter}>
          </div>

        </div>
      </div>
    )
  }
})