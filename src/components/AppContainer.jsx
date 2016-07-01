var React = require("react");
var ReactRedux = require("react-redux");
var Router = require("react-router");
var Button = require("../ui/Button.jsx");
var Link = require("react-router").Link;
var EventListContainer = require("./EventList/EventListContainer.jsx");
var actionsUI = require("../actions/actionsUI.js");
var actionsSession = require("../actions/actionsSession.js");



/** 
 * this class renders the main frame of this web application
 *
 * @prop isLoggedIn {boolean} the current login status
 * @prop doLogout {boolean} handle the logout process
 *
 */
var App = React.createClass({
  /* it takes three props */
  Prototypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
    doLogout: React.PropTypes.func.isRequired,
    hideNavMenu: React.PropTypes.func.isRequired,
    unhideNavMenu: React.PropTypes.func.isRequired
  },

  componentWillMount() {
    /* if the user is logged in, it redirects to the event list. */
    if (this.props.isLoggedIn) {
      Router.browserHistory.push("/events");
    }
  },

  componentWillReceiveProps(nextProps) {
    /* when user logout from the application, it returns to the login page. */
    if (this.props.isLoggedIn && !nextProps.isLoggedIn) {
      Router.browserHistory.push("/");
    }
  },

  /* the render method */
  render: function() {
    var menuButton;

    if (this.props.isLoggedIn) {
      menuButton = (
        <Button id="menu-button" tooltip="Options" 
          action={this.props.unhideNavMenu}>
          &#9776;
        </Button>
      );
    }
    return (
      <div className="container">

        {menuButton /* it is visible only when logged in */}

        <nav onClick={this.props.hideNavMenu}>
          <NavMenu visible={this.props.navMenuIsVisible} doLogout={this.props.doLogout} />
        </nav>

        <header onClick={this.props.hideNavMenu}> 
          <HeaderContent menuButtonAction={this.props.unhideNavMenu} />
        </header>

        <main onClick={this.props.hideNavMenu}> 
          {/* content is here */} {this.props.children} 
        </main>

        <footer onClick={this.props.hideNavMenu}>
          <FooterContent />
        </footer>

      </div>
    );
  }
});



/**
 * This is the container for the component App
 * (generated using the react-redux through mappings)
 *
 * @prop event {object} - the event object
 *
 */
var mapStateToProps = function(state, ownProps) {
  return {
    isLoggedIn: state.session.loginStatus == 1,
    navMenuIsVisible: state.ui.showNavMenu
  };
};
var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    unhideNavMenu: function(e) {
      return dispatch(actionsUI.unhideNavMenu());
    },
    hideNavMenu: function(e) {
      e.stopPropagation();
      return dispatch(actionsUI.hideNavMenu());
    },
    doLogout: function() {
      return dispatch(actionsSession.doLogout());
    },
  };
};
var AppContainer = ReactRedux.connect(mapStateToProps, 
                                             mapDispatchToProps)(App);



/** 
 * this class renders the header part of this web application
 *
 * no props is required for this component
 *
 */
var HeaderContent= React.createClass({
  /* it does not take any props */
  Prototypes: {
  },

  /* the render method */
  render: function() {
    return (
      <div id="header-content">
        <h1>
          Meet-Up Event Planner
        </h1>
      </div>
    );
  }
});



/**
 * this class renders the navigation panel
 *
 * @prop visible {boolean} to show or hide this nav menu
 */
var NavMenu = React.createClass({
  /* it takes two props */
  Prototypes: {
    doLogout: React.PropTypes.func.isRequired,
    visible: React.PropTypes.bool.isRequired
  },

  /* the render method */
  render: function() {
    if (!this.props.visible) {
      return false;
    }
    return (
      <div id="nav-content">
        <div className="nav-list">
          <Link className="nav-button" to="/events">All events</Link>
          <Link className="nav-button" to="/new-event">Add new event</Link>
          <div className="nav-button" onClick={this.props.doLogout}>Logout</div>
        </div>
      </div>
    );
  }
});



/** 
 * this class renders the footer part of this web application
 *
 * no props is required for this component
 *
 */
var FooterContent = React.createClass({
  /* it does not take any props */
  Prototypes: {
  },

  /* the render method */
  render: function() {
    return (
      <div id="footer-content">
        <div id="react-logo">
          <img src="img/react_logo.png" alt="react logo"/>
          <p className="react-text">React.js</p>
        </div>
        <p>
          This is the first project of Udacity's nano degree program for senior
          web developer. It emphasizes on the design of the HTML forms. All
          user event data is stored locally by the browser. The
          complete source files can be downloaded from&nbsp;
          <a href="http://github.com/emguy/Meet-Up-Event-Planner">my github</a>.

          <br/> <br/> 

          Created by Yu Zhang | All right reserved {new Date().getFullYear()}
        </p>
      </div>
    );
  }
});



/* we only export the top most container */
module.exports = AppContainer;

