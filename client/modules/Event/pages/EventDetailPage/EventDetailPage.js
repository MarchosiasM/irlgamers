import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/EventListItem/EventListItem.css';

// Import Actions
import { fetchEvent } from '../../EventActions';

// Import Selectors
import { getEvent } from '../../EventReducer';

export function EventDetailPage(props) {
  return (
    <div>
      <Helmet title={props.event.eventName} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.event.eventName}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {props.event.owner}</p>
        <p className={styles['post-desc']}>{props.event.notes}</p>
        <p className={styles['post-desc']}>0/{props.event.slots}</p>
        <p className={styles['post-desc']}>{props.event.scheduledDate}</p>
        <p className={styles['post-desc']}>{props.event.scheduledTime}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
EventDetailPage.need = [params => {
  return fetchEvent(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    event: getEvent(state, props.params.cuid),
  };
}

EventDetailPage.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    scheduledDate: PropTypes.string.isRequired,
    scheduledTime: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(EventDetailPage);
