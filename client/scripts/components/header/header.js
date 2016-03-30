'use strict'

module.exports = React.createClass({
  displayName: 'Header',
  getInitialState() {
    return {}
  },
  render() {
    return (
      <div className='headerWrap'>
        <p className='title'
           onClick={this.props.onExit}
           onTouchTap={this.props.onExit}>
           SCOTT JASON
        </p>
      </div>
    )
  }
})