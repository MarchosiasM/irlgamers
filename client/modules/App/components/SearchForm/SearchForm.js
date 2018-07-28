// Application Smart(Presentation?) Components
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Search Components
import SearchEventName from './SearchEventName';
// import SearchEventDate from './SearchEventDate';

// Import Event Actions
import { findEventsByNameDate, findEventsByGameType } from '../../../Event/EventActions';

// Import Event Selections
import { getEvents } from '../../../Event/EventReducer';

// Import Style
import styles from './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      style: {
        // maxWidth: 768
        zIndex: 2000,
        position: 'relative',
      },
      search_event_type: '',
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.returnValueUp = this.returnValueUp.bind(this);
    this.returnSelectUp = this.returnSelectUp.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount() {
    this.setState({ isMounted: true }); // eslint-disable-line
  }

  handleSearchSubmit(e) {
    // console.log('dateSearched: ', e.target.dateSearch.value);
    console.log('nameSearched: ', this.state.search_event_type);
    console.log('submitted! ', e.target);

    e.preventDefault();
    // let search_date = (e.target.dateSearch.value) ? e.target.dateSearch.value : '*';
    const search_name = (this.state.search_event_type && this.state.search_event_type !== '') ? this.state.search_event_type : 'null';
    // this.props.dispatch(findEventsByNameDate( search_name, search_date ));
    this.props.dispatch(findEventsByGameType(search_name));
  }

  returnValueUp(e) {
    console.log(e.target.value);
    this.setState({ search_event_type: e.target.value });
  }

  returnSelectUp(value) {
    console.log(value);
    this.setState({ search_event_type: value });
  }

  clearSearch(e) {
    this.setState({ search_event_type: '' });
    e.target.submit();
  }

  render() {
    return (
      <div style={this.state.style} className="row">
        <form onSubmit={this.handleSearchSubmit}>
          <div
            // style={styles.acWrapper}
            className={`s5 col ${styles.acWrapper}`}
          >
            <SearchEventName returnVal={this.returnValueUp} returnSelect={this.returnSelectUp} value={this.state.search_event_type} />
          </div>
          {/* <div className="col s3"> */}
          {/* <SearchEventDate returnVal={this.returnValueUp} /> */}
          {/* </div> */}
          <button className="waves-effect waves-dark btn">SEARCH</button>&nbsp;&nbsp;&nbsp;
          <button onClick={this.clearSearch} className="waves-effect waves-light btn">CLEAR</button>
        </form>
        <div className="col s3">
        </div>
      </div>
    );
  }

}

SearchForm.need = [() => { return fetchEvents(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    events: getEvents(state),
  };
}

SearchForm.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    scheduledDate: PropTypes.string.isRequired,
    scheduledTime: PropTypes.string.isRequired,
    slots: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    authUser: PropTypes.string,
  })).isRequired,
};

SearchForm.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(SearchForm);
