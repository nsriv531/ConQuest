import React from 'react';
import '../StylingForms/AccountIcon.css'; 

const AccountIcon = ({ imageUrl }) => {
  return (
    <div className="profile-icon-container">
      <img src={imageUrl} alt="Profile Icon" className="profile-icon" />
    </div>
  );
};

export default AccountIcon;
