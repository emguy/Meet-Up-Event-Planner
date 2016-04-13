/** 
 * set the login status to be true 
 *
 * @arg uid{string} is the user id
 */
var loginAsTrialUser = function() {
  return { type: "LOGIN_AS_TRIAL_USER", operand: undefined };
};

/** 
 * unset the login status
 */
var doLogout = function() {
  return { type: "DO_LOGOUT", operand: undefined };
};

/** 
 * reset the current session using the provided data
 */
var resetSession = function(data) {
  return { type: "RESET_LOGIN", operand: data };
};

/* export the action creation functions */
module.exports.loginAsTrialUser = loginAsTrialUser;
module.exports.doLogout = doLogout;
module.exports.resetSession = resetSession;

