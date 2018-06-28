import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENTS = 'ADD_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENT';

// Export Actions
export function addEvent(event) {
  return {
    type: ADD_EVENT,
    event,
  };
}

export function addEventRequest(event) {
  return (dispatch) => {
    return callApi('events', 'post', {
      event: {
        eventName: event.eventName,
        game: event.game,
        scheduledDate: event.scheduledDate,
        scheduledTime: event.scheduledTime,
        slots: event.slots,
        notes: event.notes,
        owner: event.owner,
      },
    }).then(res => dispatch(addEvent(res.event)));
  };
}

export function addEvents(events) {
  return {
    type: ADD_EVENTS,
    events,
  };
}

export function fetchEvents() {
  return (dispatch) => {
    return callApi('events').then((res) => {
      dispatch(addEvents(res.events));
    });
  };
}

export function fetchEvent(cuid) {
  return (dispatch) => {
    return callApi(`events/${cuid}`).then(res => dispatch(addEvent(res.event)));
  };
}

export function deleteEvent(cuid) {
  return {
    type: DELETE_EVENT,
    cuid,
  };
}

export function deleteEventRequest(cuid) {
  return (dispatch) => {
    return callApi(`events/${cuid}`, 'delete').then(() => dispatch(deleteEvent(cuid)));
  };
}
