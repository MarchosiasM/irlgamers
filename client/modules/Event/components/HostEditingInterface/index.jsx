import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HostEditingInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      event: this.props.event,
      updating: false,
    };
  }

  render() {
    return (
      <div>
        <a className="waves-effect waves-light btn">Edit</a>
      </div>
    );
  }
}

HostEditingInterface.propTypes = {
  event: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    scheduledDate: PropTypes.string.isRequired,
    scheduledTime: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    slots: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default HostEditingInterface;
