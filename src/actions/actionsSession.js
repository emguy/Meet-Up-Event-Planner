var SET_LOGIN_STATUS = "SET_LOGIN_STATUS";
var UNSET_LOGIN_STATUS = "UNSET_LOGIN_STATUS";

/** 
 * set the login status to be true 
 *
 * @arg uid{string} is the user id
 */
var setLoginStatus = function(uid) {
  return { type: SET_LOGIN_STATUS, operand: uid };
};

/** 
 * unset the login status
 */
var unsetLoginStatus = function() {
  return { type: UNSET_LOGIN_STATUS, operand: undefined };
};

/* export the action names */
module.exports.SET_LOGIN_STATUS = SET_LOGIN_STATUS;
module.exports.UNSET_LOGIN_STATUS = UNSET_LOGIN_STATUS;

/* export the action creation functions */
module.exports.setLoginStatus = setLoginStatus;
module.exports.unsetLoginStatus = unsetLoginStatus;

