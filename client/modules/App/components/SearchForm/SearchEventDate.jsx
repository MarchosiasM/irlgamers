import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class DateSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isMounted: false,
        };
        // this.dateSearch = this.refs.dateSearch;
        // this.handleDateSearchSubmit = this.handleDateSearchSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({isMounted: true}); // eslint-disable-line
        // const options = {
        //     onSelect: function(date){
        //         console.log(date);
        //         this.handleDateChange(date);
        //     },
        // }; // Options for the Date and TimePicker go here.
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

    render(){
        return (
            <input className='datepicker' type='text' name="dateSearch" value={this.state.value} />    
        )
    }
    
}

export default DateSearch;