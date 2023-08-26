import React from 'react';

const Resume = () => {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Git'];

  return (
    <section>
      <h2>Resume</h2>
      <p>Download my resume: <a href="your-resume.pdf" target="_blank" rel="noopener noreferrer">Resume.pdf</a></p>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
