/**
 * this redux middleware dumps all store states to the sessionStorage with the
 * key defined by store.getState().key.
 */

var pushToSessionStorage = function(store) {
  return function(next) {
    return function(action) {
      next(action);
      var currentState = store.getState();
      sessionStorage.setItem(currentState.key, JSON.stringify(currentState));
    };
  };
};

module.exports = pushToSessionStorage;

