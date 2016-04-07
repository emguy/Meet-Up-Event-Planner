require("../scss/style.scss");

var sessionManager = require("./utils/sessionManager.js");
var preloadedEvents = require("./misc/preloadedEvents.js") || [];

var React = require("react");
var ReactDOM = require("react-dom");
var MainContainer = require("./components/MainContainer.jsx");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var browserHistory = require("react-router").browserHistory;
var hashHistory = require("react-router").hashHistory;
var IndexRoute = require("react-router").IndexRoute;

var LoginContainer = require("./components/LoginContainer.jsx");
var EventListContainer = require("./components/EventList/EventListContainer.jsx");
var EventCreatorContainer = require("./components/EventCreatorContainer.jsx");

/*
 * store layout
 *
 * status: <0 or 1>,
 * userInfo: { uid: "USER_NAME", pw: "PASSWORD", ... },
 * events: [],
 *
 */
var Redux = require("redux");
var reducer = require("./reducers/reducer.js");
var store = Redux.createStore(reducer);
var Provider = require("react-redux").Provider;
var resetEventList = require("./actions/actionsEventList.js").resetEventList;

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

