import { ADD_EVENT, ADD_EVENTS, DELETE_EVENT, ADD_ATTENDEE, UPDATE_EVENT } from './EventActions';

// Initial State
const initialState = { data: [] };

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        data: [action.event, ...state.data],
      };

    case ADD_EVENTS:
      return {
        data: action.events,
      };

    case DELETE_EVENT:
      console.log('Hit the deletion reducer');
      return {
        data: state.data.filter(event => event.cuid !== action.cuid),
      };

    case ADD_ATTENDEE:
      // console.log('Added Attendee', action.attendees);
      return {
        data: state.data.map(event => {
          // console.log('cuid to match... ', event.cuid);
          // console.log('event', action.event);
          if (event.cuid === action.event.cuid) {
            return action.event;
          }
          return event;
        }),
      };

    case UPDATE_EVENT:
      return {
        data: state.data.map(event => {
          if (event.cuid === action.body.cuid) {
            return action.body;
          }
          return event;
        }),
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
