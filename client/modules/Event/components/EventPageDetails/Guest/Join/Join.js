import React from 'react';
import styles from './join.css'

/* eslint-disable react/prop-types */
const Join = ({ attendeesCount, isFull, addAttendee, slots}) => (
  <div>
    {
      isFull
        ?
        'This event is full, I\'m sorry'
        :
        <div className="row">
          <div className="col s12 m6">
          <span className={styles['attendee-count-join']}>{`${attendeesCount} / ${slots}`}</span>
          <a className="waves-effect waves-light btn" onClick={addAttendee} >
            Join
          </a>
          </div>
        </div>
    }
  </div>
);

export default Join;
