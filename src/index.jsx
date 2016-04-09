/* import the style file */
require("../scss/style.scss");

/* import the core react library */
var React = require("react");
var ReactDOM = require("react-dom");

/* import the react-router */
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

/* import core components */
var AppContainer = require("./components/AppContainer.jsx");
var LoginContainer = require("./components/Login/LoginContainer.jsx");
var EventListContainer = require("./components/EventList/EventListContainer.jsx");
var NewEventContainer = require("./components/NewEvent/NewEventContainer.jsx");

/* import redux and react-redux */
var Redux = require("redux");
var applyMiddleware = require("redux").applyMiddleware;
var Provider = require("react-redux").Provider;

var storageManager = require("./utils/storageManager.js");
var reducer = require("./reducers/reducer.js");
var pushToSessionStorage = require("./middleware/pushToSessionStorage.js");

//var store = Redux.createStore(reducer);
var store = Redux.createStore(reducer, applyMiddleware(pushToSessionStorage));

// this is the initialization script
function init(store) {
  var key = store.getState().key;
  var raw = sessionStorage.getItem(key);
  if (!raw) {
    return;
  }
  var storedState = JSON.parse(raw);
  store.dispatch({type: "RESET_SESSION", operand: storedState.session});
}(store)

init(store);

storageManager.init();
var history = browserHistory;

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={LoginContainer} />
        <Route path="/events" component={EventListContainer} />
        <Route path="/new_event" component={NewEventContainer} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById("root")
);

