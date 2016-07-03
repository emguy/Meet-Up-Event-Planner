var React = require('react');
var Router = require('react-router');
var ReactRedux = require('react-redux');
var actionsSession = require('../../actions/actionsSession.js');
var actionsUI = require('../../actions/actionsUI.js');
var actionsInput = require('../../actions/actionsInput.js');
var Button = require('../../ui/Button.jsx');

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
    clearEventForm: React.PropTypes.func.isRequired,
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
    captureEventDate: React.PropTypes.func.isRequired,

    doNewEvent: React.PropTypes.func.isRequired,

    inputEventName: React.PropTypes.string.isRequired,
    inputEventDate: React.PropTypes.string.isRequired,
    inputEventLocation: React.PropTypes.string.isRequired,
    inputEventType: React.PropTypes.string.isRequired,
    inputEventStartTime: React.PropTypes.string.isRequired,
    inputEventEndTime: React.PropTypes.string.isRequired,
    inputEventHost: React.PropTypes.string.isRequired,
    inputEventGuests: React.PropTypes.string.isRequired,
    inputEventMemo: React.PropTypes.string.isRequired,
  },

  /* if the user if not loggedin, redirect to the login page */
  componentWillMount: function() {
    if (!this.props.isLoggedIn) {
      Router.browserHistory.push('/');
    }
    this.props.clearEventForm();
  },

  /* if the user if not loggedin, redirect to the login page */
  componentDidMount: function() {
    this.props.clearEventForm();
  },

  /* the render method */
  render: function() {
    var currentTime = new Date().toISOString().slice(0, -1);

    var formTitle = 'New Event';

    var page = [];

    if (this.props.formPageNumber === 0) {
      page[0] = (
        <div>
          <label htmlFor='input-event-name'>
            <span> Event name: </span>
            <input id='input-event-name' type='text' placeholder="Bob's birthday party" 
              onChange={this.props.captureEventName} value={this.props.inputEventName} />
          </label>
          <label htmlFor='input-event-type'>
            <span> Type: </span>
            <input id='input-event-type' type='text' placeholder='Birthday party'
              onChange={this.props.captureEventType} value={this.props.inputEventType} />
          </label>
          <label htmlFor='input-event-location'>
            <span> Location: </span>
            <input id='input-event-location' type='text' placeholder='113 Cherry St., Seattle, WA 98104'
              onChange={this.props.captureEventLocation} value={this.props.inputEventLocation} />
          </label>
        </div>
      ); 
    } else {
      page[0] = (
        <div>
          <div className='entry'>
            <span className='name'> Event name: </span>
            <span className='value'> {this.props.inputEventName} </span>
          </div>
          <div className='entry'>
            <span className='name'> Type: </span>
            <span className='value'> {this.props.inputEventType} </span>
          </div>
          <div className='entry'>
            <span className='name'> Location: </span>
            <span className='value'> {this.props.inputEventLocation} </span>
          </div>
        </div>
      ); 
    }

    if (this.props.formPageNumber === 1) {
      page[1] = (
        <div>
          <hr />
          <label htmlFor='input-event-date'>
            <span> Date:</span>
            <input id='input-event-date' type='date' value={this.props.inputEventDate}
              onChange={this.props.captureEventDate} />
          </label>
          <label htmlFor='input-event-starttime' className='label-time'>
            <span> Start time:</span>
            <input id='input-event-starttime' className='input-time' type='time'
              onChange={this.props.captureEventStartTime} value={this.props.inputEventStartTime} />
          </label>
          <label htmlFor='input-event-endtime' className='label-time'>
            <span> End time:</span>
            <input id='input-event-endtime' className='input-time' type='time'
              onChange={this.props.captureEventEndTime} value={this.props.inputEventEndTime} />
          </label>
        </div>
      );
    } else if (this.props.formPageNumber > 1) {
      page[1] = (
        <div>
          <hr />
          <div className='entry'>
            <span className='name'> Date: </span>
            <span> {this.props.inputEventDate} </span>
          </div>
          <div className='entry'>
            <span className='name'> Start time: </span>
            <span className='value'> {this.props.inputEventStartTime} </span>
          </div>
          <div className='entry'>
            <span className='name'> End time: </span>
            <span className='value'> {this.props.inputEventEndTime} </span>
          </div>
        </div>
      );
    }

    if (this.props.formPageNumber === 2) {
      page[2] = (
        <div>
          <hr />
          <label htmlFor='input-event-host'>
            <span> Host:</span>
            <input id='input-event-host' type='text' placeholder='Bob'
              onChange={this.props.captureEventHost}  readOnly={this.props.formPageNumber > 2}/>
          </label>
          <label htmlFor='input-event-guests'>
            <span> Guest list:</span>
            <input id='input-event-guests' type='text' placeholder='Bill, Tim, Ryan'
              onChange={this.props.captureEventGuests}  readOnly={this.props.formPageNumber > 2}/>
          </label>
        </div>
      );
    } else if (this.props.formPageNumber > 2) {
      page[2] = (
        <div>
          <hr />
          <div className='entry'>
            <span className='name'> Host: </span>
            <span className='value'> {this.props.inputEventHost} </span>
          </div>
          <div className='entry'>
            <span className='name'> Guest list: </span>
            <span className='value'> {this.props.inputEventGuests} </span>
          </div>
        </div>
      );
    }

    if (this.props.formPageNumber > 2) {
      page[3] = (
        <div>
          <hr />
          <label htmlFor='input-event-additional'>
            <span> Additional Infomation:</span>
            <input id='input-event-host' type='textbox' placeholder='Bob'
              onChange={this.props.captureEventMemo} />
          </label>
        </div>
      );
    }

    var controlButtons;
    switch(this.props.formPageNumber) {
      case 0: 
        controlButtons = (
          <div className='form-button-list'>
            <Button className='form-button' action={this.props.incPageNumber}> Next </Button>
            <Button className='form-button' action={'/events'}> Cancel </Button>
          </div>
        );
        break;
      case 1: 
        controlButtons = (
          <div className='form-button-list'>
            <Button className='form-button' action={this.props.decPageNumber}> Prev </Button>
            <Button className='form-button' action={this.props.incPageNumber}> Next </Button>
            <Button className='form-button' action={'/events'}> Cancel </Button>
          </div>
        );
        break;
      case 2: 
        controlButtons = (
          <div className='form-button-list'>
            <Button className='form-button' action={this.props.decPageNumber}> Prev </Button>
            <Button className='form-button' action={this.props.incPageNumber}> Next </Button>
            <Button className='form-button' action={'/events'}> Cancel </Button>
          </div>
        );
        break;
      case 3: 
        controlButtons = (
          <div className='form-button-list'>
            <Button className='form-button' action={this.props.decPageNumber}> Prev </Button>
            <Button className='form-button' action={this.props.doNewEvent}> Finish </Button>
            <Button className='form-button' action={'/events'}> Cancel </Button>
          </div>
        );
        break;
    }


    return (
      <form>
        <h4>
          {formTitle}
        </h4>

        <div id='head-system-message' className='small-text'>
          {this.props.inputResponse}
        </div>

        {page[0]}
        {page[1]}
        {page[2]}
        {page[3]}

        {controlButtons}

      </form>
    );
  }
});

