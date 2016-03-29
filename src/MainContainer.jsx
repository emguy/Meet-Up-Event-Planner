var React = require("react");
var EventListContainer = require("./EventListContainer.jsx");

var MainContainer = React.createClass({
  render: function() {
    return (
    <div className="container-fluid">
      <header className="row"> this is my header </header>
      <EventListContainer /> 
      <footer className="row"> this is my footer </footer>
    </div>
    );
  },
});

module.exports = MainContainer;
