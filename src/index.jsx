require("../scss/style.scss");

var React = require("react");
var ReactDOM = require("react-dom");

var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var AppContainer = require("./components/AppContainer.jsx");
var LoginContainer = require("./components/Login/LoginContainer.jsx");
var EventListContainer = require("./components/EventList/EventListContainer.jsx");
var NewEventContainer = require("./components/NewEvent/NewEventContainer.jsx");

var Redux = require("redux");
var Provider = require("react-redux").Provider;

var sessionManager = require("./utils/sessionManager.js");
var reducer = require("./reducers/reducer.js");


var store = Redux.createStore(reducer);
var resetEventList = require("./actions/actionsEventList.js").resetEventList;

sessionManager.init();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={LoginContainer} />
        <Route path="/events" component={EventListContainer} />
        <Route path="/new_event" component={NewEventContainer} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById("root")
);

