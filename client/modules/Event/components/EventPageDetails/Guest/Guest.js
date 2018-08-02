import React, { Component } from 'react';
import EventDetails from '../EventDetails';
import Join from './Join/Join';
import MemberActions from './MemberOptions/MemberActions';
import styles from '../Host/HostDetails.css'

/* eslint-disable react/prop-types */
class Guest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: this.props.member,
      attendeesCount: this.props.event.attendees.length,
      isFull: this.props.isFull,
    };
  }
  render() {
    return (
      <div>
          <div className="section">
          <div className={`${styles['single-post']} ${styles['post-detail']}`}>
            <h3 className={styles['post-title']}>
              {this.props.event.eventName}
            </h3>
            <p className={`${styles['post-subtitle']}`}>
            {this.props.event.game} Hosted by {this.props.event.ownerName}
            </p>
            <div className="divider"></div>
          </div>
        </div>
        
        <EventDetails event={this.props.event} styles={this.props.styles} />
        {this.props.member
          ?
          'You are signed up for this event!'
          :
          <div>
            <Join
              attendeesCount={this.state.attendeesCount}
              isFull={this.state.isFull}
              addAttendee={this.props.addAttendee}
              slots={this.props.slots}
            />
          </div>
        }
        <div>
          <MemberActions />
        </div>
      </div>
    );
  }
}

export default Guest;
