var React = require("react");
var update = require("react-addons-update");
//require("whatwg-fetch");

var EventListContainer = React.createClass({
  getInitialState: function() {
    return {data: null};
  },
  componentWillMount: function() {
    var _data = JSON.parse(localStorage.getItem("default_user"));
    this.setState({data: _data});
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
        <div className="modal">
          <div className={_className + " event-details modal-content"}>
            <p className="event-name"> 
              {this.props.event.name} 
            </p>
            <p className="event-time"> 
              {new Date(this.props.event.startTime).toLocaleString()} 
            </p>
            <div className="event-attribute"> 
              <div className="event-label"> Location: </div>
              <div className="event-value"> {this.props.event.location} </div>
            </div>
            <div className="event-attribute"> 
              <div className="event-label"> End time: </div>
              <div className="event-value"> {new Date(this.props.event.endTime).toLocaleString()} </div>
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
        </div>
      );
    };
    return (
      <li className={_className} onClick={this.handleClick}>
        <p className="event-name"> 
          {this.props.event.name} 
        </p>
        <p className="event-time"> 
          {new Date(this.props.event.startTime).toLocaleString()} 
        </p>
        {eventDetail}
      </li>
    );
  },
});

module.exports = EventListContainer;
