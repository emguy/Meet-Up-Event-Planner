/**
 * This is a simple client side registration manager. It validates
 * all the user input form fields.
 */

var storageManager = require('./storageManager.js');

/* module initialization */
var registrationManager = {};

registrationManager.validateUid = function(uid) {
  if (uid.length == 0) {
    return 1;
  }
  if (uid.length < 8) {
    return 2;
  }
  if (storageManager.getUserData(uid)) {
    return 3;
  }
  return 0;
};

registrationManager.validatePassword = function(password1, password2) {
  if (password1.length === 0) {
    return 1;
  }
  if (password1.length < 6) {
    return 2;
  }
  if (!/[a-z]/.test(password1)) {
    return 3;
  }
  if (!/[0-9]/.test(password1)) {
    return 4;
  }
  if (!/[A-Z]/.test(password1)) {
    return 5;
  }
  if (password2.length === 0) {
    return 6;
  }
  if (password1 !== password2) {
    return 7;
  }
  return 0;
};

registrationManager.validateEmail = function(email) {
  if (email === '') {
    return 1;
  }
  var patt = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  return patt.test(email) ? 0 : 2;
};

/*this is the only utility function in this module */
registrationManager.validateRegistration = function() {
  var userData = storageManager.getUserData(uid);
  if (!userData) {
    return 1;
  }
  if (userData.password !== password) {
    return 2;
  }
  return 0;
};

/* they are the interpretations of the returned value */
registrationManager.uidMessages = [
  'User id is valid.',
  'No inputs.',
  'User Id must contain at least 8 characters.',
  'This user id has already been registered.'
];

/* they are the interpretations of the returned value */
registrationManager.passwordMessages = [
  'Password is valid.',
  'Password field is empty.',
  'Password must contain 6 characters.',
  'Password must contain at least one lower case character.',
  'Password must contain at least one numeric character.',
  'Password must contain at least one upper case character.',
  'Password comfirmation is empty.',
  'Two passwords does not match with one another.'
];

/* they are the interpretations of the returned value */
registrationManager.emailMessages = [
  'Email is valid.',
  'Email field is empty.',
  'Email is invalid.'
];

/* we export this module */
module.exports = registrationManager;

