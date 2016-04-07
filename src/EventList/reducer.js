var Redux = require("redux");
var EventListActions = require("./EventListActions.js")

var RESET_EVENTLIST = EventListActions.RESET_EVENTLIST;
var SET_ACTIVE_EVENT = EventListActions.SET_ACTIVE_EVENT;
var UNSET_ACTIVE_EVENT = EventListActions.UNSET_ACTIVE_EVENT;

var reducerEventList = function(state, action) {
  switch (action.type) {
    /* clear or prefill the user's event list */
    case RESET_EVENTLIST: 
      if (!action.operand) {
        return [];
      }
      return action.operand.map(function(item, index) {
        item.key = Date.now() - index * 3; // generate unique keys 
        return item;
      });
    default:
      return state || [];
  }
};

var reducerCurrentVisibleEvent = function(state, action) {
  switch (action.type) {
    /* display the selected event card */
    case SET_ACTIVE_EVENT:
      return action.operand || state;
    /* hide the event card  */
    case UNSET_ACTIVE_EVENT:
      console.log(state);
      return -1;
    default: 
      return state || -1;
  }
}

/* generate the combined reducer */
reducerEventList = Redux.combineReducers({
    eventList: reducerEventList, 
    currentVisibleEvent: reducerCurrentVisibleEvent
  });

/* export the resultant reducer */
module.exports = reducerEventList;

