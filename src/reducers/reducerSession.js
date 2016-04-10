var actionsSession = require("../actions/actionsSession.js")
var SET_LOGIN = actionsSession.SET_LOGIN;
var UNSET_LOGIN = actionsSession.UNSET_LOGIN;
var RESET_SESSION = actionsSession.RESET_SESSION;

var storageManager = require("../utils/storageManager.js");

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

var reducerSession = function(state, action) {
  switch (action.type) {
    case RESET_SESSION:
      if (action.operand) {
        return action.operand;
      }
      return state;
    case SET_LOGIN: 
      if (!state.loginStatus || state.loginStatus !== 1) {
        try {
          var userData = storageManager.getUserData(action.operand);
        } catch(err) {
          console.error("[ERROR] cannot retrive user data from the local storage.");
        }
        var newState = Object.assign({}, state, {loginStatus: 1, 
                             uid: userData.uid, 
                             userName: userData.userName, 
                             eventList: userData.eventList});
        newState.eventList.forEach(function(item, index) {
          item.key = Date.now() - index * 3;
        });
        return newState;
      }
      return state;
    case UNSET_LOGIN:
      console.log("-------");
      if (state.loginStatus && state.loginStatus === 1) {
        return Object.assign({}, {loginStatus: 0, uid: null, userName: null, eventList: null});
      }
      return state;
    default:
      return state || Object.assign({}, {loginStatus: 0, uid: null, userName: null, eventList: null});
  }
};

/* export the resultant reducer */
module.exports = reducerSession;

