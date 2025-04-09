import React from "react";
import Me from "../assets/som4.jpg";
import "./home.css";
import Resume from "../assets/SomResume.pdf";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import leetcode from "../assets/leetcode-white.svg";
import Lottie from "lottie-react";
import devAnimation from "../assets/programmer.json";
function home() {
  return (
    <motion.div
      className="Home"
      id="Home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="inhome">
        <div className="homeimg">
          <Lottie
            animationData={devAnimation}
            loop={true}
            autoplay={true}
            
          />
        </div>

        <div className="head">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="highlight-name">Somesh</span>
          </motion.h1>

          <h2>
            {" "}
            <Typewriter
              words={["MERN Developer", "Tech Enthusiast"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="intro">
            Passionate full-stack web developer crafting modern and responsive
            web apps.
          </p>
          <div className="socials">
            <a href="https://github.com/Somesh2504" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/chevula-somesh-782868266/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://leetcode.com/u/chevulasomesh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={leetcode} alt="LeetCode" className="leetcode-icon" />
            </a>
          </div>

          <div className="my_docs">
            <a href="#Contact">
              <button className="connect">Connect</button>
            </a>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <button className="resume">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default home;
