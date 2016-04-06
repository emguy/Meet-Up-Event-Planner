var sessionManager = require("./sessionManager.js");
var React = require("react");
var Router = require("react-router");
var Button = require("./ui.jsx").Button;

var LoginContainer = React.createClass({

  componentWillMount: function() {
    console.log(typeof sessionManager.isLoggedIn());
    if (!sessionManager.isLoggedIn()) {
      console.log("is not logged in");
    } else {
      console.log("is logged in");
    };
    Router.browserHistory.push("/events");
  },

  render: function() {
    return ( <div>
      <Button id="login-button" tooltip="Login">Login</Button>
      </div>
    );
  },
});
/* we only export the top most conponent */
module.exports = LoginContainer;

