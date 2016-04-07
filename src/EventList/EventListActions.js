var RESET_EVENTLIST = "RESET_EVENTLIST";
var SET_ACTIVE_EVENT = "SET_ACTIVE_EVENT";
var UNSET_ACTIVE_EVENT = "UNSET_ACTIVE_EVENT";

/* clear or prefill the event-list for current user */
var resetEventList = function(events) {
  return { type: RESET_EVENTLIST, operand: events };
};

/* display the specified event card using his key value */
var setActiveEvent = function(key) {
  return { type: SET_ACTIVE_EVENT, operand: key };
};

/* hide the active event card */
var unsetActiveEvent = function(key) {
  return { type: UNSET_ACTIVE_EVENT, operand: key };
};

/* export the action names */
module.exports.RESET_EVENTLIST = RESET_EVENTLIST;
module.exports. SET_ACTIVE_EVENT = SET_ACTIVE_EVENT;
module.exports. UNSET_ACTIVE_EVENT = UNSET_ACTIVE_EVENT;

/* export the action creation functions */
module.exports.resetEventList = resetEventList;
module.exports.setActiveEvent = setActiveEvent;
module.exports.unsetActiveEvent = unsetActiveEvent;

