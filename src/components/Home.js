import React from 'react';

const Home = () => (
  <div className="content-container home-container">
    <div className="home-text">
      <h1 className="animate-float">
        Hi! I'm <span className="highlight-name">Ayan</span>.
      </h1>
      <p>
      I’m a junior at the Georgia Institute of Technology pursuing a degree in Computer Science. Through hands-on coding <strong>projects</strong>, <strong>engineering research</strong>, and <strong>internship experience</strong>, I’ve developed strong problem-solving skills and the ability to collaborate effectively with diverse teams. My goal is to continue expanding my expertise in programming languages and software development while seeking new opportunities in CS-related projects, undergraduate research, and nternships to further enhance my skills and industry experience.
      </p>
    </div>
    <div className="profile-image">
      <img 
        src="/pfp.jpg"
        alt="Ayan's profile"
        className="floating-image"
      />
    </div>
  </div>
);

export default Home;