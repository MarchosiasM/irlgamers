import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styles from './App.css'; // This uses CSS modules.
import './SignInScreen.css';

// Import Actions
import { fetchAuthUserRequest } from '../../AuthActions';

// Import Selectors
import { getAuthUser } from '../../AuthReducer'; // Import globally.

// Get the Firebase config from the auto generated file.
// const firebaseConfig = require('./firebase-config.json').result;
const config = {
  apiKey: 'AIzaSyC7gDZwbkoPHZMxreSmHI-C-rZxKjEn6iU',
  authDomain: 'board-game-app-2021.firebaseapp.com',
  databaseURL: 'https://board-game-app-2021.firebaseio.com',
  projectId: 'board-game-app-2021',
  storageBucket: 'board-game-app-2021.appspot.com',
  messagingSenderId: '947562830251',
};

// Instantiate a Firebase app.
const firebaseApp = firebase.initializeApp(config);

/* eslint-disable react/prop-types */

export class SignInScreen extends Component {
  // Listen to the Firebase Auth state and set the local state.


  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {

  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };
  render() {
    return (
      <span className={styles.container}>
        <span className={styles.logo}>
          {/* replace below with real logo later */}
          <i className={`${styles.logoIcon} material-icons`}>extension</i> IRLgamers
          
        </span>
        <a className={styles.button} onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
        
        {this.props.authUser ?
          <span>
            <span className={styles.signedIn}>
              Hello {this.props.authUser.displayName}. You are now signed In!
            </span>
            
          </span>
          :


          <StyledFirebaseAuth
            className={styles.firebaseUi}
            uiConfig={this.uiConfig}
            firebaseAuth={firebaseApp.auth()}
          />

        }
      </span>
    );
  }
}


function mapStateToProps(state) {
  return {
    // signIn: signIn(state),
    // signOut: signOut(state),
    authUser: getAuthUser(state),
  };
}

export default connect(mapStateToProps)(SignInScreen);
