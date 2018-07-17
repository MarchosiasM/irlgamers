import React from 'react';

/* eslint-disable react/prop-types */
const Attendees = ({ attendees }) => (
  <div>
    These users are currently subscribed to your event!
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
