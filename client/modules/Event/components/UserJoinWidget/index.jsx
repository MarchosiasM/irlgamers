import React from 'react';
/* eslint-disable react/prop-types */
const UserJoinWidget = ({ member, attendeesCount, slotsCount, full, addAttendee }) => (
  <div>
    {member
      ?
      <div>
        You're a member of this event
      </div>
      :
      ''}
    <div />
    {full
      ?
      <div>
        This event is full.
      </div>
      :
      member
        ?
        ''
        :
        <div>
          {attendeesCount} / {slotsCount}
          <a className="waves-effect waves-light btn" onClick={addAttendee}>JOIN</a>
        </div>
    }
  </div>
);

export default UserJoinWidget;
