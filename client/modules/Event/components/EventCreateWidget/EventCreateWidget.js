import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './EventCreateWidget.css';


export class EventCreateWidget extends Component {
  componentDidMount () {
    // Still needs some work in rendering in mobile but works. 
    M.AutoInit()
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.datepicker')
      var instances = M.Datepicker.init(elems, options)
    })
  }

  addEvent = () => {
    const eventNameRef = this.refs.eventName;
    const gameRef = this.refs.game;
    const scheduledDateRef = this.refs.scheduledDate;
    const slotsRef = this.refs.slots;
    const notesRef = this.refs.notes;
    const ownerRef = this.fers.owner;
    if (eventNameRef.value && gameRef.value && scheduledDateRef.value && slotsRef.value && ownerRef.value) {
      this.props.addEvent(eventNameRef.value, gameRef.value, scheduledDateRef.value, slotsRef.value, notesRef.value, ownerRef.value);
      eventNameRef.value = gameRef.value = scheduledDateRef.value = slotsRef.value = notesRed.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddEvent ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewEvent" /></h2>
          <input placeholder={this.props.intl.messages.eventName} className={styles['form-field']} ref="eventName" />
          <input placeholder={this.props.intl.messages.game} className={styles['form-field']} ref="game" />
          <input placeholder={this.props.intl.messages.selectDate} type="text" className="datepicker" />
          <input placeholder={this.props.intl.messages.slots} className={styles['form-field']} ref="game" />
          <textarea placeholder={this.props.intl.messages.notes} className={styles['form-field']} ref="notes" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addEvent}><FormattedMessage id="submit" /></a>
        </div>
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
