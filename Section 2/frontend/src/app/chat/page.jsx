import React from 'react';

const Chat = () => {
  return (
    <div>
      <div className="chat-container">
        <div className="chat-header">Chat Page</div>
        <div className="chat-messages">
          <div className="message sender">Hello!</div>
          <div className="message receiver">Hi there!</div>
          <div className="message sender">How are you?</div>
          <div className="message receiver">I'm good, thank you!</div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
