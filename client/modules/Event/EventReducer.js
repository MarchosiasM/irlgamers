import { ADD_EVENT, ADD_EVENTS, DELETE_EVENT } from './EventActions';

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT :
      return {
        data: [action.event, ...state.data],
      };

    case ADD_EVENTS :
      return {
        data: action.events,
      };

    case DELETE_EVENT :
      return {
        data: state.data.filter(event => event.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all Events
export const getEvents = state => state.events.data;

// Get Event by cuid
export const getEvent = (state, cuid) => state.events.data.filter(event => event.cuid === cuid)[0];

// Export Reducer
export default EventReducer;
