import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventEditForm from './EventEditForm/';

class HostEditingInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      event: this.props.event,
      updating: false,
      editForm: false,
      deleteConfirm: false,
    };
    this.renderForm = this.renderForm.bind(this);
  }

  deleteEvent = () => {
    return () => {
      console.log('Returning deletion vibes');
      this.setState({
        editing: true,
        deleteConfirm: true,
      });
    };
  }

  renderForm = () => {
    console.log('Render form triggered');
    return () => {
      this.setState({
        editing: true,
        editForm: true,
      });
    };
  }

  render() {
    return (
      <div>
        {this.state.editing
          ?
          <EventEditForm />
          :
          <div>
            <a className="waves-effect waves-light btn" onClick={this.renderForm()}>Edit</a><a className="waves-effect waves-light btn" onClick={this.deleteEvent()}>Delete</a>
          </div>
        }
      </div>
    );
  }
}

HostEditingInterface.propTypes = {
  event: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    scheduledDate: PropTypes.string.isRequired,
    scheduledTime: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    slots: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default HostEditingInterface;
