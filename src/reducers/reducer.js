var Redux = require("redux");
var reducerUI = require("./reducerUI.js")
var reducerSession = require("./reducerSession.js")

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
 *   |   |
 *   |   |--activeEvent (number)
 *   |   |
 *   |   |--showNavMenu (boolean)
 *   |   |
 *   |   |--showAdvancedEventForm (boolean)
 *   |   |
 */

/* this is required by the middleware */
var reducerKey = function(state) {
  return "meet-up-event-planner-key";
}

/* generate the combined reducer */
var reducer = Redux.combineReducers({
    ui: reducerUI,
    session: reducerSession,
    key: reducerKey,
  });

/* export the resultant reducer */
module.exports = reducer;

