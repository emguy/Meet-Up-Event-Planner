var authenticationManager = require("../utils/authenticationManager.js");
var storageManager = require("../utils/storageManager.js");

/* this is equivalent to Object.assign() in ES6  */
var objectAssign = require("../utils/utils.js").objectAssign;

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
  formPageNumber: 1,
  inputUid: "",
  inputPassword: "",
  inputRegUid: "",
  inputRegPassword1: "",
  inputRegPassword2: "",
  inputRegEmail: "",
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

defaultState = objectAssign(defaultState, defaultInputs);

var mask = {
  inputResponse: "",
  loginResponse: ""
};

var doLogin = function(uid) {
  try {
    var userData = storageManager.getUserData(uid);
    console.log("user data is", userData);
  } catch(err) {
    throw "Cannot retrive user data from the local storage.";
  }
  var eventList = userData.eventList;
  delete userData.eventList;
  var newState = objectAssign({}, defaultState, {loginStatus: 1, userProfile: userData,  eventList: eventList});
  /* here we uniquely index each event entry */
  newState.eventList.forEach(function(item, index) {
    item.key = Date.now() - index * 3;
  });
  return newState;
};

var reducer = function(state, action) {

  switch (action.type) {

    case "RESET_SESSION":
      if (action.operand) {
        objectAssign(action.operand, mask); // unset system response
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
      return objectAssign({}, state, {inputUid: action.operand});

    case "CAPTURE_LOGIN_PASSWORD":
      return objectAssign({}, state, {inputPassword: action.operand});

    case "CAPTURE_EVENT_NAME":
      console.log(action.operand);
      return objectAssign({}, state, {inputEventName: action.operand});

    case "CAPTURE_EVENT_LOCATION":
      return objectAssign({}, state, {inputEventLocation: action.operand});

    case "CAPTURE_EVENT_TYPE":
      return objectAssign({}, state, {inputEventType: action.operand});

    case "CAPTURE_EVENT_STARTTIME":
      return objectAssign({}, state, {inputEventStartTime: action.operand});

    case "CAPTURE_EVENT_ENDTIME":
      return objectAssign({}, state, {inputEventEndTime: action.operand});

    case "CAPTURE_EVENT_HOST":
      return objectAssign({}, state, {inputEventHost: action.operand});

    case "CAPTURE_EVENT_GUESTS":
      return objectAssign({}, state, {inputEventGuests: action.operand});

    case "CAPTURE_EVENT_MEMO":
      return objectAssign({}, state, {inputEventMemo: action.operand});

    case "CLEAR_EVENT_FORM":
      return objectAssign({}, state, defaultInputs);

    case "PROCESS_INPUT_LOGIN":
      var result = authenticationManager.authenticate(state.inputUid, state.inputPassword);
      if (result !== 0) {
        return objectAssign({}, state, {loginResponse: authenticationManager.messages[result]});
      }
      return doLogin(state.inputUid);

    case "SET_FORM_PAGE_NUMBER":
      return objectAssign({}, state, {formPageNumber: action.operand});

    case "INC_FORM_PAGE_NUMBER":
      return objectAssign({}, state, {formPageNumber: state.formPageNumber + 1});

    case "DEC_FORM_PAGE_NUMBER":
      return objectAssign({}, state, {formPageNumber: state.formPageNumber - 1});

    case "PROCESS_NEW_EVENT":
      console.log(state);
      return objectAssign({}, state, {inputResponse: state.inputEventName});

    default:
      return state || defaultState;

  }
};

/* export the resultant reducer */
module.exports = reducer;


