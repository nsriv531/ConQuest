import React from 'react';
import './HomePage.css';  // Import the CSS file
import TaskForm from './Forms/TaskForm';
import LogoutButton from './Forms/LogoutButton';
import ShopButton from './Forms/ShopButton';
import AccountIcon from './Forms/AccountIcon';
import ProjetIcon from './Forms/ProjectIcon';
import DashBoardInterface from './Forms/DashBoardInterface';


function HomePage() {
  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        <AccountIcon />
        <ShopButton />  
        <TaskForm />  
        <DashBoardInterface />  
      </div>
    </div>
  );
}

export default HomePage;
