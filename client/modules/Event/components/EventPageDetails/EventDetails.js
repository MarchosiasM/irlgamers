import React from 'react';
import moment from 'moment'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faClock, faCalendarAlt, faStickyNote}  from '@fortawesome/fontawesome-free-solid/'

/* eslint-disable react/prop-types */
/* This is a very basic component that simply takes the event details
  and renders them onto the page. This component is used both in the
  guest view and the host view. Beyond rendering out the details of
  the event, it has no specific logic */

const EventDetails = ({ event, styles }) => {
  let nextDay = moment(event.scheduledDate).add(1, 'days').calendar()
  return (
    <div>
      
      

      
      <div className="col s12 m6">
     
        <p className={styles['post-desc']}>
        <FontAwesomeIcon icon={faCalendarAlt} color="black" /><span className={styles['span-padding']}> {moment(nextDay).format("MMM Do YY")} </span>
        </p>
        <p className={styles['post-desc']}>
        <FontAwesomeIcon icon={faClock} color="black" /><span className={styles['span-padding']}>{event.scheduledTime}</span>
        </p>

        
        <p className={styles['post-desc']}>
          <FontAwesomeIcon icon={faMapMarkerAlt} color="black" /><span className={styles['span-padding']}> {event.address}</span>
        </p>
        <p className={styles['post-desc-address']} >
        <span className={styles['span-padding']}> {`${event.city}, ${event.state} ${event.zipcode}`}</span>
        </p>
       
        <p className={styles['post-desc']}>
        </p>
        <p className={styles['post-desc']}>
        <FontAwesomeIcon icon={faStickyNote} color="black" /><span className={styles['span-padding']}>&quot;{event.notes}&quot;</span>
        </p>
      </div>
    </div>

    
  );
}
export default EventDetails;
