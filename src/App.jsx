import React from 'react';
import './App.css';
import useScrollReveal from './hooks/useScrollReveal.js';
import usePointerGlow from './hooks/usePointerGlow.js';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';

function App() {
  useScrollReveal();
  usePointerGlow();

  return (
    <div className="App">
      <div className="ambient" aria-hidden="true">
        <div className="ambient-orb ambient-orb-a" />
        <div className="ambient-orb ambient-orb-b" />
        <div className="ambient-orb ambient-orb-c" />
        <div className="ambient-grid" />
      </div>
      <div className="ambient-glow" aria-hidden="true" />
      <div className="ambient-noise" aria-hidden="true" />

      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <footer className="footer">
        <p>
          Parikshith G ·{' '}
          <a href="https://www.youtube.com/@AlgorithmArena" target="_blank" rel="noreferrer">
            Algorithm Arena
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
