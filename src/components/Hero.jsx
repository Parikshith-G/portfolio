import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Youtube, ExternalLink, MapPin } from 'lucide-react';
import LeetCodeSolved from './LeetCodeSolved.jsx';

const roles = [
  'Java & Microservices',
  'Spring Boot · Kafka · gRPC',
  'AWS · Docker · Kubernetes',
  'AI-Powered Engineering',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIndex];
    let t;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="hero-wrapper">
      <div className="hero-grid" />

      <div className="hero-inner">
        {/* eyebrow */}
        <div className="hero-tag reveal">
          <span className="hero-tag-dot" />
          Senior Software Engineer · Capgemini
        </div>

        {/* name */}
        <h1 className="hero-name reveal reveal-delay-1">
          <span className="hero-name-first">Parikshith </span>
          <span className="hero-name-last">G</span>
        </h1>

        {/* typing role */}
        <div className="hero-role-line reveal reveal-delay-2">
          <span className="hero-role-text">{displayed}</span>
          <span className="hero-cursor" />
        </div>

        {/* meta */}
        <div className="hero-meta reveal reveal-delay-3">
          <span><MapPin size={12} /> Bengaluru, India</span>
          <span className="hero-meta-sep">/</span>
          <a href="https://leetcode.com/u/Worms_Sama/" target="_blank" rel="noreferrer">
            <LeetCodeSolved username="worms_sama" /> leetcode
          </a>
          <span className="hero-meta-sep">/</span>
          <a href="https://www.youtube.com/@AlgorithmArena" target="_blank" rel="noreferrer">
            150+ dsa tutorials
          </a>
        </div>

        {/* CTAs */}
        <div className="hero-actions reveal reveal-delay-4">
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            View Projects
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Parikshith.G.pdf`}
            download
            className="btn btn-outline"
          >
            Resume
          </a>
        </div>

        {/* socials */}
        <div className="hero-links reveal reveal-delay-4">
          <a href="https://github.com/Parikshith-G" target="_blank" rel="noreferrer" className="hero-icon-link" aria-label="GitHub">
            <Github size={15} />
          </a>
          <a href="https://www.linkedin.com/in/parikshith-g/" target="_blank" rel="noreferrer" className="hero-icon-link" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
          <a href="https://www.youtube.com/@AlgorithmArena" target="_blank" rel="noreferrer" className="hero-icon-link" aria-label="YouTube">
            <Youtube size={15} />
          </a>
          <a href="https://parikshith-g.github.io/portfolio/" target="_blank" rel="noreferrer" className="hero-icon-link" aria-label="Live site">
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
