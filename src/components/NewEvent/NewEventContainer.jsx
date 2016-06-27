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
    formPageNumber: React.PropTypes.number.isRequired,
    incFormPageNumber: React.PropTypes.func.isRequired,
    decFormPageNumber: React.PropTypes.func.isRequired,
    inputResponse: React.PropTypes.string.isRequired,
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

    var formTitle = [];
    formTitle[0] = "New Event (Title)";
    formTitle[1] = "New Event (Date and Time)";
    formTitle[2] = "New Event (Host and Guests)";
    formTitle[3] = "New Event (Additional Infomation)";

    var page = [];
    page[0] = (
      <div>
        <label htmlFor="input-event-name">
          <span> Event name:</span>
          <input id="input-event-name" type="text" placeholder="Bob's birthday party" 
            onChange={this.props.captureEventName}/>
        </label>
        <label htmlFor="input-event-type">
          <span> Type:</span>
          <input id="input-event-type" type="text" placeholder="Birthday party"
            onChange={this.props.captureEventType} />
        </label>
        <label htmlFor="input-event-location">
          <span> Location:</span>
          <input id="input-event-location" type="text" placeholder="113 Cherry St., Seattle, WA 98104"
            onChange={this.props.captureEventLocation} />
        </label>
      </div>
    );
    page[1] = (
      <div>
        <label htmlFor="input-event-date">
          <span> Date:</span>
          <input id="input-event-date" type="date"
            onChange={this.props.captureEventStartTime} />
        </label>
        <label htmlFor="input-event-starttime" className="label-time">
          <span> Start time:</span>
          <input id="input-event-starttime" className="input-time" type="time"
            onChange={this.props.captureEventStartTime} />
        </label>
        <label htmlFor="input-event-endtime" className="label-time">
          <span> End time:</span>
          <input id="input-event-endtime" className="input-time" type="time"
            onChange={this.props.captureEventStartTime} />
        </label>
      </div>
    );
    page[2] = (
      <div>
        <label htmlFor="input-event-host">
          <span> Host:</span>
          <input id="input-event-host" type="text" placeholder="Bob"
            onChange={this.props.captureEventHost} />
        </label>
        <label htmlFor="input-event-guests">
          <span> Guest list:</span>
          <input id="input-event-guests" type="text" placeholder="Bill, Tim, Ryan"
            onChange={this.props.captureEventGuests} />
        </label>
      </div>
    );
    page[3] = (
      <div>
        <label htmlFor="input-event-additional">
          <span> Additional Infomation:</span>
          <input id="input-event-host" type="textbox" placeholder="Bob"
            onChange={this.props.captureEventMemo} />
        </label>
      </div>
    );

    var controlButtons = [];

    controlButtons[0] = (
      <div className="form-button-list">
        <Button className="form-button" action={this.props.incPageNumber}> Next </Button>
        <Button className="form-button" action={"/events"}> Cancel </Button>
      </div>
    );

    controlButtons[1] = (
      <div className="form-button-list">
        <Button className="form-button" action={this.props.decPageNumber}> Prev </Button>
        <Button className="form-button" action={this.props.incPageNumber}> Next </Button>
        <Button className="form-button" action={"/events"}> Cancel </Button>
      </div>
    );

    controlButtons[2] = (
      <div className="form-button-list">
        <Button className="form-button" action={this.props.decPageNumber}> Prev </Button>
        <Button className="form-button" action={this.props.processNewEvent}> Finish </Button>
        <Button className="form-button" action={this.props.incPageNumber}> Optional </Button>
        <Button className="form-button" action={"/events"}> Cancel </Button>
      </div>
    );

    controlButtons[3] = (
      <div className="form-button-list">
        <Button className="form-button" action={this.props.decPageNumber}> Prev </Button>
        <Button className="form-button" action={this.props.processNewEvent}> Finish </Button>
        <Button className="form-button" action={"/events"}> Cancel </Button>
      </div>
    );

    return (
      <form>
        <h4>
          {formTitle[this.props.formPageNumber]}
        </h4>

        <div id="head-system-message" className="small-text">
          {this.props.inputResponse}
        </div>

        {page[this.props.formPageNumber]}

        {controlButtons[this.props.formPageNumber]}

      </form>
    );
  }
});

var mapStateToProps = function(state, ownProps) {
  return {
    formPageNumber: state.session.formPageNumber,
    inputResponse: state.session.inputResponse,
    isLoggedIn: state.session.loginStatus === 1
  };
};

var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    incPageNumber: function() {
      return dispatch(actionsUI.incFormPageNumber());
    },
    decPageNumber: function() {
      return dispatch(actionsUI.decFormPageNumber());
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

