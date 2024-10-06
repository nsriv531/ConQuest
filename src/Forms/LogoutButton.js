import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../StylingForms/ButtonStyling.css';  // Make sure the path is correct


const LogoutButton = () => {
  const navigate = useNavigate();  // Initialize the hook

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing authentication tokens)
    navigate('/');  // Redirects to the landing page
  };

  return (
    <button onClick={handleLogout} className="medieval-logout-btn">
      Log Out
    </button>
  );
};

export default LogoutButton;
