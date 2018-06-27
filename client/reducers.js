/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import events from './modules/Event/EventReducer';
import authUser from './modules/Auth/AuthReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  events,
  authUser,
});
