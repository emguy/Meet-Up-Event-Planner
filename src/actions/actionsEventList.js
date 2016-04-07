var RESET_EVENTLIST = "RESET_EVENTLIST";

/**
 * clear or prefill the event-list for current user 
 *
 * @arg events{array} an array of event objects
 */
var resetEventList = function(events) {
  return { type: RESET_EVENTLIST, operand: events };
};

/* export the action names */
module.exports.RESET_EVENTLIST = RESET_EVENTLIST;

/* export the action creation functions */
module.exports.resetEventList = resetEventList;

