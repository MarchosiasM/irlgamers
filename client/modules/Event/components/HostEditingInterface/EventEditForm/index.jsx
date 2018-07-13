import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../../../EventReducer';
import { updateEventRequest } from '../../../EventActions';

/* eslint-disable react/prop-types */

class EventEditForm2 extends Component {
  constructor() {
    super();
    this.state = {
      event: {},
      user: '',
    };
  }

  updateSubmit = () => {
    const body = {
      ...this.props.event,
      notes: `updated notes ${Date.now()}`,
    };
    // console.log(body);
    // console.log('Submit Button activated');
    // console.log('The state at the widget level ', this.props.event);
    // console.log('CUID sent', this.props.event.cuid);
    return () => {
      this.props.dispatch(updateEventRequest(this.props.event.cuid, body));
    };
  }

  render() {
    return (
      <div>
    {/* console.log(this.state) */}
        <a className="waves-effect waves-light btn" onClick={this.updateSubmit()}>Submit an Update</a>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  console.log('Within your event edit form, state feteched, ', state);
  console.log('Within your event edit form, you got an event, ', getEvent(state, props.eventID));
  return {
    event: getEvent(state, props.eventID),
    user: state.authUser.data[0].uid,
  };
}

export default connect(mapStateToProps)(EventEditForm2);
