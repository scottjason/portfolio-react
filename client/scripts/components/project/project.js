'use strict'

module.exports = React.createClass({
  displayName: 'Project',
  getInitialState() {
    return { hovered: null }
  },
  onOpenLink(link) {
    window.open(link, '_blank')
  },
  onHover(elem) {
    this.setState({ hovered: elem })
  },
  render() {
    var here = this.state.hovered === 'here' ? 'name hovered' : 'name'
    var scrape = this.state.hovered === 'scrape' ? 'name hovered' : 'name'
    var broadcast = this.state.hovered === 'broadcast' ? 'name hovered' : 'name'
    return (
      <div>

        { /* APP */ }
        <div className='project'>
          <p className='header'
             onMouseOver={this.onHover.bind(this, 'broadcast')}
             onMouseOut={this.onHover.bind(this, null)}
             className={broadcast}>Broadcast It
          </p>
          <i className='icon-earth'></i>
          <div className='line'></div>
        </div>

        { /* TITLE */ }
        <p className='title'>Broadcast A Live Video Stream, Promote & Share, Join Other Streams</p>
        <p className='date'>December 2015<br/>San Francisco, Ca</p>

        { /* STACK */ }
        <p className='stack'>
          <span className='salmon'>Stack:</span> React.js, Reflux, Node.js, Express.js, WebRtc
        </p>
        <p className='stack other'>
          <span className='salmon'>Other:</span> OpenTok Api, Gulp.js, Redis
        </p>

        <p className='mainCopy mainFirst'>
           Broadcast It allows anyone to create a live, shareable video stream. It can be shared directly to
           the publisher&#39;s facebook wall or by the provided url. Friends and followers will be redirected
           to the live broadcast and the real-time viewer count will be reflected in the publisher&#39;s UI.
           <br/>
           <br/>
           WebRtc functionality is implemented via the OpenTok API.
        </p>


        { /* APP */ }
        <div className='project'>
          <p className='header'
             onMouseOver={this.onHover.bind(this, 'here')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://you-are-here-app.herokuapp.com')}
             className={here}>You Are Here
          </p>
          <i className='icon-earth'
             onClick={this.onOpenLink.bind(this, 'http://you-are-here-app.herokuapp.com')}>
          </i>
          <div className='line'></div>
        </div>


        { /* TITLE */ }
        <p className='title'>Search Places, Get Reviews, Request Uber</p>
        <p className='date'>September 2015<br/>San Francisco, Ca</p>

        { /* STACK */ }
        <p className='stack'>
          <span className='salmon'>Stack:</span> Angular.js, Node.js, Express.js
        </p>
        <p className='stack other'>
          <span className='salmon'>Other:</span> Uber API, Yelp API, Google Maps API, Gulp.js
        </p>

        <p className='mainCopy mainFirst'>
           You Are Here integrates the Uber Api, Yelp Api and the Google Maps Api. It also implements oAuth 2.0 and
           deep-linking into Uber&#39;s native iOS app. Provides a search box to query for types of places
           in the area (bars, dinner, dentist, etc) and the search results render details about the places
           along with the yelp reviews and the uber ride-price and time-estimates.
           <br/>
           <br/>
           When using iOS, there will also be a &#39;request uber&#39; button next to each listing. You are here is
           mobile-first and fully responsive.
        </p>


        { /* APP */ }
        <div className='project'>
          <p className='header'
             onMouseOver={this.onHover.bind(this, 'scrape')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://scrape-rentals.herokuapp.com')}
             className={scrape}>Scrape Rentals
          </p>
          <i className='icon-earth'
             onClick={this.onOpenLink.bind(this, 'http://scrape-rentals.herokuapp.com')}>
          </i>
          <div className='line'></div>
        </div>

        { /* TITLE */ }
        <p className='title'>Scrapes Rental Listings in the US</p>
        <p className='date'>July 2015<br/>San Francisco, Ca</p>

        { /* STACK */ }
        <p className='stack'>
          <span className='salmon'>Stack:</span> Angular.js, Node.js, Express.js
        </p>
        <p className='stack other'>
          <span className='salmon'>Other:</span> Grunt.js, Cheerio, Underscore.js
        </p>

        <p className='mainCopy first'>
           A mobile-first, fully-responsive web application that scrapes, cleans and renders rental
           listings in the US. DOM traversal in Node.js via the Cheerio library.
           <br/>
           <br/>
           Scraped sites include rentals.com and apartments.com
        </p>

      </div>
    )
  }
})
