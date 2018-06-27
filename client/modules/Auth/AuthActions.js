import firebase from 'firebase/app';

/* eslint-disable */

// Export Constants
export const FETCH_AUTH_USER = 'FETCH_AUTH_USER';

// Export Actions

export function fetchAuthUser(authUser) {
  return {
    type: FETCH_AUTH_USER,
    authUser,
  };
}
export function fetchAuthUserRequest() {
  return (dispatch) => {
    return firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(fetchAuthUser(authUser));
      } else {
        dispatch(fetchAuthUser(null));
      }
    });
  };
}

export const signIn = () => (dispatch) => {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {})
    .catch((error) => {
      console.log(error);
    });
};

export const signOut = () => (dispatch) => {
  firebase.auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
    });
};
