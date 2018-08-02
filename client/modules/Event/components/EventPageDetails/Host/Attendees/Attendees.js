import React from 'react';

/* eslint-disable react/prop-types */

let attendeeTitleStyle = {
  marginBottom: 5,
  fontSize: 20,
  color: "#888",
}


const Attendees = ({ attendees }) => (
  <div>
    <p style={attendeeTitleStyle}>
      {attendees.length ? 'Signed Up Users' : ''}
    </p>
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
