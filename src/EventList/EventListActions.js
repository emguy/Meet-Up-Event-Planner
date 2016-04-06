var RESET_EVENTLIST = "RESET_EVENTLIST";
var resetEventList = function(events) {
  return { type: RESET_EVENTLIST, data: events };
};

module.exports.RESET_EVENTLIST = RESET_EVENTLIST;
module.exports.resetEventList = resetEventList;
