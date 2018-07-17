import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventForm from './EventForm';
import { getEvent } from '../../../../EventReducer';
import { updateEventRequest } from '../../../../EventActions';

/* eslint-disable react/prop-types */
class FormEditWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event,
      formValid: true,
      validByField: {
        eventNameValid: true,
        notesValid: true,
        gameValid: true,
        zipcodeValid: true,
        formValid: true,
        gameTypeValid: true,
        addressValid: true,
        cityValid: true,
        stateValid: true,
        scheduledDateValid: true,
        scheduledTimeValid: true,
        slotsValid: true,
      },
    };
  }

  parentSubmissionHandler = (updatedEvent) => {
    this.props.dispatch(updateEventRequest(this.props.event.cuid, updatedEvent));
    this.props.toggleEditingMode()();
  }

  render() {
    return (
      <div>
        <EventForm
          parentSubmissionHandler={this.parentSubmissionHandler}
          event={this.props.event}
          initialState={this.state.validByField}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    event: getEvent(state, props.eventID),
    user: state.authUser.data[0].uid,
  };
}

export default connect(mapStateToProps)(FormEditWrap);
