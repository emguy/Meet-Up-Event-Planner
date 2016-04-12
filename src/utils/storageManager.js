var key = "meet_up_event_planner";

var prefix = "meet_up_event_planner-";
var userProfilesKey = prefix + "user-profiles";

var storageManager = {};

var trialUserData = {
  uid: "trial",
  name: "Trial User",
  password: "123456789",
  eventList: require("../misc/preloadedEvents.js")
};

var templateUserData = {
  uid: "",
  name: "",
  password: "",
  eventList: []
};

storageManager.setUserData = function(userData) {
  var data = {};
  var rawData = localStorage.getItem(key); 
  if (rawData) {
    data = JSON.parse(rawData);
  }
  data[userData.uid] = Object.assign({}, templateUserData, userData);
  localStorage.setItem(key, JSON.stringify(data));
};

storageManager.getUserData = function(uid) {
  var rawData = localStorage.getItem(key); 
  if (!rawData) {
    return;
  }
  var data = JSON.parse(rawData);
  return data[uid];
};

storageManager.init = function(preloadedEvents) {
  storageManager.setUserData(trialUserData);
  storageManager.setUserData({uid: "root", password: "1111"});
};

module.exports = storageManager;

