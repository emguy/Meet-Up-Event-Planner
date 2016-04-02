var React = require("react");
var Button = require("./Button.jsx");
var EventListContainer = require("./EventListContainer.jsx");

/** 
 * this class renders the main frame of this web application
 *
 * no props is required for this component
 *
 */
var MainContainer = React.createClass({
  Prototypes: {
  },
  render: function() {
    return (
    <div className="container">
      <HeaderContainer />
      <main> <EventListContainer /> </main>
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
  Prototypes: {
  },
  render: function() {
    return (
      <header>
        <Button className="menu-button" tooltip="Options" action="#">&#9776;</Button>
        <h1>
          Meet-Up Event Planner
        </h1>
      </header>
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
  Prototypes: {
  },
  render: function() {
    return (
      <footer>
        <div id="react-logo">
          <img src="img/react_logo.png" alt="react logo"/>
          <p className="react-text">React.js</p>
        </div>
        <p>
          This is the first project of Udacity's nano degree program for senior web developer.
          It emphasizes on the design of the HTML forms. All user event data is
          stored in the localstorage by the browser. The complete source files
          can be downloaded from my <a href="http://github.com/emguy/Meet-Up-Event-Planner">github</a>.
          <br/>
          <br/>
          Created by Yu Zhang | All right reserved {new Date().getFullYear()}
        </p>
      </footer>
    );
  },
});

module.exports = MainContainer;

