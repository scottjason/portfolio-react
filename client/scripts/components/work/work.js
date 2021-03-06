'use strict'

module.exports = React.createClass({
  displayName: 'Work',
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
    var oak = this.state.hovered === 'oak' ? 'name hovered' : 'name'
    var savvy = this.state.hovered === 'savvy' ? 'name hovered' : 'name'
    var instacart = this.state.hovered === 'instacart' ? 'name hovered' : 'name'
    var stanza = this.state.hovered === 'stanza' ? 'name hovered' : 'name'
    var throtl = this.state.hovered === 'throtl' ? 'name hovered' : 'name'
    var interact = this.state.hovered === 'interact' ? 'name hovered' : 'name'
    var oakGlobe = this.state.hovered === 'oakGlobe' ? 'icon-earth hovered' : 'icon-earth'
    var throtlGlobe = this.state.hovered === 'throtlGlobe' ? 'icon-earth hovered' : 'icon-earth'
    var savvyGlobe = this.state.hovered === 'savvyGlobe' ? 'icon-earth hovered' : 'icon-earth'
    var stanzaGlobe = this.state.hovered === 'stanzaGlobe' ? 'icon-earth hovered' : 'icon-earth'
    var instacartGlobe = this.state.hovered === 'instacartGlobe' ? 'icon-earth hovered' : 'icon-earth'
    var interactGlobe = this.state.hovered === 'interactGlobe' ? 'icon-earth hovered' : 'icon-earth'
    return (
      <div>

        { /* COMPANY THROTL */ }
        <div className='work'>
          <p onMouseOver={this.onHover.bind(this, 'throtl')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://www.throtl.com')}
             className={throtl}>Throtl
          </p>
          <i className={throtlGlobe}
             onMouseOver={this.onHover.bind(this, 'throtlGlobe')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://www.throtl.com')}>
          </i>
          <div className='workLine'></div>
        </div>

        { /* TITLE */ }
        <p className='title'>Full-Stack Software Engineer <span style={{color: 'white', fontSize: '12px'}}>(Contract / Remote)</span></p>

        { /* DATE */ }
        <p className='date'>September 2018 - Present<br/>San Francisco, Ca</p>

        { /* ABOUT */ }
        <p className='aboutCompany'>About Throtl</p>

        <p className='workCopy first'>
          Throtl is a classifieds marketplace for auto parts.
        </p>

        { /* CONTRIBUTIONS */ }
        <p className='contributions'>My Contributions</p>

        <p className='workCopy'>
          Doing some contract work on their rails app (mostly frontend) while in search of my next full-time role.
        </p>



        { /* COMPANY INSTACART */ }
        <div className='work'>
          <p onMouseOver={this.onHover.bind(this, 'instacart')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'https://instacart.com')}
             className={instacart}>Instacart
          </p>
          <i className={instacartGlobe}
             onMouseOver={this.onHover.bind(this, 'instacartGlobe')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'https://instacart.com')}>
          </i>
          <div className='workLine'></div>
        </div>

        { /* TITLE */ }
        <p className='title'>Full-Stack Software Engineer</p>

        { /* DATE */ }
        <p className='date'>April 2017 - November 2018<br/>San Francisco, Ca</p>

        { /* ABOUT */ }
        <p className='aboutCompany'>About Instacart</p>

        <p className='stack'>
          <span className='salmon'>Stack:</span> React, Redux, Ruby on Rails
        </p>

        <p className='stack other'>
          <span className='salmon'>Other:</span> Redis, Memcached, ElasticSearch, AWS
        </p>

        <p className='workCopy first'>
          Instacart is an online grocery delivery service company that works with local stores to deliver groceries to your door.
        </p>

        { /* CONTRIBUTIONS */ }
        <p className='contributions'>My Contributions</p>

        <p className='workCopy'>
          While on the Search & Discovery team I built and maintained some of Instacart’s most crucial features including a backend-driven (machine learning
          implemented) autocomplete system for personalized search results, the low stock experience as well as the replacements flow.
        </p>
        <p className='workCopy'>
          Worked daily balancing sprints and backlog tasks which encompassed the entire stack of a large codebase and successfully planned for and implemented features to meet quarterly goals while leading the coordination of group efforts when multiple teams were involved.
        </p>


        { /* COMPANY SAVVY */ }
        <div className='work'>
          <p onMouseOver={this.onHover.bind(this, 'savvy')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'https://savvy.is')}
             className={savvy}>Savvy
          </p>
          <i className={savvyGlobe}
             onMouseOver={this.onHover.bind(this, 'savvyGlobe')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'https://savvy.is')}>
          </i>
          <div className='workLine'></div>
        </div>

        { /* TITLE */ }
        <p className='title'>Senior Software Engineer</p>

        { /* DATE */ }
        <p className='date'>July 2016 - Present<br/>San Francisco, Ca</p>

        { /* ABOUT */ }
        <p className='aboutCompany'>About Savvy</p>

        <p className='stack'>
          <span className='salmon'>Stack:</span> React.js, Redux, Ruby on Rails
        </p>

        <p className='stack other'>
          <span className='salmon'>Other:</span> Webpack, WebRTC, OpenTok, AWS, Stylus
        </p>

        <p className='workCopy first'>
          Savvy is most effective way to create high-impact employees. 
          Find thousands of vetted and affordable coaches to coach employees 
          in a variety of skills via one-on-one video sessions.
        </p>

        { /* CONTRIBUTIONS */ }
        <p className='contributions'>My Contributions</p>

        <p className='workCopy'>
           Built various aspects of the WebRTC-based app which uses google calendar and the OpenTok API
          to allow learners to book 1-1 video sessions with teachers. The payment system is also through the Savvy platform. 
          Additionaly, I led the effort to integrate webpack and frontend testing using mocha and chai.
        </p>
        <p className='workCopy'>
           Currently building the Savvy analytics platform.
        </p>



        { /* COMPANY OAK */ }
        <div className='work'>
          <p onMouseOver={this.onHover.bind(this, 'oak')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://oaklabs.is')}
             className={oak}>Oak Labs, Inc.
          </p>
          <i className={oakGlobe}
             onMouseOver={this.onHover.bind(this, 'oakGlobe')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://oaklabs.is')}>
          </i>
          <div className='workLine'></div>
        </div>

        { /* TITLE */ }
        <p className='title'>Principal Software Engineer | Full-Stack</p>

        { /* DATE */ }
        <p className='date'>October 2015 - July 2016<br/>San Francisco, Ca</p>

        { /* ABOUT */ }
        <p className='aboutCompany'>About Oak</p>

        <p className='stack'>
          <span className='salmon'>Stack:</span> Angular.js, React.js, Node.js, Express.js, MongoDB
        </p>

        <p className='stack other'>
          <span className='salmon'>Other:</span> D3, C3, HighCharts, Gulp, Stylus, Xcode, Redis, SQL, AWS Redshift, AWS Kinesis, AWS Lambda
        </p>

        <p className='workCopy first'>
          We are bridging the worlds of tech and retail, designing elegant, intuitive customer experiences
          that will transform the way we think about shopping forever. Starting with our interactive Oak
          Fitting Room, we’re enabling our retail partners to create magical and meaningful customer
          experiences, while capturing previously unattainable shopper insights.
        </p>

        { /* CONTRIBUTIONS */ }
        <p className='contributions'>My Contributions</p>

        <p className='workCopy'>
           Built and maintain the iPad app used by retail associates at Polo Ralph Lauren (NYC & Dallas).
           The iPad app works along side the Oak fitting rooms and enables the associates to keep track of
           the state of any room in the store. An associate can receive and respond to customer requests,
           view which items have entered the fitting rooms and compare with other items currently in the
           store&#39;s inventory.
        </p>
        <p className='workCopy'>
          Additionaly I built the Oak analytics platform used by the corporate team at Polo Ralph Lauren. This involved 
          the integration of the Oak fitting room mirror transaction logs using AWS Redshift, AWS Lambda, AWS Firehose and Node.js. 
          I also wrote Oak's Frontend tests for interview candidates as well as maintained the company's website.
        </p>


        { /* COMPANY */ }
        <div className='work'>
          <p onMouseOver={this.onHover.bind(this, 'stanza')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://stanza.co')}
             className={stanza}>Stanza
          </p>
          <i className={stanzaGlobe}
             onMouseOver={this.onHover.bind(this, 'stanzaGlobe')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://stanza.co')}>
          </i>
          <div className='workLine'></div>
        </div>

        { /* TITLE */ }
        <p className='title'>Full-Stack Software Engineer</p>

        { /* DATE */ }
        <p className='date'>March 2015 - October 2015<br/>San Francisco, Ca</p>

        { /* ABOUT */ }
        <p className='aboutCompany'>About Stanza</p>

        <p className='stack'>
          <span className='salmon'>Stack:</span> Angular.js, Node.js, Express.js, MongoDB
        </p>

        <p className='stack other'>
          <span className='salmon'>Other:</span> Grunt, Redis, AWS, HighCharts, Async, Invision
        </p>

        <p className='workCopy first'>
           Stanza&#39;s mission is to make scheduling around the web/mobile seamless.
           Stanza&#39;s smart &nbsp;&#39;Add to Calendar&#39;&nbsp; button is easy to embed in any
           business&#39;&nbsp; website/mobile app and offers their audience a two-click process to sync
           future events with any calendar. Current customers include large sports franchises
           (NCAA, NBA, NHL, NFL) where we&#39;ve seen 50M+ calendar event downloads since launch.
        </p>

        { /* CONTRIBUTIONS */ }
        <p className='contributions'>My Contributions</p>

        <p className='workCopy'>
            Built Stanza&#39;s analytics feature. Logic written on the client along with data visualization
            using HighCharts.js.

            <br/>

            Built the referral program at the time of Stanza&#39;s Button 2.0 launch.

            <br/>

            Built internal tools for the bd team to help streamline the sales process.

            <br/>

            Built the client-side logic and rendering for the recurring events feature. Generates and
            renders recurring events based on an individual event&#39;s recurrence rule.

            <br/>

            Removed an outdated task runner and built grunt into an existing app to help speed up development
            time and to compress the build properly for deployment.

            <br/>

            Built Stanza&#39;s dashboard v2 alongside lead frontend Yash Saxena and lead designer Jonathan
            Capecchi (shipped Sept 2015).
        </p>


        { /* COMPANY */ }
        <div className='work'>
          <p onMouseOver={this.onHover.bind(this, 'interact')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://tryinteract.com')}
             className={interact}>Interact
          </p>
          <i className={interactGlobe}
             onMouseOver={this.onHover.bind(this, 'interactGlobe')}
             onMouseOut={this.onHover.bind(this, null)}
             onClick={this.onOpenLink.bind(this, 'http://tryinteract.com')}>
          </i>
          <div className='workLine'></div>
        </div>

        { /* TITLE */ }
        <p className='title'>Software Engineer</p>

        { /* DATE */ }
        <p className='date'>December 2014 - March 2015<br/>Berkeley, Ca</p>

        { /* ABOUT */ }
        <p className='aboutCompany'>About Interact</p>

        <p className='stack'>
          <span className='salmon'>Stack:</span> Backbone.js, Node.js, Express.js, MongoDB
        </p>

        <p className='stack other'>
          <span className='salmon'>Other:</span> Grunt, Browserify, AWS, Async
        </p>

        <p className='workCopy first'>
           Interact enables the creation of and embedding of quizzes in your website to engage customers and
           generate leads.

           <br/>

           A few of Interact&#39;s growing clientele include Forbes, CBS, Disney, American Red Cross and TED.
        </p>

        { /* CONTRIBUTIONS */ }
        <p className='contributions'>My Contributions</p>

        <p className='workCopy'>
           Co-built version two of the Interact web application alongside CTO, Matt Clark.<br/>
           Built Interact&#39;s user authentication system, created mongo schemas, wrote the endpoints
           and server-side logic in Node.js.

           <br/>

           Wrote and deployed multiple apis. Built small, reuseable modules in Node.js to fit the app&#39;s
           needs.

           <br/>

           Wrote the analytics logic in Node.js that generates a downloadable CSV file.<br/>
           Co-built Interact&#39;s real-time, collaboration feature.
        </p>

      </div>
    )
  }
})
