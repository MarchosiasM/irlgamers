import React, { PropTypes } from 'react';

// Import Components
import EventListItem from '../EventListItem/EventListItem';

const EventList = (props) => (
  <div className="listView">
    {
      props.events.map(event => (
        <EventListItem
          event={event}
          key={event.cuid}
          onDelete={() => props.handleDeleteEvent(event.cuid)}
        />
      ))
    }
  </div>
);

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
