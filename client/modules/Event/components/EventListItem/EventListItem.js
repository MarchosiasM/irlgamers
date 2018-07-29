import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import images from './stockImages.js';

// Import Style
import styles from './EventListItem.css';

function EventListItem(props) {
  let nextDay = moment(props.event.scheduledDate).add(1, 'days').calendar()
  return (
      
      
       
          <div className="card large">
            <div className="card-image">
              <img src={makeImageLink(props.event.gameType)} />
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


function makeImageLink(str) {

  const str2 = str.toLowerCase();

  if (str2.match("adventure")) {
    console.log('str', str);
    console.log('match', str2.match("adventure"));
    return images[0].image;
  }

  if (str2.match("board")) {
    console.log('str', str);
    console.log('match', str2.match("board"));
    return images[Math.floor(Math.random() * 3) + 1].image;
  }

  if (str2.match("card")) {
    console.log('str', str);
    console.log('match', str2.match("card"));
    return images[Math.floor(Math.random() * 3) + 4].image;
  }

  if (str2.match("dice")) {
    console.log('str', str);
    console.log('match', str2.match("dice"));
    return images[7].image;
  }

  if (str2.match("drink")) {
    console.log('str', str);
    console.log('match', str2.match("drink"));
    return images[8].image;
  }

  if (str2.match("information")) {
    console.log('str', str);
    console.log('match', str2.match("information"));
    return images[9].image;
  }

  if (str2.match("outdoor")) {
    console.log('str', str);
    console.log('match', str2.match("outdoor"));
    return images[10].image;
  }

  if (str2.match("party")) {
    console.log('str', str);
    console.log('match', str2.match("party"));
    return images[11].image;
  }

  if (str2.match("pen and paper")) {
    console.log('str', str);
    console.log('match', str2.match("pen and paper"));
    return images[Math.floor(Math.random() * 2) + 12].image;
  }

  if (str2.match("role-playing")) {
    console.log('str', str);
    console.log('match', str2.match("role-playing"));
    return images[14].image;
  }

  if (str2.match("strategy")) {
    console.log('str', str);
    console.log('match', str2.match("strategy"));
    return images[Math.floor(Math.random() * 2) + 15].image;
  }

  if (str2.match("tile")) {
    console.log('str', str);
    console.log('match', str2.match("tile"));
    return images[17].image;
  }

  if (str2.match("video")) {
    console.log('str', str);
    console.log('match', str2.match("video"));
    return images[Math.floor(Math.random() * 2) + 18].image;
  }

  return images[Math.floor(Math.random() * images.length)].image;
}

export default EventListItem;
