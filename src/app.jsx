require("../scss/style.scss");

var sessionManager = require("./sessionManager.js");
var preloadedEvents = require("./preloadedEvents.js") || [];

var React = require("react");
var ReactDOM = require("react-dom");
var MainContainer = require("./MainContainer.jsx");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var browserHistory = require("react-router").browserHistory;
var hashHistory = require("react-router").hashHistory;
var IndexRoute = require("react-router").IndexRoute;

var LoginContainer = require("./LoginContainer.jsx");
var EventListContainer = require("./EventListContainer.jsx");
var EventCreatorContainer = require("./EventCreatorContainer.jsx");

sessionManager.init(preloadedEvents);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={LoginContainer} />
      <Route path="/events" component={EventListContainer} />
      <Route path="/new_event" component={EventCreatorContainer} />
    </Route>
  </Router>
  ), document.getElementById("root")
);

