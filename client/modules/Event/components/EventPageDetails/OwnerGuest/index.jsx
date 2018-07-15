import React from 'react';
import Owner from '../Owner';
import Guest from '../Guest';

/* eslint-disable react/prop-types */
/* This component differentiates between the owner of an event and a guest.
  If they're the owner, they're presented with the owner's interface. Guests
  are further differentiated down the line as either members or non-members */
const OwnerGuest = ({ owner, event, styles, dispatch, addAttendee, isFull, member }) => (
  <div>
    {
      owner
        ?
        <div>
          <Owner
            event={event}
            styles={styles}
            dispatch={dispatch}
          />
        </div>
        :
        <div>
          <Guest
            event={event}
            addAttendee={addAttendee}
            isFull={isFull}
            styles={styles}
            member={member}
            slots={event.slots}
          />
        </div>
    }
  </div>
);

export default OwnerGuest;
