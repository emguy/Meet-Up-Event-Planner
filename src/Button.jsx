var React = require("react");

var Button = React.createClass({
  getInitialState: function() {
    return {showToolTip: false};
  },
  prototypes: {
    tooltip: React.PropTypes.string,
    action: React.PropTypes.oneOfType([React.PropTypes.string,, React.PropTypes.func]),
  },
  displayTooltip: function() {
    if (!this.state.showToolTip) {
      this.setState({showToolTip: true});
    }
  },
  hideTooltip: function() {
    if (this.props.tooltip && this.state.showToolTip) {
      this.setState({showToolTip: false});
    }
  },
  handleClick: function() {
    if (typeof this.props.action === "string") {
      window.location.href = this.props.action;
    } 
  },
  render: function() {
    var tooltip = <span>&nbsp;</span>;
    if (this.state.showToolTip) {
      tooltip = this.props.tooltip;
    };
    return (
      <div className={"button " + this.props.className} onMouseEnter={this.displayTooltip} onMouseLeave={this.hideTooltip} onClick={this.handleClick}>
        <div>
          {this.props.children}
        </div>
        <div className="tooltip-text">{tooltip}</div>
      </div>
    );
  },
});

module.exports = Button;

