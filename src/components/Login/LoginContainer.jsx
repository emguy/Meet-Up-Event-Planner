var React = require("react");
var Router = require("react-router");
var Button = require("../../ui/Button.jsx");
var ReactRedux = require("react-redux");
var actionsSession = require("../../actions/actionsSession.js");

var Login = React.createClass({
  Prototypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
    handleLogin: React.PropTypes.func.isRequired
  },
  componentWillMount: function() {
    if (this.props.isLoggedIn) {
      Router.browserHistory.push("/events");
    }
  },
  render: function() {
      var result;
      if (this.props.isLoggedIn) {
        result = (
        <div style={{color: "black"}}>
          is loggedin
        </div>
        );
      }
    return (
      <div>
        {result}
        <Button id="login-button" tooltip="Login" 
          action={this.props.handleLogin}>Login</Button>
      </div>
    );
  }
});

/**
 * This is the container for the component Login
 * (generated using the react-redux through mappings)
 *
 * It does not take any props.
 *
 */
var mapStateToProps = function(state, ownProps) {
  return {
    isLoggedIn: state.session.loginStatus === 1,
  };
};
var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleLogin: function() {
      console.log("button clicked");
      return dispatch(actionsSession.setLoginStatus("default"));
    },
  };
};
var LoginContainer = ReactRedux.connect(mapStateToProps, 
                                             mapDispatchToProps)(Login);

/* we only export the top most conponent */
module.exports = LoginContainer;

