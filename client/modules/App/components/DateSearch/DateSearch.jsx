import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

class DateSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isMounted: false,
            style: {
                display: 'inline-block'
            }
        };
    }

    componentDidMount() {
        this.setState({isMounted: true}); // eslint-disable-line
        const options = ''; // Options for the Date and TimePicker go here.
        // Still needs some work in rendering in mobile but works.
        M.AutoInit();
        document.addEventListener('DOMContentLoaded', () => {
            const elems = document.querySelectorAll('.datepicker');
            const instances = M.Datepicker.init(elems, options);
        });
    }

    handleDateChange(e){
        console.log(e.target.value);
    }

    render(){
        return (
            <div style={this.state.style}>
                <input className='datepicker' type={'text'} value={this.state.value} onChange={this.handleDateChange} />
            </div>
        )
    }
    
}

export default DateSearch;