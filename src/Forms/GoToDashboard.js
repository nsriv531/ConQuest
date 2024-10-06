import React from 'react';

const GoToDashboard = ({ onClick }) => {
  return (
    <button onClick={onClick} className="go-to-dashboard-btn">
      Go to Dashboard
    </button>
  );
};

export default GoToDashboard;
