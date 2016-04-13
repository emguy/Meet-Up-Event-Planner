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

var defaultInputs = {
  inputUid: "",
  inputPassword: "",
  inputEventName: "",
  inputEventLocation: "",
  inputEventType: "",
  inputEventStartTime: "",
  inputEventEndTime: "",
  inputEventHost: "",
  inputEventGuests: "",
  inputEventMemo: ""
};

var defaultState = {
  loginStatus: 0, 
  userProfile: null, 
  eventList: [],
  inputResponse: "",
  loginResponse: ""
};

Object.assign(defaultState, defaultInputs);

var mask = {
  inputResponse: "",
  loginResponse: ""
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

    case "CAPTURE_EVENT_NAME":
      console.log(action.operand);
      return Object.assign({}, state, {inputEventName: action.operand});

    case "CAPTURE_EVENT_LOCATION":
      return Object.assign({}, state, {inputEventLocation: action.operand});

    case "CAPTURE_EVENT_TYPE":
      return Object.assign({}, state, {inputEventType: action.operand});

    case "CAPTURE_EVENT_STARTTIME":
      return Object.assign({}, state, {inputEventStartTime: action.operand});

    case "CAPTURE_EVENT_ENDTIME":
      return Object.assign({}, state, {inputEventEndTime: action.operand});

    case "CAPTURE_EVENT_HOST":
      return Object.assign({}, state, {inputEventHost: action.operand});

    case "CAPTURE_EVENT_GUESTS":
      return Object.assign({}, state, {inputEventGuests: action.operand});

    case "CAPTURE_EVENT_MEMO":
      return Object.assign({}, state, {inputEventMemo: action.operand});

    case "CLEAR_EVENT_FORM":
      return Object.assign({}, state, defaultInputs);

    case "PROCESS_INPUT_LOGIN":
      var result = authenticationManager.authenticate(state.inputUid, state.inputPassword);
      if (result !== 0) {
        return Object.assign({}, state, {loginResponse: authenticationManager.messages[result]});
      }
      return doLogin(state.inputUid);

    case "PROCESS_NEW_EVENT":
      console.log(state);
      return Object.assign({}, state, {inputResponse: state.inputEventName});

    default:
      return state || defaultState;

  }
};

/* export the resultant reducer */
module.exports = reducer;


