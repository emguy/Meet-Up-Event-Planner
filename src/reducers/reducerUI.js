/**
 * This is the reducer function
 */

var objectAssign = require("../utils/utils.js").objectAssign;

var defaultState = {
  showNavMenu: false,
  showDeleteConfirmation: false,
  showAdvancedEventForm: false,
};

var reducerUI = function(state, action) {
  switch (action.type) {

    /* display the nav menu */
    case "UNHIDE_NAVMENU":
      if (!state.showNavMenu) {
        return objectAssign({}, state, {showNavMenu: true});
      }
      return state;

    /* hide the nav menu */
    case "HIDE_NAVMENU":
      if (state.showNavMenu) {
        return objectAssign({}, state, {showNavMenu: false});
      }
      return state;

    default: 
      return state || defaultState;
  }
}

/* export the resultant reducer */
module.exports = reducerUI;

