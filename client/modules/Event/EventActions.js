import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENTS = 'ADD_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENT';
export const ADD_ATTENDEE = 'ADD_ATTENDEE';
export const UPDATE_EVENT = 'UPDATE_EVENT';

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
        address: event.address,
        city: event.city,
        state: event.state,
        zipcode: event.zipcode,
        game: event.game,
        gameType: event.gameType,
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

export function updateAttendee(event) {
  console.log(event);
  return {
    type: ADD_ATTENDEE,
    event,
  };
  // @TODO: pass the attendees into the event state!
}
/* eslint-disable camelcase */

export function passAttendee(event, user_id) {
  // console.log(event, user_id);
  return (dispatch) => {
    return callApi(`/attendee/${event}/${user_id}`, 'get')
    .then(res => dispatch(updateAttendee(res.event)
    ));
  };
}

export function fetchEvents() {
  return (dispatch) => {
    return callApi('events').then((res) => {
      dispatch(addEvents(res.events));
    });
  };
}

export function findEventsByNameDate(name, date = '*') {
  return (dispatch) => {
    return callApi(`events/search/${name}/${date}`)
    .then((res) => {
      dispatch(addEvents(res.events));
    });
  };
}

export function fetchEvent(cuid) {
  return (dispatch) => {
    return callApi(`events/${cuid}`)
    .then(res => dispatch(addEvent(res.event)));
  };
}

export function updateEvent(cuid, newEvent) {
  // console.log('Hitting the update event action');
  return {
    type: UPDATE_EVENT,
    cuid,
    body: newEvent,
  };
}

export function updateEventRequest(cuid, body) {
  // console.log('The update request is triggered');
  return (dispatch) => {
    // console.log('The update is dispatched to the API');
    // console.log('CUID', cuid);
    // console.log('Body', body);
    return callApi(`events/${cuid}`, 'put', body)
    .then(() => dispatch(updateEvent(cuid, body)));
  };
}

export function deleteEvent(cuid) {
  console.log('Hitting the delete event action');
  return {
    type: DELETE_EVENT,
    cuid,
  };
}

export function deleteEventRequest(cuid) {
  console.log('The delete request is triggered');
  return (dispatch) => {
    console.log('The deletion is dispatched');
    return callApi(`events/${cuid}`, 'delete')
    .then(() => dispatch(deleteEvent(cuid)));
  };
}
