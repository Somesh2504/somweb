import React from 'react';
import './Footer.css';
import logo from '../assets/somweb.png';
import usericon from '../assets/user.png';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.div
      className="footer"
      id="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <div className="infooter">
        <div className="footop">
          <div className="main">
            <img src={logo} alt="logo" />
          </div>

          <div className="subscribe">
            <div className="subleft">
              <img src={usericon} alt="user icon" />
              <input type="email" placeholder="Enter email" />
            </div>
            <button>Subscribe</button>
          </div>
        </div>

        <hr className="divider" />

        <div className="foobut">
          <p className="bottom-left">© 2025 SomeshDev. All rights reserved.</p>
          <div className="bottom-right">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#Contact">Connect</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
