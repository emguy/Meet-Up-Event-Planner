var RESET_EVENTLIST = require("./EventListActions.js").RESET_EVENTLIST;

var eventList = function(state, action) {
  switch (action.type) {
    case RESET_EVENTLIST:
      return action.data;
    default:
      return state || [];
  }
};

module.exports = eventList;
