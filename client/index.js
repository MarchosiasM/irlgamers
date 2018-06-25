/**
 * Client entry point
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { configureStore } from './store';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
// import MaterialIcon from '@material/react-material-icon';
import firebase from "firebase";


// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

//Initialize Firebase 
// var config = {
//   apiKey: "AIzaSyC7gDZwbkoPHZMxreSmHI-C-rZxKjEn6iU",
//   authDomain: "board-game-app-2021.firebaseapp.com",
//   databaseURL: "https://board-game-app-2021.firebaseio.com",
//   projectId: "board-game-app-2021",
//   storageBucket: "board-game-app-2021.appspot.com",
//   messagingSenderId: "947562830251"
// };
// firebase.initializeApp(config);

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  mountApp
);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      mountApp
    );
  });
}
