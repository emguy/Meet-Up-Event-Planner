var React = require("react");
var Router = require("react-router");
var ReactRedux = require("react-redux");
var actionsSession = require("../../actions/actionsSession.js");
var Button = require("../../ui/Button.jsx");

/**
 * Here allows users to create new events by filling and submitting the form. 
 *
 * @prop isLoggedIn{boolean} current login status
 */
var EventCreator = React.createClass({
  Prototypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
  },

  getInitialState: function() {
    return {
      showAdvancedForm: false
    };
  },

  toggleAdvancedForm: function() {
    if (!this.state.showAdvancedForm) {
      this.setState({showAdvancedForm: true});
    } else {
      this.setState({showAdvancedForm: false});
    }
  },

  /* if the user if not loggedin, redirect to the login page */
  componentWillMount: function() {
    if (!this.props.isLoggedIn) {
      Router.browserHistory.push("/");
    }
  },

  /* the render method */
  render: function() {
    var essential = (
      <div>
        <label for="input-event-name">
          <span> Event name:</span>
          <input id="input-event-name" type="text" />
        </label>
        <label for="input-event-type">
          <span> Type:</span>
          <input id="input-event-type" type="text" />
        </label>
        <label for="input-event-location">
          <span> Location:</span>
          <input id="input-event-location" type="text" />
        </label>
        <label for="input-event-starttime">
          <span> Start time:</span>
          <input type="datetimelocal" id="input-event-starttime" type="text" />
        </label>
      </div>
    );
    var optional;
    if (this.state.showAdvancedForm) {
      optional = (
        <div>
          <hr/> <br/>
          <label duration for="input-duration">
            <span> duration:</span>
            <input id="input-duration" type="text" />
          </label>
          <label for="input-event-host">
            <span> Host:</span>
            <input id="input-event-host" type="text" />
          </label>
          <label for="input-event-guests">
            <span> Guest list:</span>
            <input id="input-event-guests" type="text" />
          </label>
          <label for="input-event-memo">
            <span> Memo:</span>
            <input id="input-event-memo" type="text" />
          </label>
        </div>
      );
    }
    return (
      <form>
        <h4>
          New Event
        </h4>
        <div id="head-system-message" className="small-text"> </div>
        {essential}
        {optional}

        <label id="show-advanced-checkbox" for="show-advanced">
          <input type="checkbox" id="show-advanced" checked={this.state.showAdvancedForm} onClick={this.toggleAdvancedForm}/>
          <span> Show advanced form. </span>
        </label>

        <div className="form-button-list">
          <Button className="form-button"> Update </Button>
          <Button className="form-button" action={"/events"}> Cancel </Button>
        </div>

      </form>
    );
  }
});

var mapStateToProps = function(state, ownProps) {
  return {
    isLoggedIn: state.session.loginStatus === 1
  };
};

var mapDispatchToProps = function(dispatch, ownProps) {
  return {
  };
};
var EventCreatorContainer = ReactRedux.connect(mapStateToProps, 
                                             mapDispatchToProps)(EventCreator);

/* we only export the top most conponent */
module.exports = EventCreatorContainer;

