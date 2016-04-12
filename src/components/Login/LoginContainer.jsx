var React = require("react");
var Router = require("react-router");
var Button = require("../../ui/Button.jsx");
var ReactRedux = require("react-redux");
var actionsSession = require("../../actions/actionsSession.js");
var actionsInputLogin = require("../../actions/actionsInputLogin.js");


/**
 * This is the main login page, where requires user to enter the
 * valid user id and the password.
 *
 * @prop isLoggedIn{boolean} current login status
 * @prop handleLogin{function} the handler for login
 *
 */
var Login = React.createClass({
  Prototypes: {
    enteredUserName: React.PropTypes.string.isRequired,
    isLoggedIn: React.PropTypes.bool.isRequired,
    handleTry: React.PropTypes.func.isRequired,
    handleLogin: React.PropTypes.func.isRequired,
    captureUserName: React.PropTypes.func.isRequired,
    capturePassword: React.PropTypes.func.isRequired
  },
  render: function() {
    var systemMessage = "";
    return (
      <div>
        <form>

          <div id="system-message" className="small-text">
            {systemMessage}
          </div>

          <label for="user-id"> 
            <span> User Name:</span> 
            <input type="text" id="user-id" onChange={this.props.captureUserName} placeholder=""></input>
          </label>

          <br/>

          <label for="password"> 
            <span>password:</span> 
            <input type="password" id="password" onChange={this.props.capturePassword} placeholder=""></input>
          </label>

          <div className="form-button-list">
            <Button className="bg-reversed form-button"> login </Button>
            <Button className="bg-reversed form-button"> Register </Button>
            <Button className="bg-reversed form-button" action={this.props.handleTry}> Try </Button>
          </div>

        <p className="color-reversed small-text">
          Note: click <span className="dummy-button">&nbsp;Try&nbsp;</span> to login as a trial user.
        </p>

        </form>

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
    enteredUserName: state.inputs.login.uid,
  };
};
var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleTry: function() {
      console.log("try to login as the trial user ...");
      return dispatch(actionsSession.setLogin("trial"));
    },
    handleLogin: function() {
      console.log("try to login as the normal user ...");
      return dispatch(actionsSession.setLogin("default"));
    },
    captureUserName: function(e) {
      return dispatch(actionsInputLogin.setInputUserName(e.target.value));
    },
    capturePassword: function(e) {
      return dispatch(actionsInputLogin.setInputPassword(e.target.value));
    }
  };
};
var LoginContainer = ReactRedux.connect(mapStateToProps, 
                                             mapDispatchToProps)(Login);

/* we only export the top most conponent */
module.exports = LoginContainer;

