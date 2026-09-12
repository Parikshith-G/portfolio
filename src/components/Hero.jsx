import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Youtube, MapPin } from 'lucide-react';
import LeetCodeSolved from './LeetCodeSolved.jsx';

const roles = [
  'Java microservices at production scale',
  'Spring Boot · Kafka · gRPC · GraphQL',
  'AWS · Docker · Kubernetes · ADOT',
  'AI agents that ship, not slide decks',
];

const stack = ['Java 21/25', 'Spring Boot', 'Kafka', 'gRPC', 'AWS', 'Kubernetes', 'PostgreSQL', 'AI Agents'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIndex];
    let t;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 42);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
    } else {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="hero-wrapper">
      <div className="hero-inner">
        <div>
          <div className="hero-tag reveal">
            <span className="hero-tag-dot" />
            Open to Senior / Backend roles
          </div>

          <h1 className="hero-name reveal reveal-delay-1">
            Parikshith <span className="hero-name-last">G</span>
          </h1>

          <p className="hero-pitch reveal reveal-delay-2">
            Senior Software Engineer at <strong>Capgemini</strong> (Charter Communications).
            I design Java systems that hold up in production —{' '}
            <strong>10K+ req/min</strong>, Kafka with <strong>&lt;0.01% failures</strong>,
            and AI tools that cut migration work by <strong>60%</strong>.
          </p>

          <div className="hero-role-line reveal reveal-delay-2">
            <span className="hero-role-text">{displayed}</span>
            <span className="hero-cursor" />
          </div>

          <div className="hero-meta reveal reveal-delay-3">
            <span><MapPin size={12} /> Bengaluru · remote-friendly</span>
            <span className="hero-meta-sep">/</span>
            <a href="https://leetcode.com/u/Worms_Sama/" target="_blank" rel="noreferrer">
              <LeetCodeSolved username="worms_sama" /> LeetCode
            </a>
            <span className="hero-meta-sep">/</span>
            <a href="https://www.youtube.com/@AlgorithmArena" target="_blank" rel="noreferrer">
              150+ DSA videos
            </a>
          </div>

          <div className="hero-actions reveal reveal-delay-4">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              See shipped work
            </a>
            <a href={`${import.meta.env.BASE_URL}Parikshith.G.pdf`} download className="btn btn-outline">
              Download resume
            </a>
          </div>

          <div className="hero-links reveal reveal-delay-4">
            <a href="https://github.com/Parikshith-G" target="_blank" rel="noreferrer" className="hero-icon-link" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/parikshith-g/" target="_blank" rel="noreferrer" className="hero-icon-link" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="https://www.youtube.com/@AlgorithmArena" target="_blank" rel="noreferrer" className="hero-icon-link" aria-label="YouTube">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <aside className="hero-panel reveal reveal-delay-2">
          <div className="hero-panel-top">
            <span className="hero-panel-kicker">Production impact</span>
            <span className="available-badge" style={{ marginBottom: 0 }}>
              <span className="available-dot" />
              Available
            </span>
          </div>
          <div className="hero-metrics">
            <div className="hero-metric">
              <div className="hero-metric-value">10K+</div>
              <div className="hero-metric-label">requests / min in production</div>
            </div>
            <div className="hero-metric">
              <div className="hero-metric-value">60%</div>
              <div className="hero-metric-label">faster Java 21/25 migrations</div>
            </div>
            <div className="hero-metric">
              <div className="hero-metric-value">50%</div>
              <div className="hero-metric-label">lower MTTR with AWS ADOT</div>
            </div>
            <div className="hero-metric">
              <div className="hero-metric-value">12ms</div>
              <div className="hero-metric-label">p99 after gRPC rewrite</div>
            </div>
          </div>
          <div className="hero-stack">
            {stack.map(s => <span key={s}>{s}</span>)}
          </div>
        </aside>
      </div>
    </div>
  );
}
