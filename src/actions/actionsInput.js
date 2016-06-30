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
 * store the content of the input box for the event state time
 *
 * @arg key{string} the current user name in the input box
 */
var captureEventStartTime = function(userInput) {
  return { type: "CAPTURE_EVENT_STARTTIME", operand: userInput };
};

/** 
 * store the content of the input box for the event date
 *
 * @arg key{string} the current user name in the input box
 */
var captureEventDate = function(userInput) {
  return { type: "CAPTURE_EVENT_DATE", operand: userInput };
};

/** 
 * store the content of the input box for the event end time
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
 * store the content of the input box for the uid
 *
 * @arg key{string} the uid
 */
var captureRegUid = function(userInput) {
  return { type: "CAPTURE_REG_UID", operand: userInput };
};

/** 
 * store the content of the input box for the email
 *
 * @arg key{string} the email
 */
var captureRegEmail = function(userInput) {
  return { type: "CAPTURE_REG_EMAIL", operand: userInput };
};

/** 
 * store the content of the input box for the user password
 *
 * @arg key{string} the user password
 */
var captureRegPassword1 = function(userInput) {
  return { type: "CAPTURE_REG_PASSWORD_1", operand: userInput };
};

/** 
 * store the content of the input box for the password confirmation
 *
 * @arg key{string} the user password confirmation
 */
var captureRegPassword2 = function(userInput) {
  return { type: "CAPTURE_REG_PASSWORD_2", operand: userInput };
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
module.exports.captureEventDate = captureEventDate;

module.exports.processInputLogin = processInputLogin;
module.exports.processNewEvent = processNewEvent;
module.exports.clearEventForm = clearEventForm;

module.exports.captureRegUid = captureRegUid;
module.exports.captureRegEmail = captureRegEmail;
module.exports.captureRegPassword1 = captureRegPassword1;
module.exports.captureRegPassword2 = captureRegPassword2;

