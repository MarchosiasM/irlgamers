import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvent } from '../../../EventActions';
import { getEvent } from '../../../EventReducer';


class EventEditForm2 extends Component {
  constructor() {
    super();
    this.state = {
      init: false,
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s5">
                <input id="event-name" placeholder="Game Name" type="text" className="validate" />
                <label htmlFor="event-name">
                  <i className="material-icons">
                    extension
                  </i>
                  {eventName}
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="address" placeholder="Address" type="text" className="validate" />
                <label htmlFor="address">{address}</label>
              </div>
              <div className="input-field col s3">
                <input id="city" placeholder="City" type="text" className="validate" />
                <label htmlFor="city">{city}</label>
              </div>
              <div className="input-field col s3">
                <input id="state" placeholder="State" type="text" className="validate" />
                <label htmlFor="state">{state}</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="time" placeholder="Time" type="time" className="validate" />
                <label htmlFor="time">{time}</label>
              </div>
              <div className="input-field col s3">
                <input id="date" type="date" className="validate" />
                <label htmlFor="date">{date}</label>
              </div>
              <div className="input-field col s3">
                <input id="slots" placeholder="Slots" type="number" className="validate" />
                <label htmlFor="slots">{slots}</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8">
                <input id="notes" placeholder="Notes" type="text" className="validate" />
                <label htmlFor="notes">
                  <i className="material-icons">
                    edit
                  </i>{notes}</label>
              </div>
            </div>
          </form>
        </div></div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    event: getEvent(state, props.params.cuid),
    user: state.authUser.data[0].uid,
  };
}

export default connect(mapStateToProps)(EventEditForm2);
