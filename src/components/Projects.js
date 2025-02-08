import React from 'react';

const Projects = () => (
  <div className="content-container">
    <h1>My Projects</h1>
    <div className="project-list">
      <div className="project">
        <h3>MediSense AI</h3>
        <p>An AI-powered medical diagnosis assistant that helps healthcare professionals make more accurate diagnoses. <a href="https://link-to-project1.com" target="_blank" rel="noopener noreferrer">View Project</a></p>
      </div>
      <div className="project">
        <h3>SpeakEasy</h3>
        <p>A language learning platform that uses AI to provide personalized conversation practice. <a href="https://link-to-project2.com" target="_blank" rel="noopener noreferrer">View Project</a></p>
      </div>
      <div className="project">
        <h3>Premier League Betting Assistant</h3>
        <p>Machine learning model for predicting Premier League match outcomes. <a href="https://link-to-project3.com" target="_blank" rel="noopener noreferrer">View Project</a></p>
      </div>
      <div className="project">
        <h3>Trading Competition UI</h3>
        <p>A modern interface for managing and participating in trading competitions. <a href="https://link-to-project4.com" target="_blank" rel="noopener noreferrer">View Project</a></p>
      </div>
    </div>
  </div>
);

export default Projects;