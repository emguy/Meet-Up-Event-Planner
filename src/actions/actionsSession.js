var SET_LOGIN_STATUS = "SET_LOGIN_STATUS";
var UNSET_LOGIN_STATUS = "UNSET_LOGIN_STATUS";

var UNHIDE_NAV = "UNHIDE_NAV";
var HIDE_NAV = "HIDE_NAV";

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

/** 
 * show the navigation menu
 */
var unhideNav = function() {
  return { type: UNHIDE_NAV, operand: undefined };
};

/** 
 * hide the navigation menu
 */
var hideNav = function() {
  return { type: HIDE_NAV, operand: undefined };
};

/* export the action names */
module.exports.SET_LOGIN_STATUS = SET_LOGIN_STATUS;
module.exports.UNSET_LOGIN_STATUS = UNSET_LOGIN_STATUS;
module.exports.UNHIDE_NAV = UNHIDE_NAV; 
module.exports.HIDE_NAV = HIDE_NAV;

/* export the action creation functions */
module.exports.setLoginStatus = setLoginStatus;
module.exports.unsetLoginStatus = unsetLoginStatus;
module.exports.unhideNav = unhideNav;
module.exports.hideNav = hideNav;

