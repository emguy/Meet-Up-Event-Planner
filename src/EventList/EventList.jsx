var React = require("react");
var EventCard = require("./EventCard.jsx");

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
 * @prop key {string} - the respective key for each event entry (required)
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
    return {EventBoxIsVisible: false};
  },

  /* this funtion displays the event details */
  unhideDetail: function() {
    if (!this.state.EventBoxIsVisible) {
      this.setState({EventBoxIsVisible: true});
    }
  },

  /* this funtion hides the event details */
  hideDetail: function() {
    if (this.state.EventBoxIsVisible) {
      this.setState({EventBoxIsVisible: false});
    }
  },

  /* the render method */
  render: function() {
    var eventDetail;
    return (
      <li className="event" onClick={this.unhideDetail}>
        <p className="event-name"> 
          {this.props.event.name} 
        </p>
        <p className="event-time"> 
          {new Date(this.props.event.startTime).toLocaleString()} 
        </p>
        <EventCard visible={this.state.EventBoxIsVisible} event={this.props.event} 
          closeMe={this.hideDetail} />
      </li>
    );
  },
});



/* we only export the top most conponent */
module.exports = EventList;

