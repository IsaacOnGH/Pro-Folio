import React from 'react';
import Project from './Project';

const projects = [
  {
    id: 1,
    title: 'MusicFromYou',
    image: process.env.PUBLIC_URL + '/MusicFromYou.png',
    deployedLink: 'https://thawing-waters-14161-911ab275be19.herokuapp.com/',
    githubLink: 'https://github.com/IsaacOnGH/MusicFromYou'
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
