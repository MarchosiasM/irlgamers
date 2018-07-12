import React, { Component } from 'react';
import EventEditForm from './EventEditForm/';
import { deleteEventRequest } from '../../EventActions';

/* eslint-disable react/prop-types */
class HostEditingInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event,
      updating: false,
      editForm: false,
      deleteConfirm: false,
    };
    this.renderForm = this.renderForm.bind(this);
  }

  deleteCancel = () => {
    return () => {
      this.setState({ deleteConfirm: false });
    };
  }

  deleteConfirm = () => {
    return () => {
      this.props.dispatch(deleteEventRequest(this.state.event.cuid));
    };
  }

  deleteEvent = () => {
    return () => {
      this.setState({
        deleteConfirm: true,
      });
    };
  }

  renderForm = () => {
    return () => {
      this.setState({
        editForm: true,
      });
    };
  }

  render() {
    return (
      <div>
        {// Fuck you I love nesting ternarys
          /* eslint-disable no-nested-ternary */
          this.state.editForm
            ?
            <EventEditForm eventID={this.state.event.cuid} dispatch={this.props.dispatch} />
            :
            this.state.deleteConfirm
              ?
              <div>
                "Delete, are you sure?"
                <a className="waves-effect waves-light btn" onClick={this.deleteConfirm()}>I'm sure</a>
                <a className="waves-effect waves-light btn" onClick={this.deleteCancel()}>Nevermind</a>
              </div>
              :
              <div>
                <a
                  className="waves-effect waves-light btn"
                  onClick={this.renderForm()}
                >
                Edit
                </a>
                <a
                  className="waves-effect waves-light btn"
                  onClick={this.deleteEvent()}
                >
                Delete
                </a>
              </div>
        }
      </div>
    );
  }
}

// HostEditingInterface.propTypes = {
//   event: PropTypes.objectOf(PropTypes.shape({
//     eventName: PropTypes.string.isRequired,
//     game: PropTypes.string.isRequired,
//     scheduledDate: PropTypes.string.isRequired,
//     scheduledTime: PropTypes.string.isRequired,
//     notes: PropTypes.string.isRequired,
//     slots: PropTypes.number.isRequired,
//     owner: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     cuid: PropTypes.string.isRequired,
//   })).isRequired,
// };

export default HostEditingInterface;
