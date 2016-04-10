var React = require("react");

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
    closeMe: React.PropTypes.func
  },

  /* the default style settings for the modal background */
  defaultModalStyle: {
    display: "block",
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%"
  },

  /* the render method */
  render: function() {
    if (!this.props.visible) {
      return false;
    }
    return (
      <div className={"modal " + this.props.className} 
        style={this.defaultModalStyle} onClick={this.props.closeMe}>
        <div className="modal-body" onClick={function(e) {if (e) {e.stopPropagation()}}}>
          <div className="modal-close" onClick={this.props.closeMe}> &#10006; </div>
          {this.props.children}
        </div>
      </div>
    );
  },
});
module.exports = Modal;

