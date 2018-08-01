import React from 'react';


// Import Style ${styles['class-selector']}
import styles from './EventChat.css';

const EventChat = (props) => {
    return (
        <div className={styles['chat-wrapper']}>
            <span>chat window</span>
        </div>
    );
};

export default EventChat;