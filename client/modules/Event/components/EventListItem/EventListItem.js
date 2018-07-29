import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import images from './stockimages.js';

// Import Style
import styles from './EventListItem.css';

function EventListItem(props) {
  let nextDay = moment(props.event.scheduledDate).add(1, 'days').calendar()
  return (
      
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src={images[Math.floor(Math.random() * images.length)].image} />
              <span className={`card-title ${styles['card-title-banner']}`}>
                <span className={styles['event-name']}>{props.event.eventName}</span>
                <span className={styles['game-name']}><em>{props.event.game}</em></span>
              </span>
            </div>
            <div className="card-content">
              <div className={styles['author-name']}>
              {' Created by: '}
                <Link className={styles['link']} to={`/profile/${props.event.owner}`}>
                  {props.event.ownerName}
                </Link>
              </div>
              <div className={styles['post-desc']}>{moment(nextDay).format('MMM Do YY')}  |   {props.event.scheduledTime}</div>
              <div className={styles['post-desc']}><span className={styles['attendee-count']}>{props.event.attendees.length}</span> of <span className={styles['seat-count']}>{props.event.slots}</span> seats filled</div>
              <div className={styles['post-desc']}><em>{props.event.notes}</em></div>
            </div>
            <div className="card-action">
              <Link className={styles['link2']} to={`/games/${props.event.slug}-${props.event.cuid}`} >
                view this event
              </Link>
            </div>
          </div>
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
