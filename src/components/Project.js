import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
        Deployed App
      </a>
      <br></br>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
    </div>
  );
};

export default Project;
