var preloadedEvents = require("../misc/preloadedEvents.js");

var prefix = "meet_up_event_planner-";

var sessionManager = {
  prefix: prefix,
};

var defaultUserData = {
  uid: "default",
  userName: "tom",
  password: "123456789",
  eventList: preloadedEvents
};

sessionManager.init = function(preloadedEvents) {
  localStorage.setItem(prefix + defaultUserData.uid, JSON.stringify(defaultUserData));
};

sessionManager.getUserData = function(uid) {
  var key = prefix + uid;
  var rawData = localStorage.getItem(key); 
  if (rawData) {
    return JSON.parse(rawData);
  }
};

sessionManager.setUserData = function(userData) {
  var key = prefix + userData;
  localStorage.setItem(key, JSON.stringify(userData));
};

module.exports = sessionManager;

