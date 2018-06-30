import React from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { getEvents } from '../../../../Event/EventReducer';
import { fetchEvents } from '../../../../Event/EventActions';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  render() {
    // console.log(this.props.events)
    return (
      <ReactAutocomplete
        items={this.props.events}
        shouldItemRender={(item, value) => item.eventName.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.eventName}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
          >
            {item.eventName}
          </div>
        }
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
        onSelect={value => this.setState({ value })}
      />
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    events: getEvents(state),
  };
}


export default connect(mapStateToProps)(SearchBar);
// export default connect(mapStateToProps)(EventListPage);
