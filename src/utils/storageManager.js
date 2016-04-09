var preloadedEvents = require("../misc/preloadedEvents.js");

var prefix = "meet_up_event_planner-";

var storageManager = {
  prefix: prefix,
};

var defaultUserData = {
  uid: "default",
  userName: "tom",
  password: "123456789",
  eventList: preloadedEvents
};

storageManager.init = function(preloadedEvents) {
  localStorage.setItem(prefix + defaultUserData.uid, JSON.stringify(defaultUserData));
};

storageManager.getUserData = function(uid) {
  var key = prefix + uid;
  var rawData = localStorage.getItem(key); 
  if (rawData) {
    return JSON.parse(rawData);
  }
};

storageManager.setUserData = function(userData) {
  var key = prefix + userData;
  localStorage.setItem(key, JSON.stringify(userData));
};

module.exports = storageManager;