var mapStateToProps = function(state, ownProps) {
  return {
    formPageNumber: state.session.formPageNumber,
    inputResponse: state.session.inputResponse,
    isLoggedIn: state.session.loginStatus === 1,
    inputEventName: state.session.inputEventName,
    inputEventLocation: state.session.inputEventLocation,
    inputEventType: state.session.inputEventType,
    inputEventStartTime: state.session.inputEventStartTime, 
    inputEventEndTime: state.session.inputEventEndTime,
    inputEventHost: state.session.inputEventHost,
    inputEventGuests: state.session.inputEventGuests,
    inputEventDate: state.session.inputEventDate,
    inputEventMemo: state.session.inputEventMemo
  };
};

var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    doNewEvent: function() {
      return dispatch(actionsSession.doNewEvent());
    },
    clearEventForm: function() {
      return dispatch(actionsInput.clearEventForm());
    },
    incPageNumber: function() {
      return dispatch(actionsUI.incFormPageNumber());
    },
    decPageNumber: function() {
      return dispatch(actionsUI.decFormPageNumber());
    },
    captureEventName: function(e) {
      return dispatch(actionsInput.captureEventName(e.target.value));
    },
    captureEventDate: function(e) {
      return dispatch(actionsInput.captureEventDate(e.target.value));
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

