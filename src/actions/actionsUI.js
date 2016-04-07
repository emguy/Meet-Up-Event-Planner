var SET_ACTIVE_EVENT = "SET_ACTIVE_EVENT";
var UNSET_ACTIVE_EVENT = "UNSET_ACTIVE_EVENT";
var UNHIDE_NAV = "UNHIDE_NAV";
var HIDE_NAV = "HIDE_NAV";

/** 
 * display the specified event card using his key value 
 *
 * @arg key{number} the unique key of the event object
 */
var setActiveEvent = function(key) {
  return { type: SET_ACTIVE_EVENT, operand: key };
};

/** 
 * hide the active event card
 *
 * @arg key{number} the unique key of the event object
 */
var unsetActiveEvent = function(key) {
  return { type: UNSET_ACTIVE_EVENT, operand: key };
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
module.exports.SET_ACTIVE_EVENT = SET_ACTIVE_EVENT;
module.exports.UNSET_ACTIVE_EVENT = UNSET_ACTIVE_EVENT;
module.exports.UNHIDE_NAV = UNHIDE_NAV; 
module.exports.HIDE_NAV = HIDE_NAV;

/* export the action creation functions */
module.exports.setActiveEvent = setActiveEvent;
module.exports.unsetActiveEvent = unsetActiveEvent;
module.exports.unhideNav = unhideNav;
module.exports.hideNav = hideNav;

