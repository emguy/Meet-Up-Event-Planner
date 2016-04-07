var React = require("react");

/** 
 * this class renders a button with desired functions
 *
 * @prop className {string} - additional class names
 * @prop id {string} - the id name
 * @prop tooltip {string} - the tooltip text
 * @prop action {function/string} - the on-click handler
 */
var Button = React.createClass({
  /* it takes two props, none of them are required */
  prototypes: {
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    tooltip: React.PropTypes.string,
    action: React.PropTypes.oneOfType([React.PropTypes.string,, React.PropTypes.func]),
  },

  /* we hide the tooltip box by default */
  getInitialState: function() {
    return {showToolTip: false};
  },

  /* set the state for `showToolTip` to true */
  unhideTooltip: function() {
    if (!this.state.showToolTip) {
      this.setState({showToolTip: true});
    }
  },

  /* set the state for `showToolTip` to false */
  hideTooltip: function() {
    if (this.props.tooltip && this.state.showToolTip) {
      this.setState({showToolTip: false});
    }
  },

  /* event handler for onClick */
  handleClick: function() {
    if (typeof this.props.action === "string") {
      window.location.href = this.props.action;
    } 
    if (typeof this.props.action === "function") {
      this.props.action();
    }
  },

  /* the render method */
  render: function() {
    var tooltip = <span>&nbsp;</span>;
    if (this.state.showToolTip) {
      tooltip = this.props.tooltip;
    };
    return (
      <div className={"button " + this.props.className} 
        id = {this.props.id}
        onMouseEnter={this.unhideTooltip} 
        onMouseLeave={this.hideTooltip} 
        onClick={this.handleClick}>
        <div>
          {this.props.children}
        </div>
        <div className="tooltip-text">{tooltip}</div>
      </div>
    );
  },
});

module.exports = Button;

