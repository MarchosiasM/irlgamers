import React, { Component } from 'react';

class DateSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true }); // eslint-disable-line
    M.AutoInit();
    document.addEventListener('DOMContentLoaded', () => {
      const elem = document.querySelectorAll('.datepicker');
      const instances = M.Datepicker.init(elem);
      console.log(instances);
    });
  }

  handleDateChange(e) { // This doesn't work because of materialize!
    console.log(e);
  }

  render() {
    return (
      <input className="datepicker" type="text" name="dateSearch" value={this.state.value} />
    );
  }

}

export default DateSearch;
