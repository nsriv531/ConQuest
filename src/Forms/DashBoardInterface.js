import React from 'react';
import ProjectMapButton from './ProjectIcon'; // Import the CSS for styling
import  '../StylingForms/Dashboard.css'; // Import the ProjectMapButton component

const DashBoardInterface = ({ projects }) => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">My Dashboard</h1>
      <div className="dashboard-projects">
        {/* Render each ProjectMapButton component */}
        {projects.map((project, index) => (
          <ProjectMapButton key={index} projectName={project.name} />
        ))}

        {/* Render the plus button */}
        <div className="plus-button">
          <p>+</p>
        </div>
      </div>
    </div>
  );
};

// Default props to populate with some initial data
DashBoardInterface.defaultProps = {
  projects: [
    { name: 'My Research Paper' },
    { name: 'Project 2' },
    { name: 'Project 3' },
    { name: 'Project 4' },
    { name: 'Project 5' }
  ]
};

export default DashBoardInterface;
