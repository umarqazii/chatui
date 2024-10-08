// ChatWindow.js
import React from 'react';
import Message from './Message';
import 'primeicons/primeicons.css';
import logo from '../assets/logo.png';

const ChatWindow = ({ selectedChat }) => {
  if (!selectedChat) return (
    <div className="chat-window">
      <div style={{width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <img src={logo} alt="" />
        <h3>Select a chat to view details</h3>
      </div>
    </div>
  
  );

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
        <input type="text" placeholder="Type a message here" style={{borderRadius: '10px'}}/>
        <button style={{borderRadius: '10px'}}><i className="pi pi-send" style={{ fontSize: '1.5rem' }}></i></button>
      </div>
    </div>
  );
};

export default ChatWindow;
