import React, { PropTypes } from 'react';

// Import Components
import EventListItem from './EventListItem/EventListItem';

function EventList(props) {
  return (
    <div className="listView">
<div className="row">
      {
        props.events.map(event => (
          
            <div className="col s12 m6 l4 xl4">
              <EventListItem
                event={event}
                key={event.cuid}
                onDelete={() => props.handleDeleteEvent(event.cuid)}
              />
            </div>
          
        ))
      }
    </div>
    </div>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    scheduledDate: PropTypes.string.isRequired,
    scheduledTime: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    slots: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteEvent: PropTypes.func.isRequired,
};

export default EventList;
