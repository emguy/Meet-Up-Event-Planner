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
var EventListContainer = require("./EventList/EventListContainer.js");
var EventCreatorContainer = require("./EventCreatorContainer.jsx");

/*
 * store layout
 *
 * status: <0 or 1>,
 * userInfo: { uid: "USER_NAME", pw: "PASSWORD", ... },
 * events: [],
 *
 */
var Redux = require("redux");
var reducerEventList = require("./EventList/reducer.js");

var reducerApp = Redux.combineReducers({eventList: reducerEventList});
var store = Redux.createStore(reducerApp);
var Provider = require("react-redux").Provider;

var resetEventList = require("./EventList/EventListActions.js").resetEventList;

store.dispatch(resetEventList(preloadedEvents));
console.log(store.getState());

//sessionManager.init(preloadedEvents);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={LoginContainer} />
        <Route path="/events" component={EventListContainer} />
        <Route path="/new_event" component={EventCreatorContainer} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById("root")
);

