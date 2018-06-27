import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'



// Import Components
import EventList from '../../components/EventList';
import EventCreateWidget from '../../components/EventCreateWidget/EventCreateWidget';

// Import Actions
import { addEventRequest, fetchEvents, deleteEventRequest } from '../../EventActions';
import { toggleAddEvent } from '../../../App/AppActions';
import { fetchAuthUser, fetchAuthUserRequest } from '../../../Auth/AuthActions';

// Import Selectors
import { getShowAddEvent } from '../../../App/AppReducer';
import { getEvents } from '../../EventReducer';
import { getAuthUser } from '../../../Auth/AuthReducer'

class EventListPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  handleDeleteEvent = event => {
    if (confirm('Do you want to delete this event')) { // eslint-disable-line
      this.props.dispatch(deleteEventRequest(event));
    }
  };

  handleAddEvent = (eventName, game, scheduledDate, scheduledTime, slots, notes, owner) => {
    this.props.dispatch(toggleAddEvent());
    this.props.dispatch(addEventRequest({ eventName, game, scheduledDate, scheduledTime, slots, notes, owner }));
  };

  render() {
    return (
      <div>
        
      { this.props.authUser !== null &&
      
        
        
        <div>
        <EventCreateWidget addEvent={this.handleAddEvent} showAddEvent={this.props.showAddEvent} authUser={this.props.authUser} />
        <EventList handleDeleteEvent={this.handleDeleteEvent} events={this.props.events} />
        </div>
      }

      { this.props.authUser === null &&
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
function mapStateToProps(state) {
  return {
    showAddEvent: getShowAddEvent(state),
    events: getEvents(state),
    authUser: getAuthUser(state),
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
};

EventListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(EventListPage);
