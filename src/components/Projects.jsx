import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const featured = [
  {
    title: 'InterviewPal — AI mock interviews & ATS scoring',
    desc: 'React + Spring Boot. Parses resumes, scores ATS fit, and runs Gemini-powered mock interviews. Live on AWS EC2 + Nginx + TLS — 99.5% uptime, 500+ concurrent users.',
    tags: ['Java', 'Spring Boot', 'React', 'Gemini AI', 'AWS EC2', 'Nginx', 'Docker', 'PostgreSQL', 'JWT'],
    live: 'https://interview-pal.duckdns.org/',
    art: 'project-art-a',
    url: 'interview-pal.duckdns.org',
  },
  {
    title: 'Visual System Design Simulator',
    desc: 'Drag-and-drop canvas with 30+ infra pieces (EC2, Redis, Kafka, CDN). Spring Boot API for designs, RPS/latency/budget challenges, and templates. Web-worker sim keeps the UI snappy.',
    tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Tailwind', 'Docker', 'AWS'],
    live: 'https://system-design.duckdns.org/',
    art: 'project-art-b',
    url: 'system-design.duckdns.org',
  },
];

const more = [
  {
    title: 'Theater Management System',
    desc: 'Role-based booking (admin / manager / customer) with real-time seat inventory and concurrency control so double-bookings die under load.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Thymeleaf'],
    github: 'https://github.com/Parikshith-G/TheaterManagementSystem',
  },
  {
    title: 'RFP Automation Platform',
    desc: 'Generates RFP docs and scores vendors — 70% less manual processing. Modular templates, dynamic PDFs, custom scoring rules.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'PDF', 'Docker'],
    github: 'https://github.com/Parikshith-G/RFP',
  },
  {
    title: 'RBAC Auth System',
    desc: 'JWT auth, fine-grained permissions, and locked-down APIs on Spring Boot + Angular.',
    tags: ['Java', 'Spring Boot', 'Angular', 'JWT', 'PostgreSQL'],
    github: 'https://github.com/Parikshith-G',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'MERN store with catalog, cart, orders, admin dashboard, JWT, and REST APIs.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/Parikshith-G',
  },
];

function Links({ p }) {
  return (
    <div className="project-links">
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer" className="project-link" aria-label="Live demo">
          <ExternalLink size={14} />
        </a>
      )}
      {p.github && (
        <a href={p.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
          <Github size={14} />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label reveal">Work</p>
      <h2 className="section-title reveal">Live products, not homework</h2>
      <p className="section-kicker reveal">
        Click the live badges. These are running on the internet, not in a screenshot.
      </p>
      <div className="section-divider reveal" />

      <div className="projects-featured">
        {featured.map((p, i) => (
          <article className={`project-featured reveal reveal-delay-${i + 1}`} key={p.title}>
            <div className={`project-art ${p.art}`}>
              <span className="live-badge">Live</span>
              <div className="project-window">
                <div className="project-dots"><i /><i /><i /></div>
                <div className="project-url">{p.url}</div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-header">
                <h3 className="project-title">{p.title}</h3>
                <Links p={p} />
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span className="tag tag-neutral" key={t}>{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="projects-more-title reveal">More builds</p>
      <div className="projects-grid">
        {more.map((p, i) => (
          <article className={`project-card reveal reveal-delay-${(i % 3) + 1}`} key={p.title}>
            <div className="project-header">
              <h3 className="project-title">{p.title}</h3>
              <Links p={p} />
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => <span className="tag tag-neutral" key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
