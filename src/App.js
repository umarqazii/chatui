// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import ProfileCard from './components/ProfileCard';
import './App.css'; // You can add basic styling here.

const App = () => {
  const [chats] = useState([
    {
      name: 'Tim Hover',
      lastMessage: 'Ok ok, I thought you were',
      avatar: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg',
      messages: [
        { text: 'Finally. What\'s the plan?', isSent: false },
        { text: 'what plan mate?', isSent: true },
        { text: 'I\'m talking about the tutorial', isSent: false },
        { text: 'Ok ok, I thought you were talking about something else', isSent: true },
      ],
      position: 'CEO & Founder at Highly Inc'
    },
    {
      name: 'Ayub Rossi',
      lastMessage: 'Sure thing!',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      messages: [{ text: 'Sure thing!', isSent: false }],
      position: 'Designer'
    },
    {
      name: 'Wifey',
      lastMessage: 'Hurry up, I\'m waiting ',
      avatar: 'https://assets.vogue.in/photos/5f61e43c211a71e971416d87/1:1/w_2000,h_2000,c_limit/JSA_OTH_OTH_NDC%202020%20Wedding%20Scene%20with%20Ana_BTS_IMG_03.jpg',
      messages: [
        { text: 'where are you?', isSent: false },
        { text: 'I\'m in the office', isSent: true },
        { text: 'when will you be back?', isSent: false },
        { text: 'Soon Honey😘', isSent: true },
        { text: 'Hurry up, I\'m waiting 👙👉🏻👌🏻👄💦', isSent: false },

      ],
      position: 'Mommy'
    },
    // Add more dummy users as needed.
  ]);

  const [selectedChatIndex, setSelectedChatIndex] = useState(null);

  const handleSelectChat = (index) => {
    setSelectedChatIndex(index);
  };


  const selectedChat = selectedChatIndex !== null ? chats[selectedChatIndex] : null;

  return (
    <div className="app">
      <Sidebar 
        chats={chats.map((chat, index) => ({ ...chat, selected: index === selectedChatIndex }))}
        onSelectChat={handleSelectChat}
      />
      <ChatWindow selectedChat={selectedChat} />
      <ProfileCard selectedChat={selectedChat} />
    </div>
  );
};

export default App;
