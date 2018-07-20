import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// Import Components
import EventList from '../../components/EventList';
import EventCreateWidget from '../../components/EventCreateWidget/EventCreateWidget';

/* eslint-disable react/prop-types */
// Import Actions
import { addEventRequest, fetchEvents, deleteEventRequest } from '../../EventActions';
import { toggleAddEvent } from '../../../App/AppActions';
import { fetchAuthUserEventsRequest } from '../../../Event/UserEventsActions';

// Import Selectors
import { getShowAddEvent } from '../../../App/AppReducer';
import { getEvents } from '../../EventReducer';
import { getAuthUser } from '../../../Auth/AuthReducer';
import {
  getUserEvents,
  getEventsByUser,
} from '../../../Event/UserEventsReducer';


class UserProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEvents());
    this.props.dispatch(fetchAuthUserEventsRequest());
  }

  render() {
    return (
      <div>
      'Here be the user's profile page.'
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
UserProfilePage.need = [() => { return fetchEvents(); }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    showAddEvent: getShowAddEvent(state),
    events: getEvents(state),
    authUser: getAuthUser(state),
    userEvents: getUserEvents(state),
  };
}

// UserProfilePage.propTypes = {
//   events: PropTypes.arrayOf(PropTypes.shape({
//     eventName: PropTypes.string.isRequired,
//     game: PropTypes.string.isRequired,
//     scheduledDate: PropTypes.string.isRequired,
//     scheduledTime: PropTypes.string.isRequired,
//     slots: PropTypes.number.isRequired,
//     owner: PropTypes.string.isRequired,
//   })).isRequired,
//   showAddEvent: PropTypes.bool.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   authUser: PropTypes.object,
//   userEvents: PropTypes.array,
// };

UserProfilePage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(UserProfilePage);
