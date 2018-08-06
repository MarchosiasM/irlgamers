import React from 'react';
import Host from '../Host/HostDetails';
import Guest from '../Guest/Guest';

/* eslint-disable react/prop-types */
/* This component differentiates between the owner of an event and a guest.
  If they're the owner, they're presented with the owner's interface. Guests
  are further differentiated down the line as either members or non-members */
const HostGuest = ({ host, event, styles, dispatch, addAttendee, isFull, member }) => (
  <div>
    {
      host
        ?
        <div>
          <Host
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

export default HostGuest;
