/**
 * This module bridges the application to the local storage. It provides
 * several convenient APIs to access or set the user data on the local
 * storage.
 */

/* this the key for accessing application data from the local storage */
var key = "meet_up_event_planner";

/* this is equivalent to Object.assign() in ES6  */
var objectAssign = require("../utils/utils.js").objectAssign;

/* initialize this module  */
var storageManager = {};

/* this is the data for trail user */
var trialUserData = {
  uid: "trial",
  name: "Trial User",
  password: "",
  eventList: require("../misc/preloadedEvents.js")
};

/* this is the template for user data */
var templateUserData = {
  uid: "",
  name: "",
  password: "",
  eventList: []
};

/* this is the user data setter */
storageManager.setUserData = function(userData) {
  var data = {};
  var rawData = localStorage.getItem(key); 
  if (rawData) {
    data = JSON.parse(rawData);
  }
  data[userData.uid] = objectAssign({}, templateUserData, userData);
  localStorage.setItem(key, JSON.stringify(data));
};

/* this is for inserting new user; it will reset the 
 * user data if this user is already exist 
 */
storageManager.addNewUser = function(_uid, _password) {
  data[userData.uid] = objectAssign({}, templateUserData, {uid: _uid, password: _password});
  localStorage.setItem(key, JSON.stringify(data));
};

/* this is the user data getter */
storageManager.getUserData = function(uid) {
  var rawData = localStorage.getItem(key); 
  if (!rawData) {
    return;
  }
  var data = JSON.parse(rawData);
  return data[uid];
};

/* initalize the application data on the local storage */
storageManager.init = function(preloadedEvents) {
  storageManager.setUserData(trialUserData);
  storageManager.setUserData({uid: "root", password: "1111"});
};

/* export the module */
module.exports = storageManager;

