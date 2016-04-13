/**
 * This is a simple client side authentication manager. It verifies
 * the user inputs with the respective information stored on the local
 * storage.
 */

var storageManager = require("./storageManager.js");

/* module initialization */
var authenticationManager = {};

/*this is the only utility function in this module */
authenticationManager.authenticate = function(uid, password) {
  var userData = storageManager.getUserData(uid);
  if (!userData) {
    return 1;
  }
  if (userData.password !== password) {
    return 2;
  }
  return 0;
};

/* the are the interpretations of the returned value */
authenticationManager.messages = [
  "Passed the authentication.",
  "Bad user name.",
  "Bad password."
];

/* we export this module */
module.exports = authenticationManager;

