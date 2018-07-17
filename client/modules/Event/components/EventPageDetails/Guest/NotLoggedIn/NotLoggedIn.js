import React from 'react';
import EventDetails from '../../EventDetails';

/* This view strips a lot of guest and member options from a page and an
invitation to log in to see more options */
/* eslint-disable react/prop-types */
const NotLoggedIn = ({ event, styles }) => (
  <div>
    <EventDetails event={event} styles={styles} />
    <p>
      Please log in to interact with other members!
    </p>
  </div>
);

export default NotLoggedIn;
