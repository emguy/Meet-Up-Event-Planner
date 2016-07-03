var React = require('react');
var Modal = require('../../ui/Modal.jsx');
var Button = require('../../ui/Button.jsx');



/** 
 * this class renders a modal box showing the event details
 *
 * @prop visbile {function} - show or hide this component
 * @prop closeMe {function} - the handler for the close button
 * @prop event {object} - the event object
 */
var EventCard = React.createClass({
  /* it accepts three props */
  propTypes: {
    showDeleteConfirmation: React.PropTypes.bool.isRequired,
    hideDeleteConfirmation: React.PropTypes.func.isRequired,
    unhideDeleteConfirmation: React.PropTypes.func.isRequired,
    visible: React.PropTypes.bool.isRequired,
    event: React.PropTypes.object.isRequired,
    closeMe: React.PropTypes.func.isRequired,
    doDeleteEvent: React.PropTypes.func.isRequired
  },

  /* the render method */
  render: function() {
    if (!this.props.visible) {
      return false;
    }
    var content = (<ModalContent event={this.props.event} />);
    if (this.props.showDeleteConfirmation) {
      content = (
        <div className='event-content'>
          <p className='comfirmation'>
            Are you sure that you want to delete this event card ?
          </p>
        </div>
      );
    }
    return (
      <Modal className={'event-card'} visible={this.props.visible} 
        closeMe={this.props.closeMe}>
        <ModalHeader eventName={this.props.event.name} 
          eventTime={this.props.event.startTime} />
          {content}
          <ModalFooter showDeleteConfirmation={this.props.showDeleteConfirmation} 
            doDeleteEvent={this.props.doDeleteEvent}
            closeMe={this.props.closeMe}
            hideDeleteConfirmation={this.props.hideDeleteConfirmation}
            unhideDeleteConfirmation={this.props.unhideDeleteConfirmation}/>
      </Modal>
    );
  }
});



/** 
 * this class renders the header part of the event  modal box
 *
 * @prop eventName {string} - the name of the event
 * @prop eventTime {string} - the starting time of the event
 */
var ModalHeader = React.createClass({
  /* it accepts two props */
  propTypes: {
    eventName: React.PropTypes.string.isRequired,
    eventTime: React.PropTypes.string.isRequired
  },

  /* the render method */
  render: function() {
    return (
      <div className='event-header'>
        <p className='event-name'> 
          {this.props.eventName} 
        </p>
        <p className='event-time'> 
          {new Date(this.props.eventTime).toLocaleString()} 
        </p>
      </div>
    );
  }
});



/** 
 * this class renders the footer part of the event modal box
 */
var ModalFooter = React.createClass({
  // it does not accept arguments
  propTypes: {
    closeMe: React.PropTypes.func.isRequired,
    showDeleteConfirmation: React.PropTypes.bool.isRequired,
    hideDeleteConfirmation: React.PropTypes.func.isRequired,
    unhideDeleteConfirmation: React.PropTypes.func.isRequired
  },
  render: function() {
    var controlButtons = (
      <ul>
        <Button tooltip='Delete' action={this.props.unhideDeleteConfirmation}> 
          <i className='fa fa-trash-o'></i> 
        </Button>
        <Button tooltip='Edit' action='#'> 
          <i className='fa fa-pencil'></i> 
        </Button>
      </ul>
    );
    if (this.props.showDeleteConfirmation) {
      controlButtons = (
        <ul>
          <Button tooltip='Delete' action={this.props.doDeleteEvent}> 
            <i className='fa fa-trash-o'></i> 
          </Button>
          <Button tooltip='Cancel' action={this.props.hideDeleteConfirmation}> 
            <i className='fa fa-close'></i> 
          </Button>
        </ul>
      );
    }
    return (
      <div className='event-footer'>
        {controlButtons}
      </div>
    );
  }
});



/**
 * this class renders the main content of the event modal box
 *
 * @prop event {object} - the event object
 *
 */
var ModalContent = React.createClass({
  /* it accepts only one prop */
  propTypes: {
    event: React.PropTypes.object.isRequired
  },

  /* the render method */
  render: function() {
    return (
      <div className='event-content'>
        <div className='event-attribute'> 
          <p className='event-label'> Location: </p>
          <p className='event-value'> 
            {this.props.event.location || 'N/A'} 
          </p>
        </div>

        <div className='event-attribute'> 
          <p className='event-label'> End time: </p>
          <p className='event-value'> 
            {new Date(this.props.event.endTime).toLocaleString() || 'N/A'} 
          </p>
        </div>

        <div className='event-attribute'> 
          <p className='event-label'> Host: </p>
          <p className='event-value'> 
            {this.props.event.host || 'N/A'} 
          </p>
        </div>

        <div className='event-attribute'> 
          <p className='event-label'> Type: </p>
          <p className='event-value'> 
            {this.props.event.type || 'N/A'} 
          </p>
        </div>

        <div className='event-attribute'> 
          <p className='event-label'> Guests: </p>
          <p className='event-value'> 
            {this.props.event.guest || 'N/A'} 
          </p>
        </div>
      </div>
    );
  }
})



/* we only export the top most conponent */
module.exports = EventCard;
