import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../../../EventReducer';


class EventEditForm2 extends Component {
  constructor() {
    super();
    this.state = {
      event: {},
      user: '',
    };
  }

  render() {
    return (
      <div>
      {console.log(this.state)}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  console.log(state);
  console.log(getEvent(state, props.eventID));
  return {
    event: getEvent(state, props.eventID),
    user: state.authUser.data[0].uid,
  };
}

export default connect(mapStateToProps)(EventEditForm2);
