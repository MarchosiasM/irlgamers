import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthUser } from '../../../Auth/AuthReducer';

class UserDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      this: '',
    };
  }

  render() {
    return (
      <div>
        This is the user's details page.
      </div>
    );
  }

}
/* eslint-disable no-unused-vars */
function mapStateToProps(state, props) {
  return {
    authUser: getAuthUser(state),
  };
}

export default connect(mapStateToProps)(UserDetailPage);
