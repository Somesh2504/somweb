import React from 'react';
import './About.css';
import Me2 from '../assets/som1.png';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import programmer2 from "../assets/pro.json";
function About() {
  return (
    <motion.div
      className="About"
      id="About"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -70 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <div className="about">
        <h1>About Me</h1>
        <div className="about_body">
        <div className="about-img">
          <Lottie
            animationData={programmer2}
            loop={true}
            autoplay={true}
            
          />
        </div>
          <div className="about-text">
            <p>Hey! I'm <strong>Somesh</strong>, a passionate web developer specializing in the <strong>MERN stack</strong>. I love building clean, responsive web applications that solve real-world problems.</p>
            <p>Currently learning and growing every day, I enjoy turning ideas into code and making user experiences as smooth as possible.</p>

            <h3>Skills</h3>
            <ul className="skills">
              <li>MongoDB</li>
              <li>Expressjs</li>
              <li>Reactjs</li>
              <li>Node.js</li>
              <li>Git & GitHub</li>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
