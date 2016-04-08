var ReactRedux = require("react-redux");
var React = require("react");
var EventEntryContainer = require("./EventEntryContainer.jsx");
var Router = require("react-router");



/** 
 * this class renders a list of event entries
 *
 * @prop data {array} - an array of event objects
 */
var EventList = React.createClass({
  /* it only accepts one prop */
  propTypes: {
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    isLoggedIn: React.PropTypes.bool.isRequired,
  },
  componentWillMount: function() {
    if (!this.props.isLoggedIn) {
      Router.browserHistory.push("/");
    }
  },
  render: function() {
    var parsedEvents = this.props.data.slice(0, 5).map(function(item) {
      return (
        <EventEntryContainer key={item.key} event={item} />
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
 * This is the container for the component EventList
 * (generated using the react-redux through mappings)
 *
 * it does not take any props.
 *
 */
var mapStateToProps = function(state, ownProps) {
  return {
    data: state.eventList,
    isLoggedIn: state.session.loginStatus === 1
  };
};
var EventListContainer = ReactRedux.connect(mapStateToProps)(EventList);

/* we only export the outer container */
module.exports = EventListContainer;

