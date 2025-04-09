import React from 'react';
import './Project.css';
import my_projects from '../assets/projectData';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
      className="Projects"
      id="Projects"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -70 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <h1 className="project-title">Projects</h1>
      <div className="project-grid">
        {my_projects.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={proj.p_image} alt={proj.p_name} className="project-image" />
            <div className="project-content">
              <h2>{proj.p_name}</h2>
              <p>{proj.p_description}</p>
              <div className="project-links">
                <a href={proj.p_live_link} target="_blank" rel="noreferrer">Live</a>
                <a href={proj.p_code_link} target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
