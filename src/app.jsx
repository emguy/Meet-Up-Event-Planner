/** 
 * The array events contain a list of dummy event entries. 
 */
var events = [];

events.push({
  name: "The Lights On the Horizon Tour",
  type: "Rock and Pop",
  host: "Metric & Death Cab for Cutie",
  startTime: new Date("March 22, 2016 18:45:00"),
  endTime: new Date("March 22, 2016 20:45:00"),
  guests: "",
  priority: 3,
  location: "Meridian Centre, St Catharines, ON",
  notes: "N/A",
});

events.push({
  name: "Rugby Canada vs. Italy",
  type: "Sport",
  host: "Rugby Canada",
  startTime: new Date("June 26, 2016 12:00:00"),
  endTime: new Date("June 26, 2016 14:00:00"),
  guests: "",
  priority: 3,
  location: "BMO Field, Toronto, ON",
  notes: "N/A",
});

events.push({
  name: "Stars on Ice",
  type: "Ice Shows",
  host: "Investors Group",
  startTime: new Date("May 6, 2016 19:30:00"),
  endTime: new Date("May 6, 2016 21:30:00"),
  guests: "",
  priority: 2,
  location: "Air Canada Center, Toronto, ON",
  notes: "N/A",
});

events.push({
  name: "The Imagine Tour",
  type: "Magic Shows",
  host: "Greg Frewin",
  startTime: new Date("March 23, 2016 19:30:00"),
  endTime: new Date("March 23, 2016 21:30:00"),
  guests: "",
  priority: 1,
  location: "Eastdale C. V. I. Secondary School, Oshawa, ON",
  notes: "N/A",
});

events.push({
  name: "Taste of Toronto",
  type: "Fairs & Festivals",
  host: "Community",
  startTime: new Date("June 24, 2016 17:30:00"),
  endTime: new Date("June 24, 2016 22:30:00"),
  guests: "",
  priority: 1,
  location: "Fort York National Historic Site, Toronto, ON",
  notes: "N/A",
});

events.push({
  name: "April Fools",
  type: "Comedy",
  host: "GIlbert Gottfried",
  startTime: new Date("April 1, 2016 20:00:00"),
  endTime: new Date("April 1, 2016 22:00:00"),
  guests: "",
  priority: 2,
  location: "Massey Hall, Toronto, ON",
  notes: "N/A",
});

/** 
 * sort the events in the array according to their start time
 */
events.sort(function(a, b) {
    return a.startTime.getTime() - b.startTime.getTime();
});

var React = require("react");
var EventListContainer = require("./EventListContainer.jsx");

React.render(<EventListContainer/>, document.getElementById("root"));
