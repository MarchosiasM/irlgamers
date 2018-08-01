import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import SearchForm from '../SearchForm/SearchForm';
import SignInScreen from '../../../Auth/components/SignInScreen/SignInScreen';

// Import Style
import styles from './Header.css';

export function Header(props, context) {

  return (
    <div className={styles.header}>
      <SignInScreen />
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
        </h1>
        <SearchForm />
        {
          context.router.isActive('/', true)
            ?
            <div>
              <a className={`waves-effect waves-dark btn ${styles['add-post-button']}`} href="#" onClick={props.toggleAddEvent}><FormattedMessage id="addEvent" /></a>
              <Link to="/games/" className={`waves-effect waves-dark btn ${styles['add-post-button']}`}>Go To Your Events</Link>
            </div>
            : null
        }
        {
          context.router.isActive('/games', true)
            ?
            <a className={`waves-effect waves-dark btn ${styles['add-post-button']}`} href="#" onClick={props.toggleAddEvent}><FormattedMessage id="addEvent" /></a>
            : null
        }
      </div>

    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  toggleAddEvent: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
