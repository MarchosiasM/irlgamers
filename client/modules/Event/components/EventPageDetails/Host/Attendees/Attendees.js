import React from 'react';

/* eslint-disable react/prop-types */
const Attendees = ({ attendees }) => (
  <div>
      {attendees.length ? 'These users are currently subscribed to your event!' : ''}
    {
      attendees.map((user) => {
        return (
          <div>
            {user}
          </div>
        );
      })
    }
  </div>
);

export default Attendees;
