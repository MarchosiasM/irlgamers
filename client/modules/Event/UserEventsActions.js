import firebase from 'firebase/app';
import callApi from '../../util/apiCaller';


/* eslint-disable */

// Export Constants

export const ADD_USER_EVENTS = 'ADD_USER_EVENTS';
export const FETCH_USER_EVENTS = 'FETCH_USER_EVENTS';

// Adds user events to state
export function addUserEvents(events) {
    return {
      type: ADD_USER_EVENTS, 
      events,
    }
  }
  
  // Calls API for User Events
  export function fetchAuthUserEventsRequest() {
    return (dispatch) => {
       firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          return callApi(`myevents/${authUser.uid}`)
          .then(res => dispatch(addUserEvents(res.events)));
        } else {
          dispatch(addUserEvents(null));
        }
      })
    }
  }

  export function fetchUserEvents(events) {
    return {
      type: FETCH_USER_EVENTS,
      events,
    }
  }

  export function fetchProfileDetails(id) {
    return (dispatch) => {
      if (id) {
        return callApi(`userevents/${id}`)
        .then(res => dispatch(fetchUserEvents(res.events)))
      } else {
        dispatch(fetchUserEvents(null));
      }
    }
  }