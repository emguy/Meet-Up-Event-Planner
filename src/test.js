var Redux = require("redux");
var reducerEventList = require("./EventList/reducer.js");

var reducerApp = Redux.combineReducers({reducerEventList});
var store = Redux.createStore(reducerApp);
