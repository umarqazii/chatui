// Message.js
import React from 'react';

const Message = ({ message }) => {
  return (
    <div className={`message ${message.isSent ? 'sent' : 'received'}`}>
      <p>{message.text}</p>
    </div>
  );
};

export default Message;
