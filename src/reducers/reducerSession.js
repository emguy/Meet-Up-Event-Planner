var actionsSession = require("../actions/actionsSession.js")
var SET_LOGIN_STATUS = actionsSession.SET_LOGIN_STATUS;
var UNSET_LOGIN_STATUS = actionsSession.UNSET_LOGIN_STATUS;

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
      if (!state.loginStatus || state.loginStatus === 0) {
        return Object.assign({}, state, {loginStatus: 1, uid: action.operand});
      }
      return state;
    case UNSET_LOGIN_STATUS:
      if (state.loginStatus && state.loginStatus === 1) {
        return Object.assign({}, {loginStatus: 0, uid: undefined, userName: undefined});
      }
      return state;
    default:
      return state || Object.assign({}, {loginStatus: 0}, {uid: "default", userName: "Tom"});
  }
};

/* export the resultant reducer */
module.exports = reducerSession;

