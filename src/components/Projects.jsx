import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'InterviewPal — AI Mock Interview & ATS Resume Tool',
    desc: 'Full-stack platform with React + Java Spring Boot — parses resumes, scores ATS compatibility, and runs mock interviews via Gemini AI. Deployed on AWS EC2 behind Nginx with TLS — 99.5% uptime, handles 500+ concurrent users.',
    tags: ['Java', 'Spring Boot', 'React', 'Gemini AI', 'AWS EC2', 'Nginx', 'Docker', 'PostgreSQL', 'JWT'],
    live: 'https://interview-pal.duckdns.org/',
  },
  {
    title: 'Visual System Design Simulator',
    desc: 'React + TypeScript drag-and-drop canvas with 30+ components (EC2, Redis, Kafka, CDN, etc.). Spring Boot REST API for designs, challenges (RPS/latency/budget), and prebuilt templates. Web-worker simulation engine keeps UI smooth under heavy interaction.',
    tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Tailwind CSS', 'Docker', 'AWS EC2', 'Nginx'],
    live: 'https://system-design.duckdns.org/',
  },
  {
    title: 'Theater Management System',
    desc: 'Role-based booking platform (admin / manager / customer) with real-time seat inventory and concurrency control to prevent double-bookings under high traffic.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JWT', 'Thymeleaf'],
    github: 'https://github.com/Parikshith-G/TheaterManagementSystem',
  },
  {
    title: 'RFP Automation Platform',
    desc: 'Automated RFP document generation and vendor scoring with Spring Boot — cut manual processing by 70%. Modular template engine for dynamic PDF generation with customisable scoring criteria.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'PDF Generation', 'Docker'],
    github: 'https://github.com/Parikshith-G/RFP',
  },
  {
    title: 'RBAC Auth System',
    desc: 'Role-based access control system with JWT authentication, fine-grained permission management, and secure API endpoints across a Spring Boot + Angular stack.',
    tags: ['Java', 'Spring Boot', 'Angular', 'JWT', 'PostgreSQL'],
    github: 'https://github.com/Parikshith-G',
  },
  {
    title: 'AI-Driven Flappy Bird',
    desc: 'Flappy Bird AI using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm — agents evolve from scratch to clear pipes without any hardcoded rules.',
    tags: ['Python', 'NEAT', 'Pygame', 'AI/ML'],
    github: 'https://github.com/Parikshith-G',
  },
  {
    title: 'Cryptography Web App',
    desc: 'Django-based web application demonstrating classical and modern cryptographic algorithms — Caesar, Vigenère, RSA, AES — with interactive encryption/decryption UI.',
    tags: ['Python', 'Django', 'HTML', 'CSS'],
    github: 'https://github.com/Parikshith-G',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Full-stack MERN e-commerce platform with product catalog, cart, order management, and admin dashboard. Includes JWT auth and RESTful API.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/Parikshith-G',
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label reveal">Projects</p>
      <h2 className="section-title reveal">Things I've Built</h2>
      <div className="section-divider reveal" />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className={`project-card reveal reveal-delay-${(i % 3) + 1}`} key={i}>
            <div className="project-header">
              <div className="project-title">{p.title}</div>
              <div className="project-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link" aria-label="Live demo">
                    <ExternalLink size={13} />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
                    <Github size={13} />
                  </a>
                )}
              </div>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t, j) => <span className="tag tag-neutral" key={j}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
