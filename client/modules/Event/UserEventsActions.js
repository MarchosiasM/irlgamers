import firebase from 'firebase/app';
import callApi from '../../util/apiCaller';


/* eslint-disable */

// Export Constants

export const ADD_USER_EVENTS = 'ADD_USER_EVENTS';

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