var authenticationManager = require("../utils/authenticationManager.js");
var storageManager = require("../utils/storageManager.js");

/*
 * Layout of the store (for a reference)
 *
 * Store
 *   |
 *   |--session
 *   |   |
 *   |   |--loginStatus
 *   |   |
 *   |   |--userProfile
 *   |   |
 *   |   |--eventList[]
 *   |   |
 *   |   |--loginResponse
 *   |   |
 *   |   |--inputUid
 *   |   |  
 *   |   |--inputPassword  
 *   |    
 *   |
 *   |--ui
 *   |   |
 *   |   |--activeEvent (number)
 *   |   |
 *   |   |--showNavMenu (boolean)
 *   |
 */

var defaultState = {
  loginStatus: 0, 
  userProfile: null, 
  eventList: [],
  loginResponse: "",
  inputUid: "",
  inputPassword: ""
};

var mask = {
  loginResponse: "",
};

var doLogin = function(uid) {
  try {
    var userData = storageManager.getUserData(uid);
  } catch(err) {
    throw "Cannot retrive user data from the local storage.";
  }
  var eventList = userData.eventList;
  delete userData.eventList;
  var newState = Object.assign({}, defaultState, {loginStatus: 1, userProfile: userData,  eventList: eventList});
  /* here we index each event entry */
  newState.eventList.forEach(function(item, index) {
    item.key = Date.now() - index * 3;
  });
  return newState;
};

var reducer = function(state, action) {

  switch (action.type) {

    case "RESET_SESSION":
      if (action.operand) {
        Object.assign(action.operand, mask); // unset system response
        return action.operand;
      }
      return state;


    case "LOGIN_AS_TRIAL_USER": 
      if (!state.loginStatus || state.loginStatus !== 1) {
        return doLogin("trial");
      }
      return state;


    case "DO_LOGOUT":
      if (state.loginStatus && state.loginStatus === 1) {
        return defaultState;
      }
      return state;


    case "CAPTURE_LOGIN_UID":
      return Object.assign({}, state, {inputUid: action.operand});


    case "CAPTURE_LOGIN_PASSWORD":
      return Object.assign({}, state, {inputPassword: action.operand});


    case "PROCESS_INPUT_LOGIN":
      var result = authenticationManager.authenticate(state.inputUid, state.inputPassword);
      if (result !== 0) {
        return Object.assign({}, state, {loginResponse: authenticationManager.messages[result]});
      }
      return doLogin(state.inputUid);


    default:
      return state || defaultState;

  }
};

/* export the resultant reducer */
module.exports = reducer;


