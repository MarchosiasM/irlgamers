import React, { Component } from 'react';
import FormErrors from '../FormErrors';

/* eslint-disable react/prop-types */

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
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
      formValid: '',
      validByField: '',
    };
  }
  /* eslint-disable react/no-did-mount-set-state */
  componentDidMount() {
    this.setState({
      event: this.props.event,
      validByField: this.props.initialState,
      formValid: this.props.formValidInitialize,
    });
    // const options = ''; // Options for the Date and TimePicker go here.
    // Still needs some work in rendering in mobile but works.
    // M.AutoInit();
    // document.addEventListener('DOMContentLoaded', () => {
    //   const elems = document.querySelectorAll('.datepicker');
    //   const instances = M.Datepicker.init(elems, options);
    // });
    // document.addEventListener('DOMContentLoaded', () => {
    //   const elems = document.querySelectorAll('.timepicker');
    //   const instances = M.Timepicker.init(elems, options);
    // });
  }

  onFocus = (event) => {
    event.target.select();
  }

  validateField = (fieldName, value) => {
    const fieldValidationErrors = this.state.formErrors;
    let {
      eventNameValid,
      zipcodeValid,
      notesValid,
      gameValid,
      gameTypeValid,
      cityValid,
      stateValid,
      scheduledDateValid,
      scheduledTimeValid,
      slotsValid,
      addressValid,
    } = this.state.validByField;

    switch (fieldName) {
      case 'eventName':
        eventNameValid = value.length > 5;
        fieldValidationErrors.eventName = eventNameValid ? '' : 'Your event name should be longer than 5 characters.';
        break;
      case 'notes':
        notesValid = value.length > 10;
        fieldValidationErrors.notes = notesValid ? '' : 'Please add more notes, draw them in!';
        break;
      case 'game':
        gameValid = value.length > 1;
        fieldValidationErrors.game = gameValid ? '' : 'Game is a requierd field! What are you playing?';
        break;
      case 'zipcode':
        zipcodeValid = value.length === 5;
        fieldValidationErrors.zipcode = zipcodeValid ? '' : 'A valid zipcode has five digits.';
        break;
      case 'gameType':
        gameTypeValid = value.length > 5;
        fieldValidationErrors.gameType = gameTypeValid ? '' : 'What sort of game are you playing?';
        break;
      case 'city':
        cityValid = value.length > 1;
        fieldValidationErrors.city = cityValid ? '' : 'In what city do you want to assemble your mighty party?';
        break;
      case 'state':
        stateValid = value.length > 1;
        fieldValidationErrors.state = stateValid ? '' : 'Please enter a valid US State.';
        break;
      case 'scheduledDate':
        scheduledDateValid = true;
        fieldValidationErrors.scheduledDate = scheduledDateValid ? '' : ' is invalid';
        break;
      case 'scheduledTime':
        scheduledTimeValid = true;
        fieldValidationErrors.scheduledTime = scheduledTimeValid ? '' : ' is invalid';
        break;
      case 'slots':
        slotsValid = value < 101 && value > 0;
        fieldValidationErrors.slots = slotsValid ? '' : 'We allow for up to 100 participants, but there must be at least one other for your game!';
        break;
      case 'address':
        addressValid = value.length > 1;
        fieldValidationErrors.address = addressValid ? '' : 'Please enter a valid address';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      eventNameValid,
      zipcodeValid,
      notesValid,
      gameValid,
      gameTypeValid,
      cityValid,
      stateValid,
      scheduledDateValid,
      scheduledTimeValid,
      slotsValid,
      addressValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.eventNameValid &&
        this.state.notesValid &&
        this.state.zipcodeValid &&
        this.state.gameValid &&
        this.state.gameTypeValid &&
        this.state.cityValid &&
        this.state.stateValid &&
        this.state.scheduledDateValid &&
        this.state.scheduledTimeValid &&
        this.state.slotsValid &&
        this.state.addressValid,
    });
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
    // Here's where we can insert some differentiation in how each
    // parent handles their submission of the form.
    this.props.parentSubmissionHandler(body);
  }

  render() {
    return (
      <div>
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
              maxLength="30"
              name="game"
              defaultValue={this.props.event.game}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Game Type
            <input
              maxLength="30"
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
              className="datepicker"
              name="scheduledDate"
              defaultValue={this.props.event.scheduledDate}
              type="date"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Time
            <input
              className="timepicker"
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
        <FormErrors formErrors={this.state.formErrors} />
      </div>
    );
  }
}

export default EventForm;
