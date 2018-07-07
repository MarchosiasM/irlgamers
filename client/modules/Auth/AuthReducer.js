import { FETCH_AUTH_USER} from './AuthActions';

// Initial State
const initialsState = { data: [], usereventdata: [] };

const AuthReducer = (state = initialsState, action) => {
  switch (action.type) {
    case FETCH_AUTH_USER:
      return {
        data: [action.authUser, ...state.data || null],
      };
    default:
      return state;
  }
};

/* Selectors */

// Fetch Auth User
export const getAuthUser = state => state.authUser.data[0];

export default AuthReducer;
