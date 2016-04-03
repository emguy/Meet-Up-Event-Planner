var sessionManager = {
  prefix: "meet_up_event_planner-",
  preloadedEvents: [],
};

sessionManager.init = function(preloadedEvents) {
  sessionStorage.setItem(this.prefix, "active");
  sessionStorage.setItem(this.prefix + "loggedIn", "true");
  sessionStorage.setItem(this.prefix + "preloadedEvents", JSON.stringify(preloadedEvents));
};

sessionManager.isLoggedIn = function() {
  return sessionStorage.getItem(this.prefix + "loggedIn") === "true";
};

sessionManager.logout = function() {
  console.out("logged out");
  sessionStorage.setItem(this.prefix + "loggedIn", "true");
}

/*
//session.setItem("default_user", JSON.stringify(preloadedEvents));
//
//
//sessionStorage.setItem("default_user", JSON.stringify(preloadedEvents));
//
//
//
//
//
//
//
//preloadedEvents.sort(function(a, b) {
//    return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
//});
*/

module.exports = sessionManager;

