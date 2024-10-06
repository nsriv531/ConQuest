import React, { useState } from 'react';
import './HomePage.css';  // Import the CSS file
import TaskForm from './Forms/TaskForm';
import LogoutButton from './Forms/LogoutButton';
import ShopButton from './Forms/ShopButton';
import AccountIcon from './Forms/AccountIcon';
import ProjectIcon from './Forms/ProjectIcon';
import DashBoardInterface from './Forms/DashBoardInterface';
import GoToDashboard from './Forms/GoToDashboard';

function HomePage() {
  // State to track whether the dashboard is visible or not
  const [showDashboard, setShowDashboard] = useState(false);

  // Function to toggle the dashboard visibility
  const handleGoToDashboardClick = () => {
    setShowDashboard(true);
  };

  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        {/* Conditionally render components based on the state */}
        {showDashboard ? (
          <DashBoardInterface />
        ) : (
          <>
            <AccountIcon />
            <ShopButton />
            <TaskForm />
            <GoToDashboard onClick={handleGoToDashboardClick} /> {/* Pass the click handler */}
            <LogoutButton />
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
