var SET_INPUT_USERNAME = "SET_INPUT_USERNAME";
var SET_INPUT_PASSWORD = "SET_INPUT_PASSWORD";
var PROCESS_USER_INPUT = "PROCESS_USER_INPUT";
var INIT = "INIT";

/** 
 * initalize inputs 
 */
var init = function() {
  return { type: INIT, operand: undefined };
};
/** 
 * store the content of the input box for the user name
 *
 * @arg key{string} the current user name in the input box
 */
var setInputUserName = function(userInput) {
  return { type: SET_INPUT_USERNAME, operand: userInput };
};

/** 
 * store the content of the input box for the password
 *
 * @arg key{string} the current password in the input box
 */
var setInputPassword = function(userInput) {
  return { type: SET_INPUT_PASSWORD, operand: userInput };
};

/**
 * process user input
 *
 */
var processUserInput = function() {
  return { type: PROCESS_USER_INPUT, operand: undefined };
}

/* export the action names */
module.exports.SET_INPUT_USERNAME = SET_INPUT_USERNAME;
module.exports.SET_INPUT_PASSWORD = SET_INPUT_PASSWORD;
module.exports.PROCESS_USER_INPUT = PROCESS_USER_INPUT;
module.exports.INIT = INIT;

/* export the action creation functions */
module.exports.setInputUserName = setInputUserName;
module.exports.setInputPassword = setInputPassword;
module.exports.processUserInput = processUserInput;
module.exports.init = init;
