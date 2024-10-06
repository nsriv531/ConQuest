import React from 'react';
import '../StylingForms/ProjectMapButton.css'; // Import the CSS file

const ProjectMapButton = ({ projectName }) => {
  return (
    <button className="map-button">
      <div className="map-icon"></div>
      <span className="map-title">{projectName}</span>
    </button>
  );
};

export default ProjectMapButton;
