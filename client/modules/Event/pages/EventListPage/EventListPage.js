import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// import SignInScreen from '../../../Auth/components/SignInScreen/SignInScreen';
// import fontawesome from '@fortawesome/fontawesome';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';


// Import Components
import EventList from '../../components/EventList';
import EventCreateWidget from '../../components/EventCreateWidget/EventCreateWidget';


// Import Actions
import { addEventRequest, fetchEvents, deleteEventRequest } from '../../EventActions';
import { toggleAddEvent } from '../../../App/AppActions';
import { fetchAuthUserEventsRequest } from '../../../Event/UserEventsActions';

// Import Selectors
import { getShowAddEvent } from '../../../App/AppReducer';
import { getEvents } from '../../EventReducer';
import { getAuthUser } from '../../../Auth/AuthReducer';
import { getUserEvents } from '../../../Event/UserEventsReducer';

class EventListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEvents());
    this.props.dispatch(fetchAuthUserEventsRequest());
  }

  handleDeleteEvent = (event) => {
    if (confirm('Do you want to delete this event')) { // eslint-disable-line
      this.props.dispatch(deleteEventRequest(event));
    }
  };

  handleAddEvent = (eventName, gameType, game, address, city, state, zipcode, scheduledDate, scheduledTime, slots, notes, owner, ownerName) => {
    this.props.dispatch(toggleAddEvent());
    this.props.dispatch(addEventRequest({
      eventName, gameType, game, address, city, state, zipcode, scheduledDate, scheduledTime, slots, notes, owner, ownerName,
    }));
  };

  render() {
    return (
      <div>
        {/* <SignInScreen /> */}
        {_.isObject(this.props.authUser) &&
          <div>
            <EventCreateWidget addEvent={this.handleAddEvent} showAddEvent={this.props.showAddEvent} authUser={this.props.authUser} />
            <h5>Events Around You</h5>
            <EventList handleDeleteEvent={this.handleDeleteEvent} events={this.props.events} />
          </div>
        }

        {this.props.authUser === null &&
          <div>
            <h1>You Must Sign In to Create an Event</h1>
            <EventList handleDeleteEvent={this.handleDeleteEvent} events={this.props.events} />
          </div>
        }
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
EventListPage.need = [() => { return fetchEvents(); }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    showAddEvent: getShowAddEvent(state),
    events: getEvents(state),
    authUser: getAuthUser(state),
    userEvents: getUserEvents(state),
  };
}

EventListPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    scheduledDate: PropTypes.string.isRequired,
    scheduledTime: PropTypes.string.isRequired,
    slots: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
  })).isRequired,
  showAddEvent: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  authUser: PropTypes.object,
  userEvents: PropTypes.array,
};

EventListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(EventListPage);
