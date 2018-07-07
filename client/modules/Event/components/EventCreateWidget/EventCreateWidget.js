/*eslint-disable*/
// Someone else wrote this, let them deal with it
import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import _ from 'lodash';

// Import Style
import styles from './EventCreateWidget.css';


export class EventCreateWidget extends Component {
  componentDidMount() {
    const options = ''; // Options for the Date and TimePicker go here.
    // Still needs some work in rendering in mobile but works.
    M.AutoInit();
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.datepicker');
      const instances = M.Datepicker.init(elems, options);
    });
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.timepicker');
      const instances = M.Timepicker.init(elems, options);
    });
  }

  addEvent = () => {
    const eventNameRef = this.refs.eventName;
    const addressRef = this.refs.address;
    const cityRef = this.refs.city;
    const stateRef = this.refs.state;
    const zipcodeRef = this.refs.zipcode;
    const gameRef = this.refs.game;
    const gameTypeRef = this.refs.gameType;
    const scheduledDateRef = this.refs.scheduledDate;
    const scheduledTimeRef = this.refs.scheduledTime;
    const slotsRef = this.refs.slots;
    const notesRef = this.refs.notes;
    const ownerRef = this.props.authUser.uid;
    if (eventNameRef.value && addressRef.value && cityRef.value && stateRef.value && zipcodeRef.value && gameRef.value && gameTypeRef.value && scheduledDateRef.value && scheduledTimeRef.value && slotsRef.value && ownerRef
    ) {
      this.props.addEvent(
        eventNameRef.value,
        addressRef.value, 
        cityRef.value, 
        stateRef.value,
        zipcodeRef.value,
        gameRef.value, 
        gameTypeRef.value,
        scheduledDateRef.value, 
        scheduledTimeRef.value, 
        slotsRef.value, 
        notesRef.value, 
        ownerRef);
      eventNameRef.value = addressRef.value = cityRef.value = stateRef.value = zipcodeRef.value = gameRef.value = gameTypeRef.value = scheduledDateRef.value = scheduledTimeRef.value = slotsRef.value = notesRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddEvent ? styles.appear : '')}`;
    return (


      <div className={cls}>

        {this.props.authUser === null &&
          <div>
            <h1>You Must Sign In to Create an Event</h1>
          </div>
        }


        {_.isObject(this.props.authUser) &&
          <div className={styles['form-content']}>
            <h2 className={styles['form-title']}><FormattedMessage id="createNewEvent" />{this.props.authUser.uid}</h2>
            <input placeholder={this.props.intl.messages.eventName} className={styles['form-field']} ref="eventName" />
            <input placeholder="Game Type" className={styles['form-field']} ref="gameType" />
            <input placeholder="Game" className={styles['form-field']} ref="game" />
            <input placeholder="Street Address" className={styles['form-field']} ref="address" />
            <input placeholder="City" className={styles['form-field']} ref="city" />
            <input placeholder="State" className={styles['form-field']} ref="state" />
            <input placeholder="Zip Code" className={styles['form-field']} ref="zipcode" />
            <input placeholder={this.props.intl.messages.selectDate} type="text" className="datepicker" ref="scheduledDate" />
            <input placeholder={this.props.intl.messages.selectTime} type="text" className="timepicker" ref="scheduledTime" />
            <input placeholder={this.props.intl.messages.slots} className={styles['form-field']} ref="slots" />
            <textarea placeholder={this.props.intl.messages.notes} className={styles['form-field']} ref="notes" />
            <a className={styles['post-submit-button']} href="#" onClick={this.addEvent}><FormattedMessage id="submit" /></a>
          </div>
        }

      </div>
    );
  }
}

EventCreateWidget.propTypes = {
  addEvent: PropTypes.func.isRequired,
  showAddEvent: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(EventCreateWidget);
