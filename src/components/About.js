import React, { useState, useRef, useEffect } from 'react';

const Education = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="experience-card">
      <div className="experience-header" onClick={handleClick}>
        <img 
          src="/gt-logo2.png" 
          alt="Georgia Tech Logo" 
          className="institution-logo"
        />
        <div className="education-title">
          <h2>Georgia Institute of Technology</h2>
          <p>Bachelor of Science in Computer Science</p>
        </div>
        <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
      </div>
      
      <div className={`experience-content ${isExpanded ? 'visible' : ''}`}>
        <p className="gpa">GPA: 4.00/4.00</p>
        <p className="graduation">Expected Graduation: May 2027</p>
        <p className="concentration">Concentration in Intelligence (AI/ML) & Info Internetworks</p>
        <div className="scholarships">
          <h4>Honors & Awards</h4>
          <ul>
            <li>Zell Miller Scholarship (Full Tuition)</li>
            <li>National Merit Scholarship</li>
            <li>Faculty Honors (Fall 2024 - Present)</li>
            <li>Dean's List (Fall 2024 - Present)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="experience-card">
      <div className="experience-header" onClick={handleClick}>
        <img 
          src={experience.logo} 
          alt={`${experience.company} Logo`} 
          className="company-logo"
        />
        <div className="experience-title">
          <h3>{experience.company}</h3>
          <p>{experience.position}</p>
        </div>
        <div className="experience-info">
          <p>{experience.location}</p>
          <p>{experience.dates}</p>
        </div>
        <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
      </div>
      
      <div className={`experience-content ${isExpanded ? 'visible' : ''}`} ref={contentRef}>
        <ul>
          {experience.summary.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const About = () => {
  const experiences = [
    {
      company: "FanDuel",
      position: "Software Engineering Intern",
      location: "Atlanta, GA",
      dates: "May 2025 - Aug 2025",
      logo: "/fanduel.svg",
      summary: [
        "Incoming Software Engineering Intern at FanDuel",
      ]
    },
    {
      company: "Georgia Tech Consulting",
      position: "Technology Consultant",
      location: "Atlanta, GA",
      dates: "January 2025 - Present",
      logo: "/ucc.jpeg",
      summary: [
        "Incoming Software Engineering Intern at FanDuel",
      ]
    },
    {
      company: "The Medford Group",
      position: "Undergraduate Researcher",
      location: "Atlanta, GA",
      dates: "December 2024 - Present",
      logo: "/bdqm.png",
      summary: [
        "Incoming Software Engineering Intern at FanDuel",
      ]
    },
    {
      company: "Trading at Georgia Tech",
      position: "Frontend Developer",
      location: "Atlanta, GA",
      dates: "October 2024 - Present",
      logo: "/tgt.jpeg",
      summary: [
        "Incoming Software Engineering Intern at FanDuel",
      ]
    },
    {
      company: "Data Science at Georgia Tech",
      position: "Data Scientist",
      location: "Atlanta, GA",
      dates: "September 2024 - Present",
      logo: "/dsgt.png",
      summary: [
        "Incoming Software Engineering Intern at FanDuel",
      ]
    },
    {
      company: "FIRST Tech Challenge Team 14116",
      position: "Programming Team Lead",
      location: "Marietta, GA",
      dates: "August 2020 - May 2024",
      logo: "/first.jpg",
      summary: [
        "Incoming Software Engineering Intern at FanDuel",
      ]
    },
    {
      company: "LifeCycle Building Center",
      position: "Data Science Intern",
      location: "Atlanta, GA",
      dates: "May 2023 - Aug 2023",
      logo: "/lifecycle.png",
      summary: [
        "Developed and implemented a comprehensive testing framework for NCR's point-of-sale system using Python and Pytest",
        "Automated over 200 test cases, reducing manual testing time by 75% and improving test coverage by 40%",
        "Created detailed documentation and conducted knowledge transfer sessions for the testing framework",
        "Collaborated with cross-functional teams to identify and resolve software defects"
      ]
    },
    // Add more experiences as needed
  ];

  return (
    <div className="about-container">
      
      <Education />
      
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default About;