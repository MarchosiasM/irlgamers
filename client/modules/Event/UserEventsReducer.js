import { ADD_USER_EVENTS, FETCH_USER_EVENTS } from './UserEventsActions';

// Initial State
const initialsState = { data: [] };

const UserEventsReducer = (state = initialsState, action) => {
  switch (action.type) {
    case ADD_USER_EVENTS:
      return {
        data: action.events,
      };
    case FETCH_USER_EVENTS:
      return {
        profileData: action.events,
      };
    default:
      return state;
  }
};

/* Selectors */

export const getUserEvents = state => state.userEvents.data;
export const getProfileData = state => state.userEvents.profileData;


export default UserEventsReducer;
