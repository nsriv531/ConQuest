import React, { useState } from 'react';
// Import your images
import avatar1 from '../Assets/avatar-1.png';
import avatar2 from '../Assets/avatar-2.png';
import avatar3 from '../Assets/avatar-3.png';
import avatar4 from '../Assets/avatar-4.png';
import '../StylingForms/MapDisplayStyling.css';

const AvatarCycle = () => {
  // Array of avatar images
  const avatars = [avatar1, avatar2, avatar3, avatar4];

  // State to keep track of the current image index
  const [currentAvatar, setCurrentAvatar] = useState(0);

  // Function to cycle through the avatars
  const handleNextAvatar = () => {
    setCurrentAvatar((prevAvatar) => (prevAvatar + 1) % avatars.length);
  };

  return (
    <div className="avatar-container">
      {/* Display the current avatar */}
      <img
        src={avatars[currentAvatar]}
        alt={`Avatar ${currentAvatar + 1}`}
        className="avatar-image"
      />
      
      {/* Button to cycle through avatars */}
      <button onClick={handleNextAvatar} className="avatar-button">
        Next Avatar
      </button>
    </div>
  );
};

export default AvatarCycle;
