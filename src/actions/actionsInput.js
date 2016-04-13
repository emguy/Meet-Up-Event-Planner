/** 
 * store the content of the input box for the user name
 *
 * @arg key{string} the current user name in the input box
 */
var captureLoginUid = function(userInput) {
  return { type: "CAPTURE_LOGIN_UID", operand: userInput };
};

/** 
 * store the content of the input box for the password
 *
 * @arg key{string} the current password in the input box
 */
var captureLoginPassword = function(userInput) {
  return { type: "CAPTURE_LOGIN_PASSWORD", operand: userInput };
};

/**
 * process user login input
 *
 */
var processInputLogin = function() {
  return { type: "PROCESS_INPUT_LOGIN", operand: undefined };
}

/** 
 * store the content of the input box for the event name
 *
 * @arg key{string} the current user name in the input box
 */
var captureEventName = function(userInput) {
  return { type: "CAPTURE_EVENT_NAME", operand: userInput };
};

/** 
 * store the content of the input box for the event type
 *
 * @arg key{string} the current user name in the input box
 */
var captureEventType = function(userInput) {
  return { type: "CAPTURE_EVENT_TYPE", operand: userInput };
};

/** 
 * store the content of the input box for the event location
 *
 * @arg key{string} the current user name in the input box
 */
var captureEventLocation = function(userInput) {
  return { type: "CAPTURE_EVENT_LOCATION", operand: userInput };
};

/** 
 * store the content of the input box for the event location
 *
 * @arg key{string} the current user name in the input box
 */
var captureEventStartTime = function(userInput) {
  return { type: "CAPTURE_EVENT_STARTTIME", operand: userInput };
};

/** 
 * store the content of the input box for the event duration
 *
 * @arg key{string} the current user name in the input box
 */
var captureEventEndTime = function(userInput) {
  return { type: "CAPTURE_EVENT_ENDTIME", operand: userInput };
};

/** 
 * store the content of the input box for the event host
 *
 * @arg key{string} the current user name in the input box
 */
var captureEventHost = function(userInput) {
  return { type: "CAPTURE_EVENT_HOST", operand: userInput };
};

/** 
 * store the content of the input box for the event guests
 *
 * @arg key{string} the current user name in the input box
 */
var captureEventGuests = function(userInput) {
  return { type: "CAPTURE_EVENT_GUESTS", operand: userInput };
};

/** 
 * store the content of the input box for the event memo
 *
 * @arg key{string} the current user name in the input box
 */
var captureEventMemo = function(userInput) {
  return { type: "CAPTURE_EVENT_MEMO", operand: userInput };
};

/**
 * process user new event input
 *
 */
var processNewEvent = function() {
  return { type: "PROCESS_NEW_EVENT", operand: undefined };
}

/**
 * clear the event form
 *
 */
var clearEventForm = function() {
  return { type: "CLEAR_EVENT_FORM", operand: undefined };
}



/* export the action creation functions */
module.exports.captureLoginUid = captureLoginUid;
module.exports.captureLoginPassword = captureLoginPassword;

module.exports.captureEventName = captureEventName;
module.exports.captureEventType = captureEventType;
module.exports.captureEventLocation = captureEventLocation;
module.exports.captureEventStartTime = captureEventStartTime;
module.exports.captureEventEndTime = captureEventEndTime;
module.exports.captureEventHost = captureEventHost;
module.exports.captureEventGuests = captureEventGuests;
module.exports.captureEventMemo = captureEventMemo;

module.exports.processInputLogin = processInputLogin;
module.exports.processNewEvent = processNewEvent;
module.exports.clearEventForm = clearEventForm;
