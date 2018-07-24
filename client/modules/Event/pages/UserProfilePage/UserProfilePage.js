import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventList from '../../components/EventList/EventList';
/* eslint-disable react/prop-types */
// Import Actions
import { fetchEvents } from '../../EventActions';

import { fetchProfileDetails } from '../../../Event/UserEventsActions';

// Import Selectors
import { getShowAddEvent } from '../../../App/AppReducer';
import {
  getUserEvents,
  getProfileData,
} from '../../../Event/UserEventsReducer';


class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersEvents: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchProfileDetails(this.props.params.ownerid));
  }

  render() {
    return (
      <div>
      See the events this user has hosted:
        {this.props.profileData ?
          <EventList
            events={this.props.profileData}
          />
          :
          ''
        }
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
    userEvents: getUserEvents(state),
    profileData: getProfileData(state),
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
