// ChatWindow.js
import React from 'react';
import Message from './Message';

const ChatWindow = ({ selectedChat }) => {
  if (!selectedChat) return <div className="chat-window">Select a chat</div>;

  return (
    <div className="chat-window">
      <div className="chat-header">
        <img src={selectedChat.avatar} alt={selectedChat.name} style={{ marginRight: '10px', borderRadius: '50%', width: '60px' }} />
        <h3>{selectedChat.name}</h3>
      </div>
      <div className="messages">
        {selectedChat.messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <div className="message-input">
        <input type="text" placeholder="Type a message here" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
