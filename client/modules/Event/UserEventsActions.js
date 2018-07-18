import firebase from 'firebase/app';
import callApi from '../../util/apiCaller';

// Export Constants

export const ADD_USER_EVENTS = 'ADD_USER_EVENTS';
export const CACHE_OTHER_USER_EVENTS = 'CACHE_OTHER_USER_EVENTS';

// Adds user events to state
export function addUserEvents(events) {
  return {
    type: ADD_USER_EVENTS,
    events,
  };
}

// Calls API for User Events
export function fetchAuthUserEventsRequest() {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        return callApi(`myevents/${authUser.uid}`)
          .then(res => dispatch(addUserEvents(res.events)));
      }
      dispatch(addUserEvents(null));
      return null;
    });
  };
}

export default function cacheOtherUserEvents(events) {
  return {
    type: CACHE_OTHER_USER_EVENTS,
    events,
  };
}

// Calls API for non-self User's Events
export function fetchOtherUserEventsRequest(cuid) {
  return (dispatch) => {
    if (cuid) {
      return callApi(`geteventsbyuser/${cuid}`)
        .then(res => dispatch(cacheOtherUserEvents(res.events)));
    }
    dispatch(cacheOtherUserEvents(null));
    return null;
  };
}
