import React from 'react';
import { Mail, Github, Linkedin, Youtube } from 'lucide-react';

const contacts = [
  { icon: <Mail size={15} />, label: 'parikshith.g.kugve@gmail.com', href: 'mailto:parikshith.g.kugve@gmail.com' },
  { icon: <Github size={15} />, label: 'github.com/Parikshith-G', href: 'https://github.com/Parikshith-G' },
  { icon: <Linkedin size={15} />, label: 'linkedin.com/in/parikshith-g', href: 'https://www.linkedin.com/in/parikshith-g/' },
  { icon: <Youtube size={15} />, label: 'youtube.com/@AlgorithmArena', href: 'https://www.youtube.com/@AlgorithmArena' },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <p className="section-label reveal">Contact</p>
      <h2 className="section-title reveal">Let’s talk</h2>
      <div className="section-divider reveal" />

      <div className="contact-banner">
        <div className="contact-grid">
          <div className="reveal">
            <div className="available-badge">
              <span className="available-dot" />
              Open to new opportunities
            </div>
            <h3 className="contact-cta-title">If you need someone who ships Java systems — and can explain them — write me.</h3>
            <p className="contact-cta-text">
              Targeting Senior Software Engineer / backend-heavy roles. Distributed systems,
              AI tooling, and developer infrastructure are the sweet spot. I reply fast.
            </p>
            <div className="contact-actions">
              <a href="mailto:parikshith.g.kugve@gmail.com" className="btn btn-primary">
                <Mail size={14} /> Email me
              </a>
              <a href={`${import.meta.env.BASE_URL}Parikshith.G.pdf`} download className="btn btn-outline">
                Download resume
              </a>
            </div>
          </div>

          <div className="contact-items reveal reveal-delay-2">
            {contacts.map((c) => (
              <a key={c.href} href={c.href} target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-item-icon">{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
