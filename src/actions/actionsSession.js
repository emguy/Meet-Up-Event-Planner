var SET_LOGIN = "SET_LOGIN";
var UNSET_LOGIN = "UNSET_LOGIN";
var RESET_SESSION = "RESET_SESSION";

/** 
 * set the login status to be true 
 *
 * @arg uid{string} is the user id
 */
var setLogin = function(uid) {
  return { type: SET_LOGIN, operand: uid };
};

/** 
 * unset the login status
 */
var unsetLogin = function() {
  return { type: UNSET_LOGIN, operand: undefined };
};

/** 
 * reset the current session using the provided data
 */
var resetSession = function(data) {
  return { type: UNSET_LOGIN, operand: data };
};

/* export the action names */
module.exports.SET_LOGIN = SET_LOGIN;
module.exports.UNSET_LOGIN = UNSET_LOGIN;
module.exports.RESET_SESSION = RESET_SESSION;

/* export the action creation functions */
module.exports.setLogin = setLogin;
module.exports.unsetLogin = unsetLogin;
module.exports.resetSession = resetSession;


