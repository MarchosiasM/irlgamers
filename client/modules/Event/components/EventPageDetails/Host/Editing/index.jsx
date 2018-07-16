import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormErrors from './FormErrors';
import { getEvent } from '../../../../EventReducer';
import { updateEventRequest } from '../../../../EventActions';

/* eslint-disable react/prop-types */

class EventEditForm extends Component {
  constructor() {
    super();
    this.state = {
      event: '',
      user: '',
      formErrors: {
        eventName: '',
        notes: '',
        game: '',
        gameType: '',
        address: '',
        city: '',
        zipcode: '',
        state: '',
        scheduledDate: '',
        scheduledTime: '',
        slots: '',
      },
      eventNameValid: true,
      notesValid: true,
      gameValid: true,
      zipcodeValid: true,
      formValid: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /* eslint-disable react/no-did-mount-set-state */
  componentDidMount() {
    this.setState({ event: this.props.event });
  }

  onFocus = (event) => {
    event.target.select();
  }

  validateField = (fieldName, value) => {
    const fieldValidationErrors = this.state.formErrors;
    let eventNameValid = this.state.eventNameValid;
    let zipcodeValid = this.state.zipcodeValid;
    let notesValid = this.state.notesValid;
    let gameValid = this.state.notesValid;

    switch (fieldName) {
      case 'eventName':
        eventNameValid = value.length > 5;
        fieldValidationErrors.eventName = eventNameValid ? '' : ' must be at least 5 characters long.';
        break;
      case 'notes':
        notesValid = value.length > 10;
        fieldValidationErrors.notes = notesValid ? '' : ' must have between 10 and 100 characters.';
        break;
      case 'game':
        gameValid = value.length > 1;
        fieldValidationErrors.game = gameValid ? '' : ' must have less than 20 characters';
        break;
      case 'zipcode':
        zipcodeValid = value.length === 5;
        fieldValidationErrors.zipcode = zipcodeValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({ formErrors: fieldValidationErrors,
      eventNameValid,
      notesValid,
      zipcodeValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.eventNameValid && this.state.notesValid && this.state.zipcodeValid && this.state.gameValid });
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const newState = Object.assign({}, this.state.event, { [name]: value });
    this.setState({ event: newState }, () => { this.validateField(name, value); });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const body = Object.assign({}, this.state.event);
    this.props.dispatch(updateEventRequest(this.props.event.cuid, body));
    this.props.toggleEditingMode()();
  }

  render() {
    return (
      <div>
        <FormErrors formErrors={this.state.formErrors} />
        <form onSubmit={this.handleSubmit}>
          <label>Event Name
            <input
              required
              maxLength="30"
              name="eventName"
              defaultValue={this.props.event.eventName}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Notes
            <input
              maxLength="100"
              name="notes"
              defaultValue={this.props.event.notes}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Game
            <input
              maxLength="15"
              name="game"
              defaultValue={this.props.event.game}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Game Type
            <input
              max="99999"
              name="gameType"
              defaultValue={this.props.event.gameType}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Address
            <input
              maxLength="40"
              name="address"
              defaultValue={this.props.event.address}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>City
            <input
              maxLength="15"
              name="city"
              defaultValue={this.props.event.city}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>State
            <input
              maxLength="2"
              name="state"
              defaultValue={this.props.event.state}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Zip
            <input
              max="99999"
              maxLength="5"
              name="zipcode"
              defaultValue={parseInt(this.props.event.zipcode, 10)}
              type="number"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Date
            <input
              min={Date.now()}
              name="scheduledDate"
              defaultValue={this.props.event.scheduledDate}
              type="date"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Time
            <input
              name="scheduledTime"
              defaultValue={this.props.event.scheduledTime}
              type="time"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Slots
            <input
              max="100"
              name="slots"
              defaultValue={parseInt(this.props.event.slots, 10)}
              type="number"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <input type="submit" value="Submit" className="waves-effect waves-light btn" onClick={this.handleSubmit} disabled={!this.state.formValid} />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  // console.log('Within your event edit form, state feteched, ', state);
  // console.log('Within your event edit form, you got an event, ', getEvent(state, props.eventID));
  return {
    event: getEvent(state, props.eventID),
    user: state.authUser.data[0].uid,
  };
}

export default connect(mapStateToProps)(EventEditForm);
