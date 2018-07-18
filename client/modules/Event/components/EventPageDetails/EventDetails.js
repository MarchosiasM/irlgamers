import React from 'react';
import moment from 'moment'

/* eslint-disable react/prop-types */
/* This is a very basic component that simply takes the event details
  and renders them onto the page. This component is used both in the
  guest view and the host view. Beyond rendering out the details of
  the event, it has no specific logic */

const EventDetails = ({ event, styles }) => (
  <div>
    <div className={`${styles['single-post']} ${styles['post-detail']}`}>
      <h3 className={styles['post-title']}>
        {event.eventName}
      </h3>
      <p className={styles['post-desc']}>
        {event.notes}
      </p>
      <p className={styles['post-desc']}>
        {event.address}
      </p>
      <p className={styles['post-desc']}>
        {`${event.city}, ${event.state} ${event.zipcode}`}
      </p>
      <p className={styles['post-desc']}>
        {moment(event.scheduledDate).format("MMM Do YY")}
      </p>
      <p className={styles['post-desc']}>
        {event.scheduledTime}
      </p>
      <p className={styles['post-desc']}>
      </p>
    </div>
  </div>
);

export default EventDetails;
