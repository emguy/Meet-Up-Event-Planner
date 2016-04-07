var actionsEventList = require("../actions/actionsEventList.js")
var RESET_EVENTLIST = EventListActions.RESET_EVENTLIST;

var actionsMain = require("../actions/actionsMain.js");
var UNSET_LOGIN_STATUS = require(../actions/actionsMain.js);

/*
 * Layout of the store (for a reference)
 *
 * Store
 *   |
 *   |--session
 *   |   |
 *   |   |--loginStatus
 *   |   |
 *   |   |--uid
 *   |   |
 *   |   |--userName
 *   |
 *   |--eventList (array)
 *   |
 *   |--ui
 *       |
 *       |--activeEvent (number)
 *       |
 *       |--showNavMenu (boolean)
 *
 */

var reducerSession = function(state, action) {
  switch (action.type) {
    case SET_LOGIN_STATUS: 
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

