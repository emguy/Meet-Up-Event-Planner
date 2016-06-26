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
    inputResponse: React.PropTypes.string.isRequired
  },

  /* if logedin, redirect to the event-list */
  componentWillReceiveProps: function(nextProps) {
    if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      Router.browserHistory.push('/events');
    }
  },

  /* the render method */
  render: function() {
    var controlButtons = [];
    controlButtons[0] = (
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

        <label for='input-uid'>
          <span> User ID:</span>
          <input id='input-uid' type='text' placeholder='' 
            onChange={this.props.captureRegUid}/>
        </label>
        <label for='input-password'>
          <span> Password:</span>
          <input id='input-event-type' type='password' placeholder=''
            onChange={this.props.captureRegPassword} />
        </label>

        {controlButtons[this.props.formPageNumber]}

      </form>
    );
  }
});

var mapStateToProps = function(state, ownProps) {
  return {
    inputResponse: state.session.inputResponse,
    formUid: state.session.inputRegUid,
    formPassword: state.session.inputRegPassword,
    formEmail: state.session.formEmail
  };
};

var mapDispatchToProps = function(dispatch, ownProps) {
  return {};
};

var RegisterContainer = ReactRedux.connect(mapStateToProps, 
                                             mapDispatchToProps)(Regsterer);

/* we only export the top most conponent */
module.exports = Regsterer;

