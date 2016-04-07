var actionsUI = require("../actions/actionsUI.js")

var SET_ACTIVE_EVENT = actionsUI.SET_ACTIVE_EVENT;
var UNSET_ACTIVE_EVENT = actionsUI.UNSET_ACTIVE_EVENT;
var HIDE_NAV = actionsUI.HIDE_NAV;
var UNHIDE_NAV = actionsUI.UNHIDE_NAV;

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

/**
 * This is the reducer function
 */
var reducerUI = function(state, action) {
  switch (action.type) {
    /* display the nav menu */
    case UNHIDE_NAV:
      return Object.assign({}, state, {showNavMenu, true});
    /* hide the nav menu */
    case HIDE_NAV:
      return Object.assign({}, state, {showNavMenu, false});
    /* display the selected event card */
    case SET_ACTIVE_EVENT:
      return Object.assign({}, state, {activeEvent: action.operand});
    /* hide the event card  */
    case UNSET_ACTIVE_EVENT:
      return Object.assign({}, state, {activeEvent: -1});
    default: 
      return state || Object.assign({}, state, {activeEvent: -1}, {showNavMenu: false});
  }
}

/* export the resultant reducer */
module.exports = reducerUI;

