import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import FloatingShapes from './components/FloatingShapes';

function App() {
  return (
    <div className="App">
      <FloatingShapes />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;