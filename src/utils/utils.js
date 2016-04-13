/*
 * Here are some functions that might be useful.
 */

var utils = {};

/* some helper functions */
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
var toObject = function(val) {
  if (val === null || val === undefined) {
    throw new TypeError('util.assign cannot be called with null or undefined');
  }

  return Object(val);
}

/* a do-nothing event handler */
utils.doNothing = function(event) {
  event = event || window.event; 
  event.stopPropagation();
}

/** 
 * this is ES6 Object.assign()
 * 
 * taken from https://github.com/sindresorhus/object-assign
 *
 */
utils.objectAssign = Object.assign || function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (Object.getOwnPropertySymbols) {
      symbols = Object.getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
}

module.exports = utils;

