var React = require('react');
var actionsSession = require('../../actions/actionsSession.js');
var ReactRedux = require('react-redux');
var EventCard = require('./EventCard.jsx');
var setActiveEvent = require('../../actions/actionsUI.js').setActiveEvent;
var unsetActiveEvent = require('../../actions/actionsUI.js').unsetActiveEvent;



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
    hideEventCard: React.PropTypes.func.isRequired,
    doDeleteEvent: React.PropTypes.func.isRequired
  },

  /* the render method */
  render: function() {
    var eventDetail;
    return (
      <li className='event' onClick={this.props.unhideEventCard}>
        <p className='event-name'> 
          {this.props.event.name} 
        </p>
        <p className='event-time'> 
          {new Date(this.props.event.startTime).toLocaleString()} 
        </p>
        <EventCard visible={this.props.EventCardIsVisible} event={this.props.event} 
          closeMe={this.props.hideEventCard} doDeleteEvent={this.props.doDeleteEvent.bind(null, this.props.index)} />
      </li>
    );
  }
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
    EventCardIsVisible: state.session.activeEvent === ownProps.event.key,
  };
};
var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    doDeleteEvent: function(index) {
      return dispatch(actionsSession.doDeleteEvent(index));
    },
    unhideEventCard: function(e) {
      e.stopPropagation();
      return dispatch(setActiveEvent(ownProps.event.key));
    },
    hideEventCard: function(e) {
      e.stopPropagation();
      return dispatch(unsetActiveEvent());
    }
  };
};
var EventEntryContainer = ReactRedux.connect(mapStateToProps, 
                                             mapDispatchToProps)(EventEntry);



/* we only export the container */
module.exports = EventEntryContainer;

