import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import Helmet from 'react-helmet';
import HostGuest from '../../components/EventPageDetails/HostGuest/HostGuest';
import NotLoggedIn from '../../components/EventPageDetails/Guest/NotLoggedIn/NotLoggedIn';
/* eslint-disable react/prop-types */
// Import Style
import styles from '../../components/EventListItem/EventListItem.css';

// Import Actions
import { fetchEvent, passAttendee } from '../../EventActions';

// Import Selectors
import { getEvent, isMember, isHost } from '../../EventReducer';
import { getAuthUser } from '../../../Auth/AuthReducer';

/* This is the base level component for the event details page for users.
  At this level we hand down all the necessary moving parts for differentiation
  but first we ensure the event exists. The event may not exist because of
  deletion. */

class EventDetailPage extends Component {
  constructor() {
    super();
    this.state = {
      host: false,
      member: false,
      loggedin: false,
    };
  }

  componentDidMount = () => {
  
  }

  isFull = () => {
    // console.log('Your slots, ', this.props.event.slots);
    // console.log('Your attendees, ', this.props.attendees);
    // console.log('This dude a member already?', this.state.member);
    if (this.props.event.slots - this.props.attendees <= 0) {
      return true;
    }
    return false;
  };

  addAttendee = () => {
    this.setState({ member: true });
    // console.log(this.props.user);
    return this.props.dispatch(passAttendee(this.props.event.cuid, this.props.user.uid, this.props.user.displayName));
  };

  handleEdgeCases = () => {
    if (!this.props.event) {
      return 'This event no longer exists';
    }
    if (this.props.user === null) {
      return <NotLoggedIn event={this.props.event} styles={styles} />;
    }
    return null;
  }

  render() {
    return (
      <div>
        {(this.props.event && (this.props.user !== null))
          ?
          <div>
            {/* {(this.props.user)? this.props.user.email : 'test@test.com'} */}
            {/* {console.log('wtf user', this.props.user)} */}
            {/* {console.log('wtf member', this.props.member)} */}
            {/* {(this.props.member > -1)? this.props.member : ' not a member?'} */}
            {/* {(this.props.host)? this.props.host : ' not the host?'} */}
            <HostGuest
              host={this.props.host}
              event={this.props.event}
              styles={styles}
              dispatch={this.props.dispatch}
              addAttendee={this.addAttendee}
              isFull={this.isFull()}
              member={this.props.member}
            />
            
          </div>
          :
          this.handleEdgeCases()
        }
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
EventDetailPage.need = [(params) => {
  return fetchEvent(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  // console.log(state)
  return {
    event: getEvent(state, props.params.cuid),
    user: getAuthUser(state),
    member: isMember(state, props.params.cuid, getAuthUser(state)),
    host: isHost(state, props.params.cuid, getAuthUser(state)),
    attendees: getEvent(state, props.params.cuid) ? getEvent(state, props.params.cuid).attendees.length : '',
  };
}

EventDetailPage.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    gameType: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string,
    scheduledDate: PropTypes.string.isRequired,
    scheduledTime: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    slots: PropTypes.number.isRequired,
  }),
};

export default connect(mapStateToProps)(EventDetailPage);
