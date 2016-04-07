var Redux = require("redux");

var reducerEventList = require("./reducerEventList.js")
var reducerUI = require("./reducerUI.js")

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


/* generate the combined reducer */
var reducer = Redux.combineReducers({
    eventList: reducerEventList, 
    ui: reducerUI
  });

/* export the resultant reducer */
module.exports = reducer;

