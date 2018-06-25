import firebase from 'firebase/app'

// Export Constants
export const FETCH_USER = 'FETCH_USER';

// Export Actions

export function fetchUser(user) {
    return {
        type: FETCH_USER, 
        user,
    }
}
export function fetchUserRequest() {
    return (dispatch) => {
        return firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(fetchUser(user))
            } else {
                dispatch(fetchUser(null))
            }
        })
    }
}

export const signIn = () => dispatch => {
    firebase.auth()
      .signInWithPopup(provider)
      .then(result => {})
      .catch(error => {
        console.log(error);
      });
  };
  
  export const signOut = () => dispatch => {
    firebase.auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        console.log(error);
      });
  };