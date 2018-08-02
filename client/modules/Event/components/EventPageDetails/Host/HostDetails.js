import React, { Component } from 'react';
import EventDetails from '../EventDetails';
import FormEditWrap from './FormEditWrap/FormEditWrap';
import { deleteEventRequest } from '../../../EventActions';
import Delete from './Delete/Delete';
import Attendees from './Attendees/Attendees';
import styles from './HostDetails.css'

//CustomCSS
let buttonpad = {
  margin: 5 
}

/* eslint-disable react/prop-types */

/* This component renders out all the options for hosts. Hosts
  can delete and edit at the time of writing this comment. */
class HostDetails extends Component {
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
      <div className="row">
      <div className="section">
          <div className={`${styles['single-post']} ${styles['post-detail']}`}>
            <h3 className={styles['post-title']}>
              {this.props.event.eventName}
            </h3>
            <p className={`${styles['post-subtitle']}`}>
            {this.props.event.game} Hosted by {this.props.event.ownerName}
            </p>
            <div className="divider"></div>
          </div>
        </div>

        {(this.state.editing)
          ?
          <div>
            <FormEditWrap
              eventID={this.props.event.cuid}
              dispatch={this.props.dispatch}
              toggleEditingMode={this.toggleEditingMode}
            />
          </div>
          :
          <div className="col s12 m6">
            <EventDetails
              event={this.props.event}
              styles={this.props.styles}
            />
          </div>
        }
        <div className="col s12 m6">
        <div className={styles['attendee-header']}>
          <Attendees attendees={this.props.event.attendeeNames} attendeeuid={this.props.event.attendees} />
          </div>
          </div>
          </div>
          <div className="row">
          <div className="col s12 m6">
        {this.state.editing ? '' :
          <a
            className="waves-effect waves-light btn"
            onClick={this.toggleEditingMode()}
            style={buttonpad}
          >
            Edit
          </a>
        }
        <Delete
          deleteToggle={this.deleteToggle}
          deleteMode={this.state.deleteMode}
          deleteConfirm={this.deleteConfirm}
        />
        {console.log(this.props.event.attendeeNames)}
        </div>
        
      </div>
      </div>
    );
  }
}

export default HostDetails;
