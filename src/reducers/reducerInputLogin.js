var actionsInputLogin = require("../actions/actionsInputLogin.js")
var authenticationManager = require("../utils/authenticationManager.js");

var SET_INPUT_USERNAME = actionsInputLogin.SET_INPUT_USERNAME;
var SET_INPUT_PASSWORD = actionsInputLogin.SET_INPUT_PASSWORD;
var PROCESS_USER_INPUT = actionsInputLogin.PROCESS_USER_INPUT;
var INIT = actionsInputLogin.INIT;

/**
 * This is the reducer function
 */
var reducerUI = function(state, action) {
  switch (action.type) {
    /* set the username in the login page */
    case INIT:
      return {uid: "", password: "", response: ""};
    case SET_INPUT_USERNAME:
      return Object.assign({}, state, {uid: action.operand});
    /* hide the password in the login page */
    case SET_INPUT_PASSWORD:
      return Object.assign({}, state, {password: action.operand});
    case PROCESS_USER_INPUT:
      var result = authenticationManager.authenticate(state.uid, state.password);
      console.log(authenticationManager.messages[result]);
      if (result !== 0) {
        return Object.assign({}, state, {response: authenticationManager.messages[result]});
      }
      return Object.assign({}, state, {response: 0});
    default: 
      return state || {uid: "", password: "", response: ""};
  }
}

/* export the resultant reducer */
module.exports = reducerUI;

