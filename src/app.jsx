require("../scss/style.scss");

/** 
 * The array events contain a list of dummy event entries. 
 */
var initialEvents = [];

initialEvents.push({
  name: "The Lights On the Horizon Tour",
  type: "Rock and Pop",
  host: "Metric & Death Cab for Cutie",
  startTime: "March 22, 2016 18:45:00",
  endTime: "March 22, 2016 20:45:00",
  guests: "",
  priority: 3,
  location: "Meridian Centre, St Catharines, ON",
  notes: "N/A",
});

initialEvents.push({
  name: "Rugby Canada vs. Italy",
  type: "Sport",
  host: "Rugby Canada",
  startTime: "June 26, 2016 12:00:00",
  endTime: "June 26, 2016 14:00:00",
  guests: "",
  priority: 3,
  location: "BMO Field, Toronto, ON",
  notes: "N/A",
});

initialEvents.push({
  name: "Stars on Ice",
  type: "Ice Shows",
  host: "Investors Group",
  startTime: "May 6, 2016 19:30:00",
  endTime: "May 6, 2016 21:30:00",
  guests: "",
  priority: 2,
  location: "Air Canada Center, Toronto, ON",
  notes: "N/A",
});

initialEvents.push({
  name: "The Imagine Tour",
  type: "Magic Shows",
  host: "Greg Frewin",
  startTime: "March 23, 2016 19:30:00",
  endTime: "March 23, 2016 21:30:00",
  guests: "",
  priority: 1,
  location: "Eastdale C. V. I. Secondary School, Oshawa, ON",
  notes: "N/A",
});

initialEvents.push({
  name: "Taste of Toronto",
  type: "Fairs & Festivals",
  host: "Community",
  startTime: "June 24, 2016 17:30:00",
  endTime: "June 24, 2016 22:30:00",
  guests: "",
  priority: 1,
  location: "Fort York National Historic Site, Toronto, ON",
  notes: "N/A",
});

initialEvents.push({
  name: "April Fools",
  type: "Comedy",
  host: "GIlbert Gottfried",
  startTime: "April 1, 2016 20:00:00",
  endTime: "April 1, 2016 22:00:00",
  guests: "",
  priority: 2,
  location: "Massey Hall, Toronto, ON",
  notes: "N/A",
});






initialEvents.sort(function(a, b) {
    return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
});

















localStorage.setItem("default_user", JSON.stringify(initialEvents));

var React = require("react");
var ReactDOM = require("react-dom");
var MainContainer = require("./MainContainer.jsx");

ReactDOM.render(
  <MainContainer />, document.getElementById("root")
);
