import { FETCH_USER } from './AuthActions';

// Initial State 
const initialsState = { data: {}}

const AuthReducer = (state = initialsState, action) => {
    switch (action.type) {
        case FETCH_USER :
            return {
                data: action.user, ...state.data || null
            };
        default:
        return state;
    }
};

/* Selectors */

// Fetch User 
export const getUser = state => state.user.data;

export default AuthReducer;