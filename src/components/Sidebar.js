// Sidebar.js
import React from 'react';

const Sidebar = ({ chats, onSelectChat }) => {
  return (
    <div className="sidebar">
      <h2>Chats</h2>
      <input type="text" placeholder="Search here" style={{ width: '90%', padding: '10px', borderRadius: '6px' }} />
      <ul>
        {chats.map((chat, index) => (
          <li 
            key={index} 
            onClick={() => onSelectChat(index)}
            style={{ 
              backgroundColor: chat.selected ? 'white' : '#f4f4f4', // Highlight if selected
              padding: '10px',
              cursor: 'pointer',
              border: '1px solid #ddd'
            }}
          >
            <img src={chat.avatar} alt={chat.name} className="avatar" style={{ marginRight: '10px', borderRadius: '50%' }} />
            <div>
              <p><b>{chat.name}</b></p>
              <p>{chat.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
