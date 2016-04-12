var actionsInputLogin = require("../actions/actionsInputLogin.js")

var SET_INPUT_USERNAME = actionsInputLogin.SET_INPUT_USERNAME;
var SET_INPUT_PASSWORD = actionsInputLogin.SET_INPUT_PASSWORD;

/**
 * This is the reducer function
 */
var reducerUI = function(state, action) {
  switch (action.type) {
    /* set the username in the login page */
    case SET_INPUT_USERNAME:
      return Object.assign({}, state, {uid: action.operand});
    /* hide the password in the login page */
    case SET_INPUT_PASSWORD:
      return Object.assign({}, state, {password: action.operand});
    default: 
      return state || {uid: "", password: "", msg: []};
  }
}

/* export the resultant reducer */
module.exports = reducerUI;

