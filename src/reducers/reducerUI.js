var actionsUI = require("../actions/actionsUI.js")

var SET_ACTIVE_EVENT = actionsUI.SET_ACTIVE_EVENT;
var UNSET_ACTIVE_EVENT = actionsUI.UNSET_ACTIVE_EVENT;
var HIDE_NAVMENU = actionsUI.HIDE_NAVMENU;
var UNHIDE_NAVMENU = actionsUI.UNHIDE_NAVMENU;

/**
 * This is the reducer function
 */
var reducerUI = function(state, action) {
  switch (action.type) {
    /* display the nav menu */
    case UNHIDE_NAVMENU:
      if (!state.showNavMenu) {
        return Object.assign({}, state, {showNavMenu: true});
      }
      return state;
    /* hide the nav menu */
    case HIDE_NAVMENU:
      if (state.showNavMenu) {
        return Object.assign({}, state, {showNavMenu: false});
      }
      return state;
    /* display the selected event card */
    case SET_ACTIVE_EVENT:
      if (!state.activeEvent || state.activeEvent < 0) {
      return Object.assign({}, state, {activeEvent: action.operand});
      }
      return state;
    /* hide the event card  */
    case UNSET_ACTIVE_EVENT:
      if (state.activeEvent > 0) {
        return Object.assign({}, state, {activeEvent: -1});
      }
      return state;
    default: 
      return state || Object.assign({}, state, {activeEvent: -1}, {showNavMenu: false});
  }
}

/* export the resultant reducer */
module.exports = reducerUI;

