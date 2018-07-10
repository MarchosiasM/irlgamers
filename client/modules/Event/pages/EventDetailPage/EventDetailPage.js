import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import HostEditingInterface from '../../components/HostEditingInterface/';

// Import Style
import styles from '../../components/EventListItem/EventListItem.css';

// Import Actions
import { fetchEvent } from '../../EventActions';

// Import Selectors
import { getEvent } from '../../EventReducer';

export function EventDetailPage(props) {
  const numAttendees = props.event.attendees.length;
  let isFull = false;
  if (props.event.slots - numAttendees <= 0) {
    isFull = true;
  }
  const addAttendee = (id) => {
    // Return a function, probably
  };

  const ifUserOwns = (id) => {
    return (id === props.user);
  };

  return (
    <div>
      <Helmet title={props.event.eventName} />

      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.event.eventName}</h3>
        {/* <p className={styles['author-name']}>by {props.event.owner}</p> */}
        <p className={styles['post-desc']}>{props.event.notes}</p>

        <p className={styles['post-desc']}>
          {props.event.address}
        </p>
        <p className={styles['post-desc']}>
          {`${props.event.city}, ${props.event.state} ${props.event.zipcode}`}
        </p>
        <p className={styles['post-desc']}>{props.event.scheduledDate}</p>
        <p className={styles['post-desc']}>{props.event.scheduledTime}</p>
        <p className={styles['post-desc']}>
          {isFull
            ?
            'SORRY THIS EVENT IS FULL'
            :
            (`${numAttendees} / ${props.event.slots}`)
          }
        </p>
        {ifUserOwns(props.event.owner)
          ?
          <HostEditingInterface />
          :
          isFull
            ? ''
            :
            <a className="waves-effect waves-light btn" onClick={addAttendee}>JOIN</a>}
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
EventDetailPage.need = [(params) => {
  return fetchEvent(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    event: getEvent(state, props.params.cuid),
    user: state.authUser.data[0].uid,
  };
}

EventDetailPage.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    gameType: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string,
    scheduledDate: PropTypes.string.isRequired,
    scheduledTime: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    slots: PropTypes.number.isRequired,
  }),
};

export default connect(mapStateToProps)(EventDetailPage);
