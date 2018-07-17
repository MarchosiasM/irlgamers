import React, { Component } from 'react';
import EventForm from '../EventPageDetails/Host/FormEditWrap/EventForm/EventForm';

/* eslint-disable react/prop-types */
export class FormCreateWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
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

  componentDidMount() {
  }

  parentSubmissionHandler = (createdEvent) => {
    console.log('Created event is, ', createdEvent);
    if (
      createdEvent.eventName &&
      createdEvent.gameType &&
      createdEvent.game &&
      createdEvent.address &&
      createdEvent.city &&
      createdEvent.state &&
      createdEvent.zipcode &&
      createdEvent.scheduledDate &&
      createdEvent.scheduledTime &&
      createdEvent.slots &&
      createdEvent.notes
    ) {
      console.log('Created event is, ', createdEvent);
      this.props.addEvent(
        createdEvent.eventName,
        createdEvent.gameType,
        createdEvent.game,
        createdEvent.address,
        createdEvent.city,
        createdEvent.state,
        createdEvent.zipcode,
        createdEvent.scheduledDate,
        createdEvent.scheduledTime,
        createdEvent.slots,
        createdEvent.notes,
        this.props.authUser.uid,
      );
    }
  }

  render() {
    const initializedEvent = {
      owner: this.props.authUser.uid,
      eventName: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      game: '',
      gameType: '',
      scheduledDate: '',
      scheduledTime: '',
      notes: '',
      cuid: '',
      slots: '',
      attendees: [],
    };

    return (
      <div>
        {this.props.authUser === null &&
          <div>
            <h1>You Must Sign In to Create an Event</h1>
          </div>
        }
        {this.props.showAddEvent ?
          <EventForm
            parentSubmissionHandler={this.parentSubmissionHandler}
            event={initializedEvent}
            initialState={this.state.validByField}
            formValidInitialize={false}
          />
          :
          ''
        }
      </div>
    );
  }
}

// FormCreateWrap.propTypes = {
//   addEvent: PropTypes.func.isRequired,
//   showAddEvent: PropTypes.bool.isRequired,
//   intl: intlShape.isRequired,
// };

export default FormCreateWrap;
