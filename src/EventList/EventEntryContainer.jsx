var React = require("react");
var ReactRedux = require("react-redux");
var EventCard = require("./EventCard.jsx");
var EventListActions = require("./EventListActions.js");



/** 
 * this class renders individual entry on the event list
 *
 * @prop event {object} - the event object
 * @prop unhideEventCard {function} - call this function to show the event card
 * @prop hideEventCard {function} - call this function to hide the event card
 */
var EventEntry = React.createClass({
  /* it accepts three props */
  propTypes: {
    event: React.PropTypes.object.isRequired,
    unhideEventCard: React.PropTypes.func.isRequired,
    hideEventCard: React.PropTypes.func.isRequired
  },

  /* the render method */
  render: function() {
    var eventDetail;
    return (
      <li className="event" onClick={this.props.unhideEventCard}>
        <p className="event-name"> 
          {this.props.event.name} 
        </p>
        <p className="event-time"> 
          {new Date(this.props.event.startTime).toLocaleString()} 
        </p>
        <EventCard visible={this.props.EventCardIsVisible} event={this.props.event} 
          closeMe={this.props.hideEventCard} />
      </li>
    );
  },
});



/**
 * This is the container for the component EventEntry
 * (generated using the react-redux through mappings)
 *
 * @prop event {object} - the event object
 *
 */
var mapStateToProps = function(state, ownProps) {
  return {
    EventCardIsVisible: state.currentVisibleEvent === ownProps.event.key,
  };
};
var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    unhideEventCard: function() {
      return dispatch(EventListActions.setActiveEvent(ownProps.event.key));
    },
    hideEventCard: function(e) {
      e.stopPropagation();
      return dispatch(EventListActions.unsetActiveEvent());
    }
  };
};
var EventEntryContainer = ReactRedux.connect(mapStateToProps, 
                                             mapDispatchToProps)(EventEntry);



/* we only export the container */
module.exports = EventEntryContainer;

