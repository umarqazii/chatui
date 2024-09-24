// ProfileCard.js
import React from 'react';

const ProfileCard = ({ selectedChat }) => {
  if (!selectedChat) return <div className="profile-card">Select a chat to view details</div>;

  return (
    <div className="profile-card">
      <img src={selectedChat.avatar} alt={selectedChat.name} />
      <h3>{selectedChat.name}</h3>
      <p>{selectedChat.position}</p>
    </div>
  );
};

export default ProfileCard;
