var actionsUI = require("../actions/actionsUI.js")

/**
 * This is the reducer function
 */
var reducerUI = function(state, action) {
  switch (action.type) {

    /* display the nav menu */
    case "UNHIDE_NAVMENU":
      if (!state.showNavMenu) {
        return Object.assign({}, state, {showNavMenu: true});
      }
      return state;

    /* hide the nav menu */
    case "HIDE_NAVMENU":
      if (state.showNavMenu) {
        return Object.assign({}, state, {showNavMenu: false});
      }
      return state;

    /* display the selected event card */
    case "SET_ACTIVE_EVENT":
      if (!state.activeEvent || state.activeEvent < 0) {
      return Object.assign({}, state, {activeEvent: action.operand});
      }
      return state;

    /* hide the event card  */
    case "UNSET_ACTIVE_EVENT":
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

