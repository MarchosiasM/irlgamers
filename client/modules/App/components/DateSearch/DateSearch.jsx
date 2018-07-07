import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

// Import Event Actions
import { findEventsByDate } from '../../../Event/EventActions';

// Import Event Selections
import { getEvents } from '../../../Event/EventReducer';

let test = function(e) {
    console.log(e);
}

class DateSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isMounted: false,
            style: {
                display: 'inline-block'
            },
        };
        // this.dateSearch = this.refs.dateSearch;
        this.handleDateSearchSubmit = this.handleDateSearchSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({isMounted: true}); // eslint-disable-line
        const options = {
            onSelect: function(date){
                console.log(date);
                this.handleDateChange(date);
            },
        }; // Options for the Date and TimePicker go here.
        // Still needs some work in rendering in mobile but works.
        M.AutoInit();
        document.addEventListener('DOMContentLoaded', () => {
            const elem = document.querySelectorAll('.datepicker');
            const instances = M.Datepicker.init( elem, options );
            console.log(instances);
        });
    }

    handleDateChange(e){ // This doesn't work because of materialize!
        console.log(e);
        // console.log(e.target.value);
        // this.props.dispatch(findEventsByDate(e.target.value));
    }

    handleDateSearchSubmit(e){
        console.log( 'submitted! ', e.target);
        e.preventDefault();
        console.log( 'dateSearched: ', e.target.dateSearch.value);
        this.props.dispatch(findEventsByDate(e.target.dateSearch.value));
    }

    render(){
        return (
            <div style={this.state.style}>
                <form onSubmit={this.handleDateSearchSubmit}>
                    <input className='datepicker' type='text' name="dateSearch" value={this.state.value} />
                    <button type="submit" >DATE SEARCH</button>
                </form>
            </div>
        )
    }
    
}

DateSearch.need = [() => { return fetchEvents(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        events: getEvents(state),
    };
}

DateSearch.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
        eventName: PropTypes.string.isRequired,
        game: PropTypes.string.isRequired,
        scheduledDate: PropTypes.string.isRequired,
        scheduledTime: PropTypes.string.isRequired,
        slots: PropTypes.number.isRequired,
        owner: PropTypes.string.isRequired,
        authUser: PropTypes.string.isRequired,
    })).isRequired,
};

DateSearch.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(DateSearch);