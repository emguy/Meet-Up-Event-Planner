var SET_ACTIVE_EVENT = "SET_ACTIVE_EVENT";
var UNSET_ACTIVE_EVENT = "UNSET_ACTIVE_EVENT";
var UNHIDE_NAVMENU = "UNHIDE_NAVMENU";
var HIDE_NAVMENU = "HIDE_NAVMENU";

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
var unhideNavMenu = function() {
  return { type: UNHIDE_NAVMENU, operand: undefined };
};

/** 
 * hide the navigation menu
 */
var hideNavMenu = function() {
  return { type: HIDE_NAVMENU, operand: undefined };
};

/* export the action names */
module.exports.SET_ACTIVE_EVENT = SET_ACTIVE_EVENT;
module.exports.UNSET_ACTIVE_EVENT = UNSET_ACTIVE_EVENT;
module.exports.UNHIDE_NAVMENU = UNHIDE_NAVMENU; 
module.exports.HIDE_NAVMENU = HIDE_NAVMENU;

/* export the action creation functions */
module.exports.setActiveEvent = setActiveEvent;
module.exports.unsetActiveEvent = unsetActiveEvent;
module.exports.unhideNavMenu = unhideNavMenu;
module.exports.hideNavMenu = hideNavMenu;

