import React from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { getEvents } from '../../../Event/EventReducer';
import { fetchEvents } from '../../../Event/EventActions';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.passValueUp = this.props.returnVal;
    this.passSelectUp = this.props.returnSelect;
  }

  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  render() {
    // console.log(this.props.events)
    return (
      <ReactAutocomplete
        items={this.props.events}
        shouldItemRender={(item, value) => item.gameType.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.gameType}
        wrapperProps={{ style: { display: 'block' } }}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent', display: 'block' }}
          >
            {item.gameType}
          </div>
        }
        value={this.props.value}
        onChange={this.passValueUp}
        onSelect={this.passSelectUp}
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
