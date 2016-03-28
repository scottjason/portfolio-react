'use strict'

const Navbar       = require('./Navbar')
const Reflux       = require('reflux')
const actions      = require('../actions')
const StyleSheet   = require('react-style')
const Navigation   = require('react-router').Navigation 
const MainStore    = require('../stores/MainStore')

module.exports = React.createClass({
  displayName: 'Portfolio',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return {}
  },
  componentDidMount(){
    this.listenTo(MainStore, this.onStateChange)
  },
  onStateChange: function(cb, opts) {
    if (typeof this[cb] === 'function') this[cb](opts)
  },
  onOpenLink(link) {
    window.open(link, '_blank')
  },
  handleTabSelected(opt) {
    this.props.history.push('/' + opt)
  },
  render() {
    return (
      <div styles={styles.container}>
        <Navbar />
        
        <div styles={styles.content}>
          <div styles={styles.about}>
            <p styles={[styles.header, styles.firstHeader]}>SCOTT JASON</p>
            <p styles={[styles.header, styles.salmon]}>//</p>
            <p styles={styles.header}>SOFTWARE ENGINEER</p>
        </div>
          
          <p styles={styles.mainCopy}>
            <span styles={styles.first}>
              When I was a junior in college I started a band with a friend of mine.
            </span>
            <br/> <br/> 
            <span styles={styles.second}>
              I never imagined it&#39;d last for over ten years.
            </span>
            <br/> <br/>
            I wrote the music and lyrics and played the piano. Eventually, the 
            <span onClick={this.onOpenLink.bind(this, 'https://www.youtube.com/watch?v=GWcXuu16ttc')}
                  styles={[styles.blue, styles.cursorPointer]}>
                &nbsp;first single&nbsp;
            </span>
              would hit number one on the Billboard Heat Seeker Charts and the band would go on to become a VH1 &nbsp;&#39;You Oughtta Know Artist&#39;, 
              become RIAA Certified Gold and share the stage with some of the most talented musicians in the world. 
            <span onClick={this.onOpenLink.bind(this, 'https://en.wikipedia.org/wiki/Thriving_Ivory')}
                  styles={[styles.blue, styles.cursorPointer]}>
              &nbsp;Learn more&nbsp;
            </span>
            about Thriving Ivory or visit iTunes, Spotify, et al.
            <br/> <br/>
            For the first five of those years the band wasn&#39;t signed and in an effort to create and maintain an online presence, 
            I began teaching myself the fundamentals of web development.
            <br/> <br/>
            Fast-foward to today and I&#39;m a full-time Software Engineer who loves taking on big projects and features. 
            I specialize in all things Javascript and am especially proficient in Angular.js, React.js and Node.js. 
            I can create near pixel-perfect UI&#39;s off a designer&#39;s images and am equally as comfortable working on the server. 
            <br/> <br/>
            For a more thorough list of languages and frameworks, please
            <span onClick={this.onOpenLink.bind(this, 'https://dl.dropboxusercontent.com/u/7084808/Resume/Scott-Jason-Resume.pdf')}
                  styles={[styles.blue, styles.cursorPointer]}>
              &nbsp;download&nbsp;
            </span>
            my resume.
          </p>
        
            <div styles={styles.line}></div>
        
          <p styles={styles.mainCopy}>
              <span styles={styles.quote}>
                "Creativity is not the finding of a thing, but the making something out of it after it is found." 
              </span>
            <br/>
            <span styles={styles.author}>-James Russell Lowell</span>
            <br/> <br/>
            In a nutshell, I love to build stuff.
          </p>
        
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
    height: 'auto',
    paddingBottom: 30,
    backgroundColor: 'transparent'
  },  
  content: {
    padding: 20,
    minWidth: 280,
    maxWidth: 1200,
    width: '90%',
    height: 'auto',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    border: '1px solid rgba(225, 225, 225, .7)'
  },
  about: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18
  },
  header: {
    display: 'inline-block',
    color: 'rgba(225, 225, 225, .8)',    
    marginLeft: 10
  },
  firstHeader: {
    marginLeft: 0
  },
  mainCopy: {
    color: 'white',
    paddingLeft: 15,
    marginTop: 3,
    fontSize: 15,
  },
  first: {
    fontSize: 16
  },
  second: {
    color: '#ec7f72',
    fontSize: 18
  },
  blue: {
    color: '#2baade'
  },
  salmon: {
    color: '#ec7f72'
  },
  cursorPointer: {
    cursor: 'pointer'
  },
  quote: {
    fontStyle: 'italic',
    color: '#ec7f72',
  },
  author: {
    position: 'relative',
    marginTop: 8,
    fontSize: 14
  },
  line: {
    position: 'relative',
    width: '600px',
    height: 1,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(225, 225, 225, .6)'
  }
})
