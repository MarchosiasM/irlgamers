import React, { Component } from 'react';
import EventDetails from '../EventDetails';
import EventEditing from './Editing/';
import { deleteEventRequest } from '../../../EventActions';
import Delete from './Delete/';

/* eslint-disable react/prop-types */

/* This component renders out all the options for hosts. Hosts
  can delete and edit at the time of writing this comment. */
class OwnerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      deleteConfirm: false,
    };
  }

  toggleEditingMode = () => {
    return () => {
      if (this.state.editing) {
        this.setState({ editing: false });
        return false;
      }
      this.setState({ editing: true });
      return true;
    };
  }

  deleteConfirm = () => {
    return () => {
      this.props.dispatch(deleteEventRequest(this.props.event.cuid));
    };
  }

  deleteToggle = () => {
    if (this.state.deleteMode) {
      return () => {
        this.setState({
          deleteMode: false,
        });
      };
    }
    return () => {
      this.setState({
        deleteMode: true,
      });
    };
  }

  render() {
    return (
      <div>
        {(this.state.editing)
          ?
          <div>
            <EventEditing
              eventID={this.props.event.cuid}
              dispatch={this.props.dispatch}
              toggleEditingMode={this.toggleEditingMode}
            />
          </div>
          :
          <div>
            <EventDetails
              event={this.props.event}
              styles={this.props.styles}
            />
            This is the owners page.
          </div>
        }
        <a
          className="waves-effect waves-light btn"
          onClick={this.toggleEditingMode()}
        >
          Edit
        </a>
        <Delete
          deleteToggle={this.deleteToggle}
          deleteMode={this.state.deleteMode}
          deleteConfirm={this.deleteConfirm}
        />
      </div>
    );
  }
}

export default OwnerDetails;
