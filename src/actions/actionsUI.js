/** 
 * display the specified event card using his key value 
 *
 * @arg key{number} the unique key of the event object
 */
var setActiveEvent = function(key) {
  return { type: "SET_ACTIVE_EVENT", operand: key };
};

/** 
 * hide the active event card
 *
 * @arg key{number} the unique key of the event object
 */
var unsetActiveEvent = function(key) {
  return { type: "UNSET_ACTIVE_EVENT", operand: key };
};

/** 
 * show the navigation menu
 */
var unhideNavMenu = function() {
  return { type: "UNHIDE_NAVMENU", operand: undefined };
};

/** 
 * hide the navigation menu
 */
var hideNavMenu = function() {
  return { type: "HIDE_NAVMENU", operand: undefined };
};

/** 
 * toggle the advanced event form
 */
var toggleAdvancedEventForm = function() {
  return { type: "TOGGLE_ADVANCED_EVENT_FORM", operand: undefined };
};


/* export the action creation functions */
module.exports.setActiveEvent = setActiveEvent;
module.exports.unsetActiveEvent = unsetActiveEvent;
module.exports.unhideNavMenu = unhideNavMenu;
module.exports.hideNavMenu = hideNavMenu;
module.exports.toggleAdvancedEventForm = toggleAdvancedEventForm;

