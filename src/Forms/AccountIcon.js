import React from 'react';
import '../StylingForms/AccountIcon.css'; 
import knightImage from '../Assets/Walk-knight-blue.png';  // Import the image

const AccountIcon = () => {
  return (
    <div className="profile-icon-container">
      <img src={knightImage} alt="Profile Icon" className="profile-icon" />
    </div>
  );
};

export default AccountIcon;
