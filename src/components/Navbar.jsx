import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/somweb.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(section);
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = ["Home", "About", "Projects", "Contact"];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.55, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".mynavbar")) setIsOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="mynavbar" id="navbar">
      <img src={logo} alt="logo" />

      <ul className={`menu ${isOpen ? "open" : ""}`}>
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li
            key={item}
            className={activeLink === item ? "active" : ""}
            onClick={() => handleScroll(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      <a className="Connect" href="#Contact">
        <button>
          Say Hi <span className="wave">👋</span>
        </button>
      </a>

      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Navbar;
