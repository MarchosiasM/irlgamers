import React from 'react';

/* eslint-disable react/prop-types */
const Join = ({ attendeesCount, isFull, addAttendee, slots }) => (
  <div>
    {
      isFull
        ?
        'This event is full, I\'m sorry'
        :
        <div>
          {`${attendeesCount} / ${slots}`}
          <a className="waves-effect waves-light btn" onClick={addAttendee} >
            Join
          </a>
        </div>
    }
  </div>
);

export default Join;
