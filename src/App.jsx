import React from 'react';
import './App.css';
import useScrollReveal from './hooks/useScrollReveal.js';
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

  return (
    <div className="App">
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
          Parikshith G &nbsp;&middot;&nbsp;{' '}
          <a href="https://www.youtube.com/@AlgorithmArena" target="_blank" rel="noreferrer">
            Algorithm Arena
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
