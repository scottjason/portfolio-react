'use strict'

const Navbar       = require('../navbar/navbar')
const Header       = require('../header/header')
const Reflux       = require('reflux')
const actions      = require('../../actions')
const Navigation   = require('react-router').Navigation
const MainStore    = require('../../stores/MainStore')
var opts           = require('../../constants/').opts

module.exports = React.createClass({
  displayName: 'About',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return { hovered: null }
  },
  componentDidMount(){
    this.listenTo(MainStore, this.onStateChange)
  },
  onStateChange: function(cb, opts) {
    if (typeof this[cb] === 'function') this[cb](opts)
  },
  onHover(elem) {
    this.setState({ hovered: elem })
  },
  onOpenLink(link) {
    window.open(link, '_blank')
  },
  handleTabSelected(opt) {
    this.props.history.push('/' + opt)
  },
  render() {
    var github = this.state.hovered === 'github' ? 'icon-mark-github icon hovered' : 'icon-mark-github icon'
    var linkedin = this.state.hovered === 'linkedin' ? 'icon-linkedin icon hovered' : 'icon-linkedin icon'
    var twitter = this.state.hovered === 'twitter' ? 'icon-twitter icon hovered' : 'icon-twitter icon'
    return (
      <div className='aboutWrap'>

        <Header />
        <Navbar opts={opts} />

        <div className='content'>

          <div className='social'>
            <i onClick={this.onOpenLink.bind(this, 'https://github.com/scottjason')}
               onMouseOver={this.onHover.bind(this, 'github')}
               onMouseOut={this.onHover.bind(this, null)}
               className={github}>
            </i>
            <i onClick={this.onOpenLink.bind(this, 'https://www.linkedin.com/in/scottleejason')}
               onMouseOver={this.onHover.bind(this, 'linkedin')}
               onMouseOut={this.onHover.bind(this, null)}
               className={linkedin}>
            </i>
            <i onClick={this.onOpenLink.bind(this, 'https://twitter.com/scottleejason')}
               onMouseOver={this.onHover.bind(this, 'twitter')}
               onMouseOut={this.onHover.bind(this, null)}
               className={twitter}>
            </i>
          </div>

          <div className='headerContainer'>
            <p className='header first'>SCOTT JASON</p>
            <p className='header salmon'>//</p>
            <p className='header'>SOFTWARE ENGINEER</p>
          </div>

          <p className='copy'>

            <span className='first'>
              When I was a junior in college I started a
              <span onClick={this.onOpenLink.bind(this, 'https://en.wikipedia.org/wiki/Thriving_Ivory')}
                    className='blue pointer'>
                &nbsp;band&nbsp;
              </span>
              with a friend of mine.
            </span>

            <br/> <br/>

            <span className='second'>
              I never imagined it&#39;d last for over ten years.
            </span>

            <br/> <br/>

            I wrote the music and lyrics and played the piano. Eventually, the

            <span onClick={this.onOpenLink.bind(this, 'https://www.youtube.com/watch?v=GWcXuu16ttc')}
                  className='blue pointer'>
                &nbsp;first single&nbsp;
            </span>

            would hit number one on the Billboard Heat Seeker Charts and the band would go on to become a VH1 &nbsp;&#39;You Oughtta Know Artist&#39;,
            become RIAA Certified Gold and share the stage with some of the most talented musicians in the world.

            To learn more about Thriving Ivory visit iTunes, Spotify, et al.

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
                  className='blue pointer'>
              &nbsp;download&nbsp;
            </span>

            my resume.
          </p>

          <div className='line'></div>

          <p className='copy'>
            <span className='quote'>
              "Creativity is not the finding of a thing, but the making something out of it after it is found."
            </span>

            <br/>

            <span className='author'>-James Russell Lowell</span>

            <br/> <br/>

            In a nutshell, I love to build stuff.
          </p>

        </div>
      </div>
    )
  }
})