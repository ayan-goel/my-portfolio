import React from 'react';

const Home = () => (
  <div className="content-container home-container">
    <div className="home-text">
      <h1 className="animate-float">
        Hi! I'm <span className="highlight-name">Ayan</span>.
      </h1>
      <p>
        I'm currently a junior at the Georgia Institute of Technology studying computer science, and have hands-on experience through <strong>coding projects</strong>, <strong>engineering research</strong>, and <strong>internship experience</strong>. These experiences have equipped me with the skills to tackle real-world challenges and collaborate effectively with diverse teams. My goals are to continue expanding my expertise in various programming languages and software while taking on new CS-related <strong>projects</strong>, <strong>undergraduate research opportunities</strong>, and <strong>internships</strong> to further develop my skills.
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