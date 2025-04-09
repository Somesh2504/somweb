import React, { useState } from 'react';
import './Contact.css';
import mail from '../assets/mail.png';
import phone from '../assets/phone-call.png';
import location from '../assets/location.png';
import { motion } from 'framer-motion';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div
      className="Contact"
      id="Contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <div className="inContact">
        <div className="title">
          <h1>Contact Me</h1>
          <p>Let's build something together!</p>
        </div>

        <div className="contactbody">
          <div className="left">
            <div className="info-card">
              <img src={mail} alt="email" />
              <p>somesh.dev@gmail.com</p>
            </div>
            <div className="info-card">
              <img src={phone} alt="phone" />
              <p>+91 9347679388</p>
            </div>
            <div className="info-card">
              <img src={location} alt="location" />
              <p>Hyderabad, Telangana</p>
            </div>
          </div>

          <form
            className="right"
            action="https://formsubmit.co/chevulasomesh2504@gmail.com"
            method="POST"
            onSubmit={() => setSubmitted(true)}
          >
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />

            <label>Your Mail</label>
            <input type="email" name="email" placeholder="Enter your email" required />

            <label>Your Message</label>
            <textarea name="message" placeholder="Enter your message" required></textarea>

            <input type="hidden" name="_captcha" value="false" />

            <button type="submit">Submit</button>

            {submitted && <p className="success-msg">Your message has been sent! ✅</p>}
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
