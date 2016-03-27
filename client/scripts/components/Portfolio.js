const Reflux     = require('reflux')
const StyleSheet = require('react-style')
const Navigation = require('react-router').Navigation

module.exports = React.createClass({
  displayName: 'Portfolio',
  mixins: [Navigation, Reflux.ListenerMixin],
  getInitialState() {
    return {}
  },
  render() {
    return ( 
      <div styles={styles.container}>
        
        { /* WRAP */ }
        <div styles={styles.wrap}>
          
          { /* HEADER */ }   
          <p styles={styles.header}>Professional Work</p>
        
          { /* OAK */ }          
          <p styles={[styles.companyName, styles.first]}>Oak Labs, Inc.</p>
          
          <div styles={styles.companyLine}></div>
          
          { /* TITLE */ }     
          <p styles={styles.title}>Principal Engineer</p>
          <p styles={styles.date}>October 2015 - Present @ San Francisco, Ca</p>
          
          { /* ABOUT */ }   
          <p styles={styles.title}>About Oak</p>          
          
          <p styles={styles.stack}>
            <span styles={styles.orange}>Stack:</span> Angular.js, React.js, Node.js, Express.js, MongoDB
          </p>          
          <p styles={[styles.stack, styles.tools]}>
            <span styles={styles.orange}>Tools:</span> D3, C3, Stylus, Xcode, Redis, SQL, AWS Redshift, AWS Kinesis, AWS Lambda
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
              compare with other items currently in the store's inventory.
          </p>
          <p styles={styles.mainCopy}>
             Currently building the Oak Analytics platform.
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
    height: '100%',
    backgroundColor: '#454f58'
  },
  wrap: {
    padding: 20,
    minWidth: 280,
    maxWidth: 1200,
    marginTop: 120,
    width: '90%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    border: '1px solid rgba(225, 225, 225, .7)'
  },
  header: {
    margin: 0,
    color: '#ec7f72',
    fontSize: 21
  },
  companyName: {
    margin: 0,
    paddingLeft: 15,
    fontSize: 21,
    fontWeight: 400,
    color: 'white'
  },
  first: {
    marginTop: 20
  },
  companyLine: {
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
    fontWeight: 400,
    letterSpacing: 1.1    
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
  tools: {
    marginTop: 1
  },
  mainCopy: {
    color: 'white',
    paddingLeft: 15,
    marginTop: 3
  },
  mainFirst: {
    marginTop: 6
  },
})
