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
      name: 'Mommy',
      lastMessage: 'when will you be back?',
      avatar: 'https://img.20mn.fr/09sEXF8OTwukferKv9mPmCk/1444x920_35th-annual-glaad-media-awards-at-the-beverly-hilton-hotel-featuring-sydney-sweeney-where-beverly-hills-california-united-states-when-14-mar-2024-credit-media-punch-insta-rimages',
      messages: [
        { text: 'where are you?', isSent: false },
        { text: 'I\'m in the office', isSent: true },
        { text: 'when will you be back?', isSent: false },
        

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
