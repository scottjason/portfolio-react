const Reflux     = require('reflux')
const StyleSheet = require('react-style')
const Navigation = require('react-router').Navigation

module.exports = React.createClass({
  displayName: 'Projects',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return {}
  },
  render() {
    return (
      <div>

        { /* APP */ }
        <p styles={[styles.name, styles.first]}>Broadcast It</p>

        <div styles={styles.line}></div>

        { /* TITLE */ }
        <p styles={styles.title}>Broadcast A Live Video Stream, Promote & Share, Join Other Streams</p>
        <p styles={styles.date}>December 2015 @ San Francisco, Ca</p>

        { /* STACK */ }
        <p styles={styles.stack}>
          <span styles={styles.orange}>Stack:</span> React.js, Reflux, Node.js, Express.js, WebRtc
        </p>
        <p styles={[styles.stack, styles.other]}>
          <span styles={styles.orange}>Other:</span> OpenTok Api, Gulp.js, Redis
        </p>

        <p styles={[styles.mainCopy, styles.mainFirst]}>
          Broadcast It allows anyone to create a live, shareable video stream. It can be shared directly to the publisher&#39;s facebook wall or by the provided url. Friends and followers will be redirected to the live broadcast and the real-time viewer count will be reflected in the publisher&#39;s UI.
          <br/>
          <br/>
          WebRtc functionality is implemented via the OpenTok API.
        </p>

        
        { /* APP */ }
        <p styles={styles.name}>You Are Here</p>

        <div styles={styles.line}></div>

        { /* TITLE */ }
        <p styles={styles.title}>Search Places, Get Reviews, Request Uber</p>
        <p styles={styles.date}>September 2015 @ San Francisco, Ca</p>

        { /* STACK */ }
        <p styles={styles.stack}>
          <span styles={styles.orange}>Stack:</span> Angular.js, Node.js, Express.js
        </p>
        <p styles={[styles.stack, styles.other]}>
          <span styles={styles.orange}>Other:</span> Uber API, Yelp API, Google Maps API, Gulp.js
        </p>

        <p styles={[styles.mainCopy, styles.mainFirst]}>
          You Are Here integrates the Uber Api, Yelp Api and the Google Maps Api. It also implements oAuth 2.0 and deep-linking into Uber&#39;s native iOS app. Provides a search box to query for types of places in the area (bars, dinner, dentist, etc) and the search results render details about the places along with the yelp reviews and the uber ride-price and time-estimates.
          <br/>
          <br/>
          When using iOS, there will also be a 'request uber' button next to each listing. You are here is mobile-first and fully responsive.
        </p>


        { /* APP */ }
        <p styles={styles.name}>Scrape Rentals</p>

        <div styles={styles.line}></div>

        { /* TITLE */ }
        <p styles={styles.title}>Scrapes Rental Listings in the US</p>
        <p styles={styles.date}>July 2015 @ San Francisco, Ca</p>

        { /* STACK */ }
        <p styles={styles.stack}>
          <span styles={styles.orange}>Stack:</span> Angular.js, Node.js, Express.js
        </p>
        <p styles={[styles.stack, styles.other]}>
          <span styles={styles.orange}>Other:</span> Grunt.js, Cheerio, Underscore.js
        </p>

        <p styles={[styles.mainCopy, styles.mainFirst]}>
          A mobile-first, fully-responsive web application that scrapes, cleans and renders rental listings in the US. DOM traversal in Node.js via the Cheerio library.
          <br/>
          <br/>
          Scraped sites include rentals.com and apartments.com
        </p>

      </div>
    )
  }
})

var styles = StyleSheet.create({
  name: {
    margin: 0,
    marginTop: 40,
    paddingLeft: 15,
    fontSize: 21,
    fontWeight: 400,
    color: 'white'
  },
  first: {
    marginTop: 20
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
  orange: {
    color: '#ec7f72'
  },
  other: {
    marginTop: 1
  },
  mainCopy: {
    color: 'white',
    paddingLeft: 15,
    marginTop: 3,
    fontSize: 14,
  },
  mainFirst: {
    marginTop: 6
  }
})
