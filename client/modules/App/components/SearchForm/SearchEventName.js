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
      presetGameTypes: [
        { id: '1', label: 'Card Game' },
        { id: '2', label: 'Board Game' },
        { id: '3', label: 'Pen and Paper' },
        { id: '4', label: 'Video Game' },
        { id: '5', label: 'Information Game' },
        { id: '6', label: 'Drinking Game' },
        { id: '7', label: 'Outdoor' },
        { id: '8', label: 'Adventure Game' },
        { id: '9', label: 'Dice Game' },
        { id: '10', label: 'Role-playing Game' },
        { id: '11', label: 'Strategy Game' },
        { id: '12', label: 'Tile-based Game' },
        { id: '13', label: 'Party Game' },
      ],
    };
    this.passValueUp = this.props.returnVal;
    this.passSelectUp = this.props.returnSelect;
  }

  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  handleSelect = (e) => {
    console.log('handleSelect receives ', e);
    this.setState({ value: e });
    this.passSelectUp(e);
  }

  handleChange = (e) => {
    console.log('handleChange receives ', e.target.value);
    this.setState({ value: e.target.value });
    this.passValueUp(e);
    this.props.handleSubmit(e)
  }

  render() {
    // console.log(this.props.events)
    return (
      <ReactAutocomplete
        items={this.state.presetGameTypes}
        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        wrapperProps={{ style: { display: 'block' } }}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
          >
            {item.label}
          </div>
        }
        value={this.state.value}
        onChange={e => this.handleChange(e)}
        onSelect={e => this.handleSelect(e)}
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
