var EventListActions = require("../actions/actionsEventList.js")
var RESET_EVENTLIST = EventListActions.RESET_EVENTLIST;

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

/* export the resultant reducer */
module.exports = reducerEventList;

