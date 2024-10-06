import React from 'react';
import '../StylingForms/ButtonStyling.css';  // Make sure the path is correct


const GoToDashboard = ({ onClick }) => {
  return (
    <button onClick={onClick} className="go-to-dashboard-btn medieval-logout-btn">
      Go to Dashboard
    </button>
  );
};

export default GoToDashboard;
