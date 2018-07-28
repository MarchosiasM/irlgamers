import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styles from './App.css'; // This uses CSS modules.
import { Link } from 'react-router'
// import './SignInScreen.css';

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
      <div className={styles.container}>
        <span className={styles.logo}>
          {/* replace this with real logo later */}
          <Link to="/" alt="Home Screen" className={styles.homelink}>
          <i className={`${styles.logoIcon} material-icons`}>extension</i> IRLgamers
          </Link>
        </span>

        {this.props.authUser ?
          <span className={styles.floatRight}>
            <span className={styles.signedIn}>
              Hi, {firstName(this.props.authUser.displayName)}!
            </span>
            <img className={styles.avatar} src={this.props.authUser.photoURL} alt="profile photo" />
            {/* <a className={styles.button} onClick={() => firebaseApp.auth().signOut()}>Sign-out</a> */}
            <a className="waves-effect waves-light btn-small" onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
          </span>
          :


          <StyledFirebaseAuth
            className={styles.firebaseUi}
            uiConfig={this.uiConfig}
            firebaseAuth={firebaseApp.auth()}
          />

        }
      </div>
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

function firstName(fullName) {
  var firstName = fullName.split(' ').slice(0, -1).join(' ');
  return firstName;
}

export default connect(mapStateToProps)(SignInScreen);
