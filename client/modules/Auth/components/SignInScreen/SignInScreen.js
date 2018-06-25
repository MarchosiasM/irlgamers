import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styles from './App.css'; // This uses CSS modules.
import './SignInScreen.css'; // Import globally.

// Get the Firebase config from the auto generated file.
// const firebaseConfig = require('./firebase-config.json').result;
var config = {
    apiKey: "AIzaSyC7gDZwbkoPHZMxreSmHI-C-rZxKjEn6iU",
    authDomain: "board-game-app-2021.firebaseapp.com",
    databaseURL: "https://board-game-app-2021.firebaseio.com",
    projectId: "board-game-app-2021",
    storageBucket: "board-game-app-2021.appspot.com",
    messagingSenderId: "947562830251"
};

// Instantiate a Firebase app.
const firebaseApp = firebase.initializeApp(config);

// Import Actions
import { signIn, signOut, fetchUser, fetchUserRequest } from '../../AuthActions'

//Import Selectors
import { getUser } from '../../AuthReducer';





export class SignInScreen extends Component {

    // Configure FirebaseUI.
    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false
        }
    };

    

    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
        this.props.dispatch(fetchUserRequest());
    }

    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {

    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.logo}>
                    <i className={styles.logoIcon + ' material-icons'}>photo</i> My App
            </div>
                <div className={styles.caption}>This is a cool demo app
                
                </div>

                {this.props.user ?
                    <div>        
                        <div className={styles.signedIn}>
                        Hello {this.props.user.displayName}. You are now signed In!
                        </div>
                    <a className={styles.button} onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
                        </div>
                    :
                    
                    
                    <StyledFirebaseAuth className={styles.firebaseUi} uiConfig={this.uiConfig}
                        firebaseAuth={firebaseApp.auth()} />
                    
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        signIn: signIn(state),
        signOut: signOut(state),
        user: getUser(state)
    };
}

export default connect(mapStateToProps)(SignInScreen);