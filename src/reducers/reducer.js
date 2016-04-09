var Redux = require("redux");
//var routerReducer = require("react-router-redux").routerReducer;

//var reducerEventList = require("./reducerEventList.js")
var reducerUI = require("./reducerUI.js")
var reducerSession = require("./reducerSession.js")

/*
 * Layout of the store (for a reference)
 *
 * Store
 *   |
 *   |--session
 *   |   |
 *   |   |--loginStatus (number)
 *   |   |
 *   |   |--uid (string)
 *   |   |
 *   |   |--userName (string)
 *   |   |
 *   |   |--eventList (array of event objects)
 *   |
 *   |--eventList (array of event objects)
 *   |
 *   |--ui
 *       |
 *       |--activeEvent (number)
 *       |
 *       |--showNavMenu (boolean)
 *
 */


var reducerKey = function(state) {
  return "meet-up-event-planner-key";
}

/* generate the combined reducer */
var reducer = Redux.combineReducers({
    ui: reducerUI,
    session: reducerSession,
    key: reducerKey
  });

/* export the resultant reducer */
module.exports = reducer;

