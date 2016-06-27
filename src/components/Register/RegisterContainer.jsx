var React = require('react');
var Router = require('react-router');
var ReactRedux = require('react-redux');
var actionsSession = require('../../actions/actionsSession.js');
var actionsUI = require('../../actions/actionsUI.js');
var actionsInput = require('../../actions/actionsInput.js');
var Button = require('../../ui/Button.jsx');

/**
 * This components allows user to register an account.
 *
 * @prop isLoggedIn{boolean} current login status
 */
var Regsterer = React.createClass({
  Prototypes: {
    formUid: React.PropTypes.string.isRequired,
    formPassword: React.PropTypes.string.isRequired,
    formEmail: React.PropTypes.string.isRequired,
    inputResponse: React.PropTypes.string.isRequired,
    captureRegUid: React.PropTypes.func.isRequired,
    captureRegPassword1: React.PropTypes.func.isRequired,
    captureRegPassword2: React.PropTypes.func.isRequired,
    captureRegEmail: React.PropTypes.func.isRequired,
  },

  /* if logedin, redirect to the event-list */
  componentWillReceiveProps: function(nextProps) {
    if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      Router.browserHistory.push('/events');
    }
  },

  /* the render method */
  render: function() {
  var controlButtons = (
      <div className='form-button-list'>
        <Button className='form-button'> Register </Button>
        <Button className='form-button' action={'/'}> Cancel </Button>
      </div>
    );

    return (
      <form>
        <h4>
          {'Register as a new user'}
        </h4>

        <div id='head-system-message' className='small-text'>
          {this.props.inputResponse}
        </div>

        <label htmlFor='input-uid'>
          <span> User ID:</span>
          <input id='input-uid' type='text' placeholder='' 
            onChange={this.props.captureRegUid}/>
        </label>
        <label htmlFor='input-password-1'>
          <span> Password:</span>
          <input id='input-password1' type='password' placeholder=''
            onChange={this.props.captureRegPassword1} />
        </label>
        <label htmlFor='input-password-2'>
          <span> Password Comfirmation:</span>
          <input id='input-password-2' type='password' placeholder=''
            onChange={this.props.captureRegPassword2} />
        </label>
        <label htmlFor='input-email'>
          <span> Email:</span>
          <input id='input-email' type='text' placeholder=''
            onChange={this.props.captureRegEmail} />
        </label>

        {controlButtons}

      </form>
    );
  }
});

var mapStateToProps = function(state, ownProps) {
  return {
    inputResponse: state.session.systemResponse,
    formUid: state.session.inputRegUid,
    formPassword: state.session.inputRegPassword,
    formEmail: state.session.formEmail
  };
};

var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    captureRegUid: function(e) {
      return dispatch(actionsInput.captureRegUid(e.target.value));
    },
    captureRegEmail: function(e) {
      return dispatch(actionsInput.captureRegEmail(e.target.value));
    },
    captureRegPassword1: function(e) {
      return dispatch(actionsInput.captureRegPassword1(e.target.value));
    },
    captureRegPassword2: function(e) {
      return dispatch(actionsInput.captureRegPassword2(e.target.value));
    }
  };
};

var RegisterContainer = ReactRedux.connect(mapStateToProps, 
                                             mapDispatchToProps)(Regsterer);

/* we only export the top most conponent */
module.exports = RegisterContainer;

