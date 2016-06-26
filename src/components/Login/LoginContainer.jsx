var React = require('react');
var Router = require('react-router');
var Button = require('../../ui/Button.jsx');
var ReactRedux = require('react-redux');
var actionsSession = require('../../actions/actionsSession.js');
var actionsInput = require('../../actions/actionsInput.js');


/**
 * This is the main login page, where requires user to enter the
 * valid user id and the password.
 *
 * @prop isLoggedIn{boolean} current login status
 * @prop loginResponse{string/number} the system response on user inputs
 * @prop captureUid{function} store the current User Name input
 * @prop capturePassword{function} store the current Password input
 * @prop processUserInput{function} processing authentication
 * @prop loginAsTrialUser{function} the hander for the trial user login
 *
 */
var Login = React.createClass({
  /* it takes 6 props */
  Prototypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
    loginResponse: React.PropTypes.string,
    captureUid: React.PropTypes.func.isRequired,
    capturePassword: React.PropTypes.func.isRequired,
    processUserInput: React.PropTypes.func.isRequired,
    loginAsTrialUser: React.PropTypes.func.isRequired,
  },

  /* if logedin, redirect to the event-list */
  componentWillReceiveProps: function(nextProps) {
    if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      Router.browserHistory.push('/events');
    }
  },

  /* the render method */
  render: function() {
    return (
      <div>
        <form>

          <h4>
            User login
          </h4>

          <div id='head-system-message' className='small-text'>
            {this.props.loginResponse}
          </div>

          <label for='user-id'> 
            <span> User Id:</span> 
            <input type='text' id='user-id' onChange={this.props.captureUid} placeholder=''></input>
          </label>

          <br/>

          <label for='password'> 
            <span>Password:</span> 
            <input type='password' id='password' onChange={this.props.capturePassword} placeholder=''></input>
          </label>

          <div className='form-button-list'>
            <Button className='form-button' action={this.props.processUserInputs}> login </Button>
            <Button className='form-button' action={'/register'}> Register </Button>
            <Button className='form-button' action={this.props.loginAsTrialUser}> Try </Button>
          </div>

          <p className='small-text'>
            Note: click <span className='dummy-button'>&nbsp;Try&nbsp;</span> to login as a trial user.
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
    loginResponse: state.session.loginResponse,
    isLoggedIn: state.session.loginStatus === 1,
  };
};
var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    loginAsTrialUser: function() {
      return dispatch(actionsSession.loginAsTrialUser());
    },
    processUserInputs: function() {
      return dispatch(actionsInput.processInputLogin());
    },
    captureUid: function(e) {
      return dispatch(actionsInput.captureLoginUid(e.target.value));
    },
    capturePassword: function(e) {
      return dispatch(actionsInput.captureLoginPassword(e.target.value));
    }
  };
};
var LoginContainer = ReactRedux.connect(mapStateToProps, 
                                             mapDispatchToProps)(Login);

/* we only export the top most conponent */
module.exports = LoginContainer;

