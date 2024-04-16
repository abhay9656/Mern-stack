import React from 'react';
import styles from './chat.module.css'
const Chat = () => {
  return (
    <div>
      <div className={styles.chatcontainer}>
        <div className={`${styles.chatheader}`}>Chat Page</div>
        <div className="chat-messages">
          <div className="message sender">Hello!</div>
          <div className="message receiver">Hi there!</div>
          <div className="message sender">How are you?</div>
          <div className="message receiver">I'm good, thank you!</div>
        </div>
        <div className={styles.chatinput}>
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
