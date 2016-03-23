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











var React = require("react");
var update = require("react-addons-update");
//require("whatwg-fetch");

var EventListContainer = React.createClass({
  getInitialState: function() {
    return {data: initalEvents};
  },
  componentDidMount: function() {
  },
  render: function() {
    return (
      <EventList data={this.state.data}/>
    );
  },
});

var EventList = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
  },
  render: function() {
    var parsedEvents = this.props.data.slice(0, 5).map(function(item, index) {
      return (
        <EventEntry key={index.toString()} event={item} />
      );
    });
    return (
      <ul className="event-list">
        {parsedEvents}
      </ul>
    );
  },
});

var EventEntry = React.createClass({
  propTypes: {
    key: React.PropTypes.string,
    event: React.PropTypes.object.isRequired,
  },
  getInitialState: function() {
    return {showDetail: false};
  },
  handleClick() {
    this.setState({showDetail: !this.state.showDetail});
  },
  render: function() {
    var eventDetail;
    var _className;
    switch (this.props.event.priority) {
      case 1:
        _className = "event bg-danger";
        break;
      case 2:
        _className = "event bg-success";
        break;
      case 3:
        _className = "event bg-info";
        break;
      default:
        _className = "event bg-info";
    }
    if (this.state.showDetail) {
      eventDetail = (
        <div className="event-details">
          <div className="event-attribute"> 
            <div className="event-label"> Location: </div>
            <div className="event-value"> {this.props.event.location} </div>
          </div>
          <div className="event-attribute"> 
            <div className="event-label"> End time: </div>
            <div className="event-value"> {new (this.props.event.endTime).toLocaleTimeString()} </div>
          </div>
          <div className="event-attribute"> 
            <div className="event-label"> Host: </div>
            <div className="event-value"> {this.props.event.host} </div>
          </div>
          <div className="event-attribute"> 
            <div className="event-label"> Type: </div>
            <div className="event-value"> {this.props.event.type} </div>
          </div>
          <div className="event-attribute"> 
            <div className="event-label"> Guests: </div>
            <div className="event-value"> {this.props.event.guest} </div>
          </div>
        </div>
      );
    };
    return (
      <li className={_className} onClick={this.handleClick}>
        <h4 className="event-name"> 
          {this.props.event.name} 
        </h4>
        <p className="event-time"> 
          {new Date(this.props.event.startTime).toLocaleString()} 
        </p>
        {eventDetail}
      </li>
    );
  },
});

module.exports = EventListContainer;
