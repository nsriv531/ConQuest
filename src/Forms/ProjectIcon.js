import React from 'react';
import '../StylingForms/ProjectMapButton.css'; // Import the CSS file

const ProjectMapButton = ({ projectName, onClick }) => {
  return (
    <button className="map-button" onClick={onClick}>
      <div className="map-icon"></div>
      <span className="map-title">{projectName}</span>
    </button>
  );
};

export default ProjectMapButton;
