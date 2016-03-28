'use strict'

const StyleSheet = require('react-style')

module.exports = React.createClass({
  displayName: 'Project',
  getInitialState() {
    return { isHoverd: null }
  },
  onOpenLink(link) {
    window.open(link, '_blank')
  },
  onHover(elem) {
    this.setState({ isHoverd: elem })
  },
  render() {
    var here = this.state.isHoverd === 'here' ? [styles.name, styles.nameHovered] : styles.name
    var scrape = this.state.isHoverd === 'scrape' ? [styles.name, styles.nameHovered] : styles.name
    var broadcast = this.state.isHoverd === 'broadcast' ? [styles.name, styles.nameHovered] : styles.name    
    return (
      <div>

        { /* APP */ }
        <div styles={styles.containerTop}>
          <p className='header'
             onMouseOver={this.onHover.bind(this, 'broadcast')}
             onMouseOut={this.onHover.bind(this, null)}
             styles={broadcast}>Broadcast It
          </p>
          <i className='icon-earth'></i>
          <div className='line'
               styles={styles.line}></div>
        </div>

        { /* TITLE */ }
        <p className='description'
           styles={styles.title}>Broadcast A Live Video Stream, Promote & Share, Join Other Streams
        </p>
        
        <p className='date'
           styles={styles.date}>December 2015<br/>San Francisco, Ca
        </p>

        { /* STACK */ }
        <p styles={styles.stack}>
          <span styles={styles.salmon}>Stack:</span> React.js, Reflux, Node.js, Express.js, WebRtc
        </p>
        <p styles={[styles.stack, styles.other]}>
          <span styles={styles.salmon}>Other:</span> OpenTok Api, Gulp.js, Redis
        </p>

        <p className='mainCopy'
           styles={[styles.mainCopy, styles.mainFirst]}>
           Broadcast It allows anyone to create a live, shareable video stream. It can be shared directly to 
           the publisher&#39;s facebook wall or by the provided url. Friends and followers will be redirected 
           to the live broadcast and the real-time viewer count will be reflected in the publisher&#39;s UI.
           <br/>
           <br/>
           WebRtc functionality is implemented via the OpenTok API.
        </p>


        { /* APP */ }
        <div styles={styles.containerTop}>
          <p className='header'
             onMouseOver={this.onHover.bind(this, 'here')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://you-are-here-app.herokuapp.com')}
             styles={here}>You Are Here
          </p>
          <i className='icon-earth'
             onClick={this.onOpenLink.bind(this, 'http://you-are-here-app.herokuapp.com')}>
          </i>
          <div className='line'
               styles={styles.line}></div>
        </div>


        { /* TITLE */ }
        <p className='description'
           styles={styles.title}>Search Places, Get Reviews, Request Uber
        </p>
        <p className='description'
           styles={styles.date}>September 2015<br/>San Francisco, Ca
        </p>

        { /* STACK */ }
        <p styles={styles.stack}>
          <span styles={styles.salmon}>Stack:</span> Angular.js, Node.js, Express.js
        </p>
        <p styles={[styles.stack, styles.other]}>
          <span styles={styles.salmon}>Other:</span> Uber API, Yelp API, Google Maps API, Gulp.js
        </p>

        <p className='mainCopy'
           styles={[styles.mainCopy, styles.mainFirst]}>
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
        <div styles={styles.containerTop}>
          <p className='header'
             onMouseOver={this.onHover.bind(this, 'scrape')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://scrape-rentals.herokuapp.com')}
             styles={scrape}>Scrape Rentals
          </p>
          <i className='icon-earth'
             onClick={this.onOpenLink.bind(this, 'http://scrape-rentals.herokuapp.com')}>
          </i>
          <div className='line'
               styles={styles.line}>
          </div>
        </div>

        { /* TITLE */ }
        <p className='description'
           styles={styles.title}>Scrapes Rental Listings in the US
        </p>
        <p className='date'
           styles={styles.date}>July 2015<br/>San Francisco, Ca
        </p>

        { /* STACK */ }
        <p styles={styles.stack}>
          <span styles={styles.salmon}>Stack:</span> Angular.js, Node.js, Express.js
        </p>
        <p styles={[styles.stack, styles.other]}>
          <span styles={styles.salmon}>Other:</span> Grunt.js, Cheerio, Underscore.js
        </p>

        <p className='mainCopy'
           styles={[styles.mainCopy, styles.mainFirst]}>
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

var styles = StyleSheet.create({
  containerTop: {
    position: 'relative',
    margin: 0,
    padding: 0,
    width: 'auto',
    height: 'auto',
    maxWidth: 290
  },
  name: {
    position: 'relative',
    display: 'inline-block',
    margin: 0,
    marginTop: 20,
    paddingLeft: 15,
    fontSize: 21,
    fontWeight: 400,
    color: 'white',
    cursor: 'pointer',
    transition: 'color .2s ease-out'
  },
  nameHovered: {
    color: '#ec7f72'
  },
  line: {
    width: 275,
    height: 1,
    backgroundColor: 'rgba(225, 225, 225, .8)',
    marginLeft: 11,
    marginTop: -4
  },
  title: {
    color: '#2baade',
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 0,
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 1.1
  },
  date: {
    color: 'white',
    paddingLeft: 15,
    marginTop: 3,
    fontSize: 14,
    fontWeight: 400
  },
  stack: {
    color: 'rgba(225, 225, 225, .9)',
    paddingLeft: 15,
    marginTop: 3,
    marginBottom: 0,
    fontSize: 13,
    fontWeight: 400,
    letterSpacing: 1.1
  },
  salmon: {
    color: '#ec7f72'
  },
  other: {
    marginTop: 1
  },
  mainCopy: {
    color: 'white',
    paddingLeft: 15,
    marginTop: 3,
    fontSize: 15,
  },
  mainFirst: {
    marginTop: 6
  }
})
