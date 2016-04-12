var Redux = require("redux");
//var routerReducer = require("react-router-redux").routerReducer;

//var reducerEventList = require("./reducerEventList.js")
var reducerUI = require("./reducerUI.js")
var reducerSession = require("./reducerSession.js")
var reducerInputLogin = require("./reducerInputLogin.js")

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
 *   |
 *   |-inputs
 *   |   |
 *   |   |-login
 *   |   |  |
 *   |   |  |--uid
 *   |   |  |
 *   |   |  |--passWord
 *   |   |
 */

var reducerKey = function(state) {
  return "meet-up-event-planner-key";
}

/* generate the combined reducer for inputs */
var reducerInputs = Redux.combineReducers({
    login: reducerInputLogin,
  });


/* generate the combined reducer */
var reducer = Redux.combineReducers({
    ui: reducerUI,
    session: reducerSession,
    key: reducerKey,
    inputs: reducerInputs
  });

/* export the resultant reducer */
module.exports = reducer;

