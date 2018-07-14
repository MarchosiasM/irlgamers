import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../../../EventReducer';
import { updateEventRequest } from '../../../EventActions';

/* eslint-disable react/prop-types */

class EventEditForm2 extends Component {
  constructor() {
    super();
    this.state = {
      event: '',
      user: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 /* eslint-disable react/no-did-mount-set-state */
  componentDidMount() {
    this.setState({ event: this.props.event });
    console.log('state, ', this.state.event);
    console.log('props event, ', this.props.event);
  }

  onFocus = (event) => {
    event.target.select();
  }


  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const newState = Object.assign({}, this.state.event, { [name]: value });
    this.setState({ event: newState });
  }

  handleSubmit = () => {
    const body = Object.assign({}, this.state.event);
    return () => {
      this.props.dispatch(updateEventRequest(this.props.event.cuid, body));
    };
  }

  render() {
    return (
      <div>
        <form>
          <label>Event Name
            <input
              name="eventName"
              defaultValue={this.props.event.eventName}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Notes
            <input
              name="notes"
              defaultValue={this.props.event.notes}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Game
            <input
              name="game"
              defaultValue={this.props.event.game}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Game Type
            <input
              name="gameType"
              defaultValue={this.props.event.gameType}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Address
            <input
              name="address"
              defaultValue={this.props.event.address}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>City
            <input
              name="city"
              defaultValue={this.props.event.city}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>State
            <input
              name="state"
              defaultValue={this.props.event.state}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Zip
            <input
              name="zipcode"
              defaultValue={this.props.event.zipcode}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Date
            <input
              name="scheduledDate"
              defaultValue={this.props.event.scheduledDate}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Time
            <input
              name="scheduledTime"
              defaultValue={this.props.event.scheduledTime}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
          <label>Slots
            <input
              name="slots"
              defaultValue={this.props.event.slots}
              type="text"
              onChange={this.handleChange}
              onFocus={this.onFocus}
            />
          </label>
        </form>
        <a className="waves-effect waves-light btn" onClick={this.handleSubmit()}>Submit an Update</a>
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

export default connect(mapStateToProps)(EventEditForm2);
