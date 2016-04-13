/** 
 * store the content of the input box for the user name
 *
 * @arg key{string} the current user name in the input box
 */
var captureLoginUid = function(userInput) {
  return { type: "CAPTURE_LOGIN_UID", operand: userInput };
};

/** 
 * store the content of the input box for the password
 *
 * @arg key{string} the current password in the input box
 */
var captureLoginPassword = function(userInput) {
  return { type: "CAPTURE_LOGIN_PASSWORD", operand: userInput };
};

/**
 * process user login input
 *
 */
var processInputLogin = function() {
  return { type: "PROCESS_INPUT_LOGIN", operand: undefined };
}

/* export the action creation functions */
module.exports.captureLoginUid = captureLoginUid;
module.exports.captureLoginPassword = captureLoginPassword;
module.exports.processInputLogin = processInputLogin;

