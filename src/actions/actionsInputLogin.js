var SET_INPUT_USERNAME = "SET_INPUT_USERNAME";
var SET_INPUT_PASSWORD = "SET_INPUT_PASSWORD";

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

/* export the action names */
module.exports.SET_INPUT_USERNAME = SET_INPUT_USERNAME;
module.exports.SET_INPUT_PASSWORD = SET_INPUT_PASSWORD;

/* export the action creation functions */
module.exports.setInputUserName = setInputUserName;
module.exports.setInputPassword = setInputPassword;

