import React, { useState } from 'react';
import './HomePage.css';  // Import the CSS file
import TaskForm from './Forms/TaskForm';
import LogoutButton from './Forms/LogoutButton';
import ShopButton from './Forms/ShopButton';
import AccountIcon from './Forms/AccountIcon';
import ProjectIcon from './Forms/ProjectIcon';
import DashBoardInterface from './Forms/DashBoardInterface';
import GoToDashboard from './Forms/GoToDashboard';
import MapDisplay from './Forms/MapDisplay';

function HomePage() {
  // State to track whether the dashboard is visible or not
  const [showDashboard, setShowDashboard] = useState(false);

  // State to manage the avatar index (or any cycling behavior you need)
  const [currentAvatar, setCurrentAvatar] = useState(0);

  // Function to toggle the dashboard visibility
  const handleGoToDashboardClick = () => {
    setShowDashboard(true);
  };

  // Function to return back to the home page from the dashboard
  const handleBackToHome = () => {
    setShowDashboard(false);
  };

  // Function to cycle through avatars (shared with TaskForm)
  const handleCycleAvatar = () => {
    setCurrentAvatar((prevAvatar) => (prevAvatar + 1) % 4); // Assuming there are 4 avatars or actions to cycle
  };

  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        {/* Conditionally render components based on the state */}
        {showDashboard ? (
          <DashBoardInterface onBackToHome={handleBackToHome} />
        ) : (
          <div className="layout">
            <div className="map-section">
              <MapDisplay /> {/* Map on the left */}
            </div>
            <div className="components-section">
              <AccountIcon />
              <ShopButton />
              <TaskForm onCheckboxClick={handleCycleAvatar} /> {/* Pass the avatar cycling function */}
              <GoToDashboard onClick={handleGoToDashboardClick} /> {/* Pass the click handler */}
              <LogoutButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
