var React = require("react");
var update = require("react-addons-update");

/** 
 * this class keeps the state of all event entries
 *
 * currently it does not accepts any props
 */
var EventListContainer = React.createClass({

  // initalize all event data
  getInitialState: function() {
    return {data: null};

  // retrive the data from the localStorage
  },
  componentWillMount: function() {
    var _data = JSON.parse(localStorage.getItem("default_user"));
    this.setState({data: _data});
  },
  render: function() {
    return (
      <div className="row">
        <EventList data={this.state.data}/>
      </div>
    );
  },
});

/** 
 * this class renders a list of event entries
 *
 * @prop data {array} - an array of event objects
 */
var EventList = React.createClass({
  // it only accepts one prop 
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
      <ul className="event-list col-md-6 col-md-offset-3">
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
  // it accepts two props
  propTypes: {
    //key: React.PropTypes.string.isRequired,
    event: React.PropTypes.object.isRequired,
  },

  // by default, the event detail is hided
  getInitialState: function() {
    return {showDetail: false};
  },

  // this funtion displays the event details
  displayEventDetail: function() {
    if (!this.state.showDetail) {
      this.setState({showDetail: true});
    }
  },

  // this funtion hides the event details
  closeEventDetail: function() {
    if (this.state.showDetail) {
      this.setState({showDetail: false});
    }
  },

  // the render method
  render: function() {
    var eventDetail;
    if (this.state.showDetail) {
      eventDetail = (
        <EventDetail event={this.props.event} closeMe={this.closeEventDetail} />
      );
    };
    return (
      <li className="event row" onClick={this.displayEventDetail}>
        <p className="event-name col-md-8"> 
          {this.props.event.name} 
        </p>
        <p className="event-time col-md-4"> 
          {new Date(this.props.event.startTime).toLocaleString()} 
        </p>
        {eventDetail}
      </li>
    );
  },
});


/** 
 * this class renders a modal dialog showing the event details
 *
 * @prop closeMe {function} - the handler for the close button
 * @prop event {object} - the event object
 */
var EventDetail = React.createClass({
  // it accepts two props
  propTypes: {
    closeMe: React.PropTypes.func.isRequired,
    event: React.PropTypes.object.isRequired,
  },

  // the render method
  render: function() {
    return (
      <div className="modal">

        <div className={"modal-content"}>

          <div className="close"> 
            <span className="glyphicon glyphicon-remove" aria-hidden="true" onClick={this.props.closeMe}> </span>
          </div>

          <p className="event-name"> {this.props.event.name} </p>
          <p className="event-time"> {new Date(this.props.event.startTime).toLocaleString()} </p>

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
      </div>
    );
  },
});

// we only export the top most conponent
module.exports = EventListContainer;


