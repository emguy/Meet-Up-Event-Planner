var utils = {};

utils.doNothing = function(event) {
  event = event || window.event; 
  event.stopPropagation();
}

module.exports = utils;
