const Reflux     = require('reflux')
const StyleSheet = require('react-style')
const Navigation = require('react-router').Navigation

module.exports = React.createClass({
  displayName: 'Work',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return {}
  },
  render() {
    return (
      <div>
      
        { /* COMPANY */ }
        <p styles={[styles.name, styles.first]}>Oak Labs, Inc.</p>

        <div styles={styles.line}></div>

        { /* TITLE */ }
        <p styles={styles.title}>Principal Engineer</p>
        <p styles={styles.date}>October 2015 - Present @ San Francisco, Ca</p>

        { /* ABOUT */ }
        <p styles={styles.title}>About Oak</p>

        <p styles={styles.stack}>
          <span styles={styles.orange}>Stack:</span> Angular.js, React.js, Node.js, Express.js, MongoDB
        </p>
        <p styles={[styles.stack, styles.other]}>
          <span styles={styles.orange}>Tools:</span> D3, C3, Gulp, Stylus, Xcode, Redis, SQL, AWS Redshift, AWS Kinesis, AWS Lambda
        </p>

        <p styles={[styles.mainCopy, styles.mainFirst]}>
          We are bridging the worlds of tech and retail, designing elegant, intuitive customer experiences that will transform the way we think about shopping forever. Starting with our interactive Oak Fitting Room, we’re enabling our retail partners to create magical and meaningful customer experiences, while capturing previously unattainable shopper insights.
        </p>

        { /* CONTRIBUTIONS */ }
        <p styles={styles.title}>My Contributions</p>
        <p styles={styles.mainCopy}>
            Built and maintain the iPad app used by retail associates at Polo Ralph Lauren (NYC & Dallas).  The iPad app works
            along side the Oak fitting rooms and enables the associates to keep track of the state of any room in the store.
            An associate can receive and respond to customer requests, view which items have entered the fitting rooms and
            compare with other items currently in the store&#39;s inventory.
        </p>
        <p styles={styles.mainCopy}>
           Currently building the Oak Analytics platform.
        </p>


        { /* COMPANY */ }
        <p styles={styles.name}>Stanza</p>

        <div styles={styles.line}></div>

        { /* TITLE */ }
        <p styles={styles.title}>Frontend Engineer</p>
        <p styles={styles.date}>March 2015 - October 2015 @ San Francisco, Ca</p>

        { /* ABOUT */ }
        <p styles={styles.title}>About Stanza</p>

        <p styles={styles.stack}>
          <span styles={styles.orange}>Stack:</span> Angular.js, Node.js, Express.js, MongoDB
        </p>
        <p styles={[styles.stack, styles.other]}>
          <span styles={styles.orange}>Tools:</span> Grunt, Redis, AWS, HighCharts, Async, Invision
        </p>

        <p styles={[styles.mainCopy, styles.mainFirst]}>
          Stanza&#39;s mission is to make scheduling around the web/mobile seamless. Stanza&#39;s smart &nbsp;&#39;Add to Calendar&#39;&nbsp; button is easy to embed in any business&#39;&nbsp; website/mobile app and offers their audience a two-click process to sync future events with any calendar. Current customers include large sports franchises (NCAA, NBA, NHL, NFL) where we&#39;ve seen 50M+ calendar event downloads since launch.
        </p>

        { /* CONTRIBUTIONS */ }
        <p styles={styles.title}>My Contributions</p>
        <p styles={styles.mainCopy}>
          Built Stanza&#39;s analytics feature. Logic written on the client along with data visualization using HighCharts.js.<br/>
          Built the referral program at the time of Stanza&#39;s Button 2.0 launch.<br/>
          Built internal tools for the bd team to help streamline the sales process.<br/>
          Built the client-side logic and rendering for the recurring events feature. Generates and renders recurring events based on an individual event&#39;s recurrence rule.<br/>
          Removed an outdated task runner and built grunt into an existing app to help speed up development time and to compress the build properly for deployment.<br/>
          Built Stanza&#39;s dashboard v2 alongside lead frontend Yash Saxena and lead designer Jonathan Capecchi (shipped Sept 2015).
        </p>

        { /* COMPANY */ }
        <p styles={styles.name}>Interact</p>

        <div styles={styles.line}></div>

        { /* TITLE */ }
        <p styles={styles.title}>Software Engineer</p>
        <p styles={styles.date}>December 2014 - March 2015 @ San Francisco, Ca</p>

        { /* ABOUT */ }
        <p styles={styles.title}>About Interact</p>

        <p styles={styles.stack}>
          <span styles={styles.orange}>Stack:</span> Backbone.js, Node.js, Express.js, MongoDB
        </p>
        <p styles={[styles.stack, styles.other]}>
          <span styles={styles.orange}>Tools:</span> Grunt, Browserify, AWS, Async
        </p>

        <p styles={[styles.mainCopy, styles.mainFirst]}>
          Interact enables the creation of and embedding of quizzes in your website to engage customers and generate leads.<br/>
          A few of Interact&#39;s growing clientele include Forbes, CBS, Disney, American Red Cross and TED.
        </p>

        { /* CONTRIBUTIONS */ }
        <p styles={styles.title}>My Contributions</p>
        <p styles={styles.mainCopy}>
          Co-built version two of the Interact web application alongside CTO, Matt Clark.<br/>
          Built Interact&#39;s user authentication system, created mongo schemas, wrote the endpoints and server-side logic in Node.js.<br/>
          Wrote and deployed multiple apis. Built small, reuseable modules in Node.js to fit the app&#39;s needs.<br/>
          Wrote the analytics logic in Node.js that generates a downloadable CSV file.<br/>
          Co-built Interact&#39;s real-time, collaboration feature.
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
