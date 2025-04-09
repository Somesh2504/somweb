import React from 'react'
import './App.css'
import Navbar  from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Pojects'
import  { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5s animation

    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {isLoading ? <Preloader /> : <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/> 
    </div>}
    </AnimatePresence>
  );
}

export default App
