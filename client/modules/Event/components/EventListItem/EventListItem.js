import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

// Import Style
import styles from './EventListItem.css';

function EventListItem(props) {
  return (
    <div>
      
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="http://atomicgametheory.com/wp-content/uploads/catan.jpg" />
              <span className={`card-title`}>
                {props.event.eventName}
              </span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <Link to={`/games/${props.event.slug}-${props.event.cuid}`} >
                view this event
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className={styles['single-post']}>
        <h3 className={styles['post-title']}>
          <Link to={`/games/${props.event.slug}-${props.event.cuid}`} >
            {props.event.eventName}
          </Link>
        </h3>
        <p className={styles['author-name']}>
        {' by '}
          <Link to={`/profile/${props.event.owner}`}>
            {props.event.ownerName}
          </Link>
        </p>
        <p className={styles['post-desc']}>{props.event.game}</p>
        <p className={styles['post-desc']}>{moment(props.event.scheduledDate).format('MMM Do YYYY')}</p>
        <p className={styles['post-desc']}>{props.event.scheduledTime}</p>
        <p className={styles['post-desc']}>{props.event.attendees.length}/{props.event.slots}</p>
        <p className={styles['post-desc']}>{props.event.notes}</p>
        <hr className={styles.divider} />
      </div>

    </div>
  );
}

EventListItem.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    scheduledDate: PropTypes.string.isRequired,
    scheduledTime: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    slots: PropTypes.number.isRequired,
    ownerName: PropTypes.string.isRequired,
    attendees: PropTypes.array.required,
  }).isRequired,
  onDelete: PropTypes.func.isRequired, // Not In Use - Rob, will delete after testing.
};

export default EventListItem;
