var authenticationManager = require('../utils/authenticationManager.js');
var storageManager = require('../utils/storageManager.js');
var registrationManager = require('../utils/registrationManager.js');
var newEventManager = require('../utils/newEventManager.js');
var Router = require("react-router");

/* this is equivalent to Object.assign() in ES6  */
var objectAssign = require('../utils/utils.js').objectAssign;

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
  formPageNumber: 0,
  inputUid: '',
  inputPassword: '',
  inputRegUid: '',
  inputRegPassword1: '',
  inputRegPassword2: '',
  inputRegEmail: '',
  inputEventName: '',
  inputEventDate: '',
  inputEventLocation: '',
  inputEventType: '',
  inputEventStartTime: '',
  inputEventEndTime: '',
  inputEventHost: '',
  inputEventGuests: '',
  inputEventMemo: '',
  inputResponse: ''
};

var defaultState = {
  activeEvent: -1,
  loginStatus: 0, 
  userProfile: null, 
  eventList: []
};

defaultState = objectAssign(defaultState, defaultInputs);

var mask = {
  inputResponse: '',
};

var doLogin = function(uid) {
  try {
    var userData = storageManager.getUserData(uid);
    console.log('user data is', userData);
  } catch(err) {
    throw 'Cannot retrive user data from the local storage.';
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

    case 'RESET_SESSION':
      if (action.operand) {
        objectAssign(action.operand, mask); // unset system response
        return action.operand;
      }
      return state;

    case 'LOGIN_AS_TRIAL_USER': 
      if (!state.loginStatus || state.loginStatus !== 1) {
        return doLogin('trial');
      }
      return state;

    case 'DO_LOGOUT':
      if (state.loginStatus && state.loginStatus === 1) {
        return defaultState;
      }
      return state;

    case 'CAPTURE_LOGIN_UID':
      return objectAssign({}, state, {inputUid: action.operand});

    case 'CAPTURE_LOGIN_PASSWORD':
      return objectAssign({}, state, {inputPassword: action.operand});

    case 'CAPTURE_EVENT_NAME':
      console.log(action.operand);
      return objectAssign({}, state, {inputEventName: action.operand});

    case 'CAPTURE_EVENT_LOCATION':
      return objectAssign({}, state, {inputEventLocation: action.operand});

    case 'CAPTURE_EVENT_TYPE':
      return objectAssign({}, state, {inputEventType: action.operand});

    case 'CAPTURE_EVENT_STARTTIME':
      return objectAssign({}, state, {inputEventStartTime: action.operand});

    case 'CAPTURE_EVENT_ENDTIME':
      return objectAssign({}, state, {inputEventEndTime: action.operand});

    case 'CAPTURE_EVENT_HOST':
      return objectAssign({}, state, {inputEventHost: action.operand});

    case 'CAPTURE_EVENT_DATE':
      return objectAssign({}, state, {inputEventDate: action.operand});

    case 'CAPTURE_EVENT_GUESTS':
      return objectAssign({}, state, {inputEventGuests: action.operand});

    case 'CAPTURE_EVENT_MEMO':
      return objectAssign({}, state, {inputEventMemo: action.operand});

    case 'CLEAR_EVENT_FORM':
      return objectAssign({}, state, defaultInputs);

    case 'PROCESS_INPUT_LOGIN':
      var result = authenticationManager.authenticate(state.inputUid, state.inputPassword);
      if (result !== 0) {
        return objectAssign({}, state, {inputResponse: authenticationManager.messages[result]});
      }
      return doLogin(state.inputUid);

    case 'SET_FORM_PAGE_NUMBER':
      return objectAssign({}, state, {formPageNumber: action.operand});

    case 'INC_FORM_PAGE_NUMBER':
      var result = newEventManager.validateNewEvent(state);
      if (state.formPageNumber === 0 && result && result < 4) { 
        return objectAssign({}, state, {inputResponse: newEventManager.messages[result]});
      }
      if (state.formPageNumber === 1 && result && result < 7) { 
        return objectAssign({}, state, {inputResponse: newEventManager.messages[result]});
      }
      if (state.formPageNumber === 2 && result && result < 9) { 
        return objectAssign({}, state, {inputResponse: newEventManager.messages[result]});
      }
      return objectAssign({}, state, {inputResponse: '', formPageNumber: state.formPageNumber + 1});

    case 'DEC_FORM_PAGE_NUMBER':
      return objectAssign({}, state, {formPageNumber: state.formPageNumber - 1});

    case 'PROCESS_NEW_EVENT':
      console.log(state);
      return objectAssign({}, state, {inputResponse: state.inputEventName});

    case 'CAPTURE_REG_UID':
      var result = registrationManager.validateUid(action.operand);
      if (result !== 0 && result !== 1) {
        return objectAssign({}, state, {inputRegUid: action.operand}, {systemResponse: registrationManager.uidMessages[result]});
      }
      return objectAssign({}, state, {systemResponse: ''}, {inputRegUid: action.operand});

    case 'CAPTURE_REG_PASSWORD_1':
      var result = registrationManager.validatePassword(action.operand, state.inputRegPassword2);
      if (result !== 0 && result !== 1 && result !== 6 && result !== 7) {
        return objectAssign({}, state, {inputRegPassword1: action.operand}, {systemResponse: registrationManager.passwordMessages[result]});
      }
      return objectAssign({}, state, {systemResponse: ''}, {inputRegPassword1: action.operand});

    case 'CAPTURE_REG_PASSWORD_2':
      var result = registrationManager.validatePassword(state.inputRegPassword1, action.operand);
      if (result !== 0 && result !== 1 && result !== 6) {
        return objectAssign({}, state, {inputRegPassword2: action.operand}, {systemResponse: registrationManager.passwordMessages[result]});
      }
      return objectAssign({}, state, {systemResponse: ''}, {inputRegPassword2: action.operand});

    case 'CAPTURE_REG_EMAIL':
      var result = registrationManager.validateEmail(action.operand);
      if (result !== 0 && result !== 1) {
        return objectAssign({}, state, {inputRegEmail: action.operand}, {systemResponse: registrationManager.emailMessages[result]});
      }
      return objectAssign({}, state, {systemResponse: ''}, {inputRegEmail: action.operand});

    case 'DO_NEW_EVENT':
      var event = {
        name: state.inputEventName,
        type: state.inputEventType,
        host: state.inputEventHost,
        startTime: state.inputEventDate.concat(' ').concat(state.inputEventStartTime),
        endTime: state.inputEventDate.concat(' ').concat(state.inputEventEndTime),
        guests: state.inputEventGuests,
        location: state.inputEventLocation,
        notes: state.inputEventMemo || 'N/A'
      };
      try {
        var userData = storageManager.getUserData(state.userProfile.uid);
      } catch(err) {
        throw 'Cannot retrive user data from the local storage.';
      }
      window.location.href = '/events';
      var eventList = userData.eventList;
      eventList.push(event);
      storageManager.setUserData(userData);

      var newState = objectAssign({}, defaultState, {loginStatus: 1, userProfile: userData,  eventList: eventList});
      /* here we uniquely index each event entry */
      newState.eventList.forEach(function(item, index) {
        item.key = Date.now() - index * 3;
      });

      Router.browserHistory.push('/new-event');
      return newState;

    case 'DO_DELETE_EVENT':
      try {
        var userData = storageManager.getUserData(state.userProfile.uid);
      } catch(err) {
        throw 'Cannot retrive user data from the local storage.';
      }
      var eventList =  state.eventList.slice(0); //clone
      eventList.splice(action.operand, 1);
      userData.eventList = eventList;
      storageManager.setUserData(userData);
      var newState = objectAssign({}, defaultState, {loginStatus: 1, userProfile: userData, eventList: eventList});
      /* here we uniquely index each event entry */
      newState.eventList.forEach(function(item, index) {
        item.key = Date.now() - index * 3;
      });

      return newState;

    case "SET_ACTIVE_EVENT":
      if (!state.activeEvent || state.activeEvent < 0) {
        return objectAssign({}, state, {activeEvent: action.operand});
      }
      return state;

    case "UNSET_ACTIVE_EVENT":
      if (state.activeEvent > 0) {
        return objectAssign({}, state, {activeEvent: -1});
      }
      return state;

    case 'DO_REGISTRATION':
      var result = registrationManager.validateUid(state.inputRegUid);
      if (result !== 0) {
        return objectAssign({}, state, {inputRegUid: state.inputRegUid}, {systemResponse: registrationManager.uidMessages[result]});
      }
      result = registrationManager.validatePassword(state.inputRegPassword1, state.inputRegPassword2);
      if (result !== 0) {
        return objectAssign({}, state, {inputRegPassword1: state.inputRegPassword1}, {systemResponse: registrationManager.passwordMessages[result]});
      }
      result = registrationManager.validateEmail(state.inputRegEmail);
      if (result !== 0) {
        return objectAssign({}, state, {inputRegEmail: action.operand}, {systemResponse: registrationManager.emailMessages[result]});
      }
      storageManager.addNewUser(state.inputRegUid, state.inputRegPassword1, state.inputRegEmail);
      return doLogin(state.inputRegUid);

    default:
      return state || defaultState;

  }
};

/* export the resultant reducer */
module.exports = reducer;

