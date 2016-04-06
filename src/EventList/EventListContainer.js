var ReactRedux = require("react-redux");
var React = require("react");
var EventList = require("./EventList.jsx");

var mapStateToProps = function(state, ownProps) {
  return {
    data: state.eventList,
  };
};

var EventListContainer = ReactRedux.connect(mapStateToProps)(EventList);

module.exports = EventListContainer;
