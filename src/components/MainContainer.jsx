var React = require("react");
var EventListContainer = require("./EventList/EventListContainer.jsx");
var Button = require("../ui/Button.jsx");
var Link = require("react-router").Link;
var sessionManager = require("../utils/sessionManager.js");



/** 
 * this class renders the main frame of this web application
 *
 * no props is required for this component
 *
 */
var MainContainer = React.createClass({
  /* it does not take any props */
  Prototypes: {
  },

  /* we we define initial states */
  getInitialState: function() {
    return {
      navMenuIsVisible: false,
      isLoggedIn: false,
    };
  },

  componentWillMount: function() {
    this.setState({isLoggedIn: sessionManager.isLoggedIn()});
  },

  /* a setter for the state `navMenuIsVisible` */
  unhideNavMenu: function() {
    if (!this.state.navMenuIsVisible) {
      this.setState({navMenuIsVisible: true});
    }
  },

  /* another setter for the state `navMenuIsVisible` */
  hideNavMenu: function() {
    if (this.state.navMenuIsVisible) {
      this.setState({navMenuIsVisible: false});
    }
  },

  /* the render method */
  render: function() {
    return (
      <div className="container" onClick={this.hideNavMenu}>
        <Button id="menu-button" tooltip="Options" 
          action={this.unhideNavMenu}>&#9776;</Button>
        <NavMenu visible={this.state.navMenuIsVisible}/>
        <HeaderContainer menuButtonAction={this.unhideNavMenu} />
        <main> {/* content is here */} {this.props.children} </main>
        <FooterContainer />
      </div>
    );
  },
});



/** 
 * this class renders the header part of this web application
 *
 * no props is required for this component
 *
 */
var HeaderContainer = React.createClass({
  /* it does not take any props */
  Prototypes: {
  },

  /* the render method */
  render: function() {
    return (
      <header>
        <h1>
          Meet-Up Event Planner
        </h1>
      </header>
    );
  },
});



/**
 * this class renders the navigation panel
 *
 * @prop visible {boolean} to show or hide this nav menu
 */
var NavMenu = React.createClass({
  /* it takes only one prop */
  Prototypes: {
    visible: React.PropTypes.bool.isRequired,
  },

  defaultStyle: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 2,
  },

  /* the render method */
  render: function() {
    if (!this.props.visible) {
      return false;
    }
    return (
      <nav style={this.defaultStyle}>
        <ul role="nav">
          <li className="nav-button"><Link to="/events">View all events</Link></li>
          <li className="nav-button"><Link to="/new_event">Add new event</Link></li>
        </ul>
      </nav>
    );
  },
});



/** 
 * this class renders the footer part of this web application
 *
 * no props is required for this component
 *
 */
var FooterContainer = React.createClass({
  /* it does not take any props */
  Prototypes: {
  },

  /* the render method */
  render: function() {
    return (
      <footer>
        <div id="react-logo">
          <img src="img/react_logo.png" alt="react logo"/>
          <p className="react-text">React.js</p>
        </div>
        <p>
          This is the first project of Udacity's nano degree program for senior
          web developer. It emphasizes on the design of the HTML forms. All
          user event data is stored locally by the browser. The
          complete source files can be downloaded from
          <a href="http://github.com/emguy/Meet-Up-Event-Planner">my github</a>.

          <br/> <br/> 

          Created by Yu Zhang | All right reserved {new Date().getFullYear()}
        </p>
      </footer>
    );
  },
});



/* we only export the top most component */
module.exports = MainContainer;

