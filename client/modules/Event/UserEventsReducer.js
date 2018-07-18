import { ADD_USER_EVENTS, CACHE_OTHER_USER_EVENTS } from './UserEventsActions';

// Initial State
const initialsState = { data: [] };

const UserEventsReducer = (state = initialsState, action) => {
  switch (action.type) {
    case ADD_USER_EVENTS:
      return {
        data: action.events,
      };
    case CACHE_OTHER_USER_EVENTS:
      return {
        data: action.events,
      };
    default:
      return state;
  }
};

/* Selectors */

export const getUserEvents = state => state.userEvents.data;


export default UserEventsReducer;
