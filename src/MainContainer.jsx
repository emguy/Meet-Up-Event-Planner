var React = require("react");
var EventListContainer = require("./EventListContainer.jsx");

var MainContainer = React.createClass({
  render: function() {
    return (
    <div class="container">
      <header> this is my header blah blah blah </header>
      <main> <EventListContainer /> </main>
      <footer> this is my footer </footer>
    </div>
    );
  },
});

module.exports = MainContainer;
