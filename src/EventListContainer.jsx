var React = require("react");
var update = require("react-addons-update");
var utils = require("./utils");

/** 
 * this class keeps the state of all event entries
 *
 * currently it does not accepts any props
 */
var EventListContainer = React.createClass({

  /* initalize all event data */
  getInitialState: function() {
    return {data: null};

    /* retrive the data from the localStorage */
  },
  componentWillMount: function() {
    var _data = JSON.parse(localStorage.getItem("default_user"));
    this.setState({data: _data});
  },
  render: function() {
    return (
      <EventList data={this.state.data}/>
    );
  },
});

/** 
 * this class renders a list of event entries
 *
 * @prop data {array} - an array of event objects
 */
var EventList = React.createClass({
  /* it only accepts one prop */
  propTypes: {
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  },
  render: function() {
    var parsedEvents = this.props.data.slice(0, 5).map(function(item, index) {
      return (
        <EventEntry key={index.toString()} event={item} />
      );
    });
    return (
      <ul className="event-list">
        {parsedEvents}
      </ul>
    );
  },
});

/** 
 * this class renders individual entry on the event list
 *
 * @prop key {string} - the respective key for each event entry (required by virtual dom)
 * @prop event {object} - the event object
 */
var EventEntry = React.createClass({
  /* it accepts two props */
  propTypes: {
    /* key: React.PropTypes.string.isRequired, */
    event: React.PropTypes.object.isRequired,
  },

  /* by default, the event detail is hided */
  getInitialState: function() {
    return {showDetail: false};
  },

  /* this funtion displays the event details */
  displayEventDetail: function() {
    if (!this.state.showDetail) {
      this.setState({showDetail: true});
    }
  },

  /* this funtion hides the event details */
  closeEventDetail: function() {
    if (this.state.showDetail) {
      this.setState({showDetail: false});
    }
  },

  /* the render method */
  render: function() {
    var eventDetail;
    if (this.state.showDetail) {
      eventDetail = (
        <EventBox event={this.props.event} closeMe={this.closeEventDetail} />
      );
    };
    return (
      <li className="event" onClick={this.displayEventDetail}>
        <p className="event-name"> 
          {this.props.event.name} 
        </p>
        <p className="event-time"> 
          {new Date(this.props.event.startTime).toLocaleString()} 
        </p>
        {eventDetail}
      </li>
    );
  },
});

/** 
 * this class renders a modal box showing the event details
 *
 * @prop closeMe {function} - the handler for the close button
 * @prop event {object} - the event object
 */
var EventBox = React.createClass({
  /* it accepts two props */
  propTypes: {
    event: React.PropTypes.object.isRequired,
    closeMe: React.PropTypes.func.isRequired,
  },

  /* the render method */
  render: function() {
    return (
      <div className="modal" onClick={this.props.closeMe}>
        <div className="modal-body" onClick={utils.doNothing}>

          <div className="modal-close" onClick={this.props.closeMe}> &#10006; </div>

          <ModalHeader eventName={this.props.event.name} eventTime={this.props.event.startTime} />
          <ModalContent event={this.props.event} />
          <ModalFooter />

        </div>
      </div>
    );
  },
});

/** 
 * this class renders the header part of the event  modal box
 *
 * @prop eventName {string} - the name of the event
 * @prop eventTime {string} - the starting time of the event
 */
var ModalHeader = React.createClass({
  /* it accepts two props */
  propTypes: {
    eventName: React.PropTypes.string.isRequired,
    eventTime: React.PropTypes.string.isRequired,
  },

  /* the render method */
  render: function() {
    return (
      <div className="modal-header">
        <p className="event-name"> {this.props.eventName} </p>
        <p className="event-time"> {new Date(this.props.eventTime).toLocaleString()} </p>
      </div>
    );
  },
});

/** 
 * this class renders the footer part of the event modal box
 */
var ModalFooter = React.createClass({
  // it does not accept arguments
  propTypes: {
  },
  render: function() {
    return (
      <div className="modal-footer">
        <ul>
          <a type="button" className="event-button" href="#"> <i className="fa fa-trash-o"></i> </a>
          <a type="button" className="event-button" href="#"> <i className="fa fa-pencil"></i></a>
        </ul>
      </div>
    );
  },
});

/**
 * this class renders the main content of the event modal box
 *
 * @prop event {object} - the event object
 *
 */
var ModalContent = React.createClass({
  /* it accepts only one prop */
  propTypes: {
    event: React.PropTypes.object.isRequired,
  },

  /* the render method */
  render: function() {
    return (
      <div className="modal-content">
        <div className="event-attribute"> 
          <p className="event-label"> Location: </p>
          <p className="event-value"> {this.props.event.location} </p>
        </div>

        <div className="event-attribute"> 
          <p className="event-label"> End time: </p>
          <p className="event-value"> {new Date(this.props.event.endTime).toLocaleString()} </p>
        </div>

        <div className="event-attribute"> 
          <p className="event-label"> Host: </p>
          <p className="event-value"> {this.props.event.host} </p>
        </div>

        <div className="event-attribute"> 
          <p className="event-label"> Type: </p>
          <p className="event-value"> {this.props.event.type} </p>
        </div>

        <div className="event-attribute"> 
          <p className="event-label"> Guests: </p>
          <p className="event-value"> {this.props.event.guest} </p>
        </div>
      </div>
    );
  },
})

/* we only export the top most conponent */
module.exports = EventListContainer;

