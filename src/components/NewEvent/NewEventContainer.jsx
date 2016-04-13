var React = require("react");
var Router = require("react-router");
var ReactRedux = require("react-redux");
var actionsSession = require("../../actions/actionsSession.js");
var actionsUI = require("../../actions/actionsUI.js");
var actionsInput = require("../../actions/actionsInput.js");
var Button = require("../../ui/Button.jsx");

/**
 * Here allows users to create new events by filling and submitting the form. 
 *
 * @prop isLoggedIn{boolean} current login status
 */
var EventCreator = React.createClass({
  Prototypes: {
    inputResponse: React.PropTypes.string.isRequired,
    showAdvancedEventForm: React.PropTypes.bool.isRequired,
    isLoggedIn: React.PropTypes.bool.isRequired,
    captureEventName: React.PropTypes.func.isRequired,
    captureEventLocation: React.PropTypes.func.isRequired,
    captureEventType: React.PropTypes.func.isRequired,
    captureEventStartTime: React.PropTypes.func.isRequired,
    captureEventEndTime: React.PropTypes.func.isRequired,
    captureEventHost: React.PropTypes.func.isRequired,
    captureEventGuests: React.PropTypes.func.isRequired,
    captureEventMemo: React.PropTypes.func.isRequired,
    processNewEvent: React.PropTypes.func.isRequired
  },

  /* if the user if not loggedin, redirect to the login page */
  componentWillMount: function() {
    if (!this.props.isLoggedIn) {
      Router.browserHistory.push("/");
    }
  },

  /* the render method */
  render: function() {
    var currentTime = new Date().toISOString().slice(0, -1);
    var essential = (
      <div>
        <label for="input-event-name">
          <span> Event name:</span>
          <input id="input-event-name" type="text" placeholder="Bob's birthday party" 
            onChange={this.props.captureEventName}/>
        </label>
        <label for="input-event-type">
          <span> Type:</span>
          <input id="input-event-type" type="text" placeholder="Birthday party"
            onChange={this.props.captureEventType} />
        </label>
        <label for="input-event-location">
          <span> Location:</span>
          <input id="input-event-location" type="text" placeholder="113 Cherry St., Seattle, WA 98104"
            onChange={this.props.captureEventLocation} />
        </label>
        <label for="input-event-date">
          <span> Date:</span>
          <input id="input-event-date" type="date"
            onChange={this.props.captureEventStartTime} />
        </label>
        <label for="input-event-starttime" className="label-time">
          <span> Start time:</span>
          <input id="start-time" className="input-time" type="time"
            onChange={this.props.captureEventStartTime} />
          <input id="end-time" className="input-time" type="time"
            onChange={this.props.captureEventStartTime} />
        </label>
      </div>
    );
    var optional;
    if (this.props.showAdvancedEventForm) {
      optional = (
        <div>
          <hr/> <br/>
          <label duration for="input-duration">
            <span> End time:</span>
            <input id="input-event-endtime" type="datetime-local" value={currentTime}
              onChange={this.props.captureEventEndTime} />
          </label>
          <label for="input-event-host">
            <span> Host:</span>
            <input id="input-event-host" type="text" placeholder="Bob"
              onChange={this.props.captureEventHost} />
          </label>
          <label for="input-event-guests">
            <span> Guest list:</span>
            <input id="input-event-guests" type="text" placeholder="Bill, Tim, Ryan"
              onChange={this.props.captureEventGuests} />
          </label>
          <label for="input-event-memo">
            <span> Memo:</span>
            <input id="input-event-memo" type="text" placeholder="prepare a gift"
              onChange={this.props.captureEventMemo} />
          </label>
        </div>
      );
    }
    return (
      <form>
        <h4>
          New Event
        </h4>

        <div id="head-system-message" className="small-text">
          {this.props.inputResponse}
        </div>

        {essential}
        {optional}

        <label id="show-advanced-checkbox" for="show-advanced">
          <input type="checkbox" id="show-advanced" checked={this.props.showAdvancedEventForm} 
            onClick={this.props.toggleAdvancedEventForm} />
          <span> Show advanced form (optional) </span>
        </label>

        <div className="form-button-list">
          <Button className="form-button" action={this.props.processNewEvent}> Update </Button>
          <Button className="form-button" action={"/events"}> Cancel </Button>
        </div>

      </form>
    );
  }
});

var mapStateToProps = function(state, ownProps) {
  return {
    inputResponse: state.session.inputResponse,
    isLoggedIn: state.session.loginStatus === 1,
    showAdvancedEventForm: state.ui.showAdvancedEventForm
  };
};

var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    toggleAdvancedEventForm: function() {
      return dispatch(actionsUI.toggleAdvancedEventForm());
    },
    captureEventName: function(e) {
      return dispatch(actionsInput.captureEventName(e.target.value));
    },
    captureEventLocation: function(e) {
      return dispatch(actionsInput.captureEventLocation(e.target.value));
    },
    captureEventType: function(e) {
      return dispatch(actionsInput.captureEventType(e.target.value));
    },
    captureEventStartTime: function(e) {
      return dispatch(actionsInput.captureEventStartTime(e.target.value));
    },
    captureEventEndTime: function(e) {
      return dispatch(actionsInput.captureEventEndTime(e.target.value));
    },
    captureEventHost: function(e) {
      return dispatch(actionsInput.captureEventHost(e.target.value));
    },
    captureEventGuests: function(e) {
      return dispatch(actionsInput.captureEventGuests(e.target.value));
    },
    captureEventMemo: function(e) {
      return dispatch(actionsInput.captureEventMemo(e.target.value));
    },
    processNewEvent: function(e) {
      return dispatch(actionsInput.processNewEvent());
    }
  };
};

var EventCreatorContainer = ReactRedux.connect(mapStateToProps, 
                                             mapDispatchToProps)(EventCreator);

/* we only export the top most conponent */
module.exports = EventCreatorContainer;

