var React = require("react");
var utils = require("./utils.js");

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

/** 
 * this class renders a modal box showing the event details
 *
 * @prop visible {boolean} - show or hide this component
 * @prop closeMe {function} - the handler for the close button
 */
var Modal = React.createClass({
  /* it accepts two props */
  propTypes: {
    visible: React.PropTypes.bool.isRequired,
    closeMe: React.PropTypes.func,
  },

  /* the default style settings for the modal background */
  defaultModalStyle: {
    display: "block",
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },

  /* the render method */
  render: function() {
    if (!this.props.visible) {
      return false;
    }
    return (
      <div className={"modal " + this.props.className} 
        style={this.defaultModalStyle} onClick={this.props.closeMe}>
        <div className="modal-body" onClick={utils.doNothing}>
          <div className="modal-close" onClick={this.props.closeMe}> &#10006; </div>
          {this.props.children}
        </div>
      </div>
    );
  },
});

module.exports.Button = Button;
module.exports.Modal = Modal;

