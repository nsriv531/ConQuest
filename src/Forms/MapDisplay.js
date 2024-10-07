import React from 'react';
// Import your images
import avatar1 from '../Assets/avatar-1.png';
import avatar2 from '../Assets/avatar-2.png';
import avatar3 from '../Assets/avatar-3.png';
import avatar4 from '../Assets/avatar-4.png';
import '../StylingForms/MapDisplayStyling.css';

const AvatarCycle = ({ currentAvatar }) => {
  // Array of avatar images
  const avatars = [avatar1, avatar2, avatar3, avatar4];

  return (
    <div className="avatar-container">
      {/* Display the current avatar based on the passed prop */}
      <img
        src={avatars[currentAvatar]}
        alt={`Avatar ${currentAvatar + 1}`}
        className="avatar-image"
      />
    </div>
  );
};

export default AvatarCycle;
