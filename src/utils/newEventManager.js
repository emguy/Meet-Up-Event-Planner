/**
 * This is a simple client side registration manager. It validates
 * all the user input form fields.
 */

/* module initialization */
var newEventManager = {};

/*this is the only utility function in this module */
newEventManager.validateNewEvent = function(state) {
  if (/^\s*$/.test(state.inputEventName)) {
    return 1;
  }
  if (/^\s*$/.test(state.inputEventType)) {
    return 2;
  }
  if (/^\s*$/.test(state.inputEventLocation)) {
    return 3;
  }
  if (/^\s*$/.test(state.inputEventDate)) {
    return 4;
  }
  if (/^\s*$/.test(state.inputEventStartTime)) {
    return 5;
  }
  if (/^\s*$/.test(state.inputEventEndTime)) {
    return 6;
  }
  if (/^\s*$/.test(state.inputEventHost)) {
    return 7;
  }
  if (/^\s*$/.test(state.inputEventGuests)) {
    return 8;
  }
  return 0;
};

/* they are the interpretations of the returned value */
newEventManager.messages = [
  'Valid event object.',
  'Event name is empty.',
  'Event type is empty',
  'Event location is empty',
  'Event date is empty',
  'Event start time is empty',
  'Event end time is empty',
  'Event host is empty',
  'Event guests is empty'
];

/* we export this module */
module.exports = newEventManager;

