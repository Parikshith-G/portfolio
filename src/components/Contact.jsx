import React from 'react';
import { Mail, Github, Linkedin, Youtube } from 'lucide-react';

const contacts = [
  { icon: <Mail size={15} />,    label: 'parikshith.g.kugve@gmail.com', href: 'mailto:parikshith.g.kugve@gmail.com' },
  { icon: <Github size={15} />,  label: 'github.com/Parikshith-G',       href: 'https://github.com/Parikshith-G' },
  { icon: <Linkedin size={15} />, label: 'linkedin.com/in/parikshith-g', href: 'https://www.linkedin.com/in/parikshith-g/' },
  { icon: <Youtube size={15} />, label: 'youtube.com/@AlgorithmArena',    href: 'https://www.youtube.com/@AlgorithmArena' },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <p className="section-label reveal">Contact</p>
      <h2 className="section-title reveal">Get In Touch</h2>
      <div className="section-divider reveal" />

      <div className="contact-grid">
        <div className="reveal">
          <div className="available-badge">
            <span className="available-dot" />
            Open to new opportunities
          </div>
          <div className="contact-items">
            {contacts.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-item-icon">{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>
        </div>

        <div className="contact-cta reveal reveal-delay-2">
          <div className="contact-cta-title">Open to new roles and collaborations</div>
          <p className="contact-cta-text">
            I'm actively looking for Senior Software Engineer or backend-focused engineering
            roles. If you're building something interesting — distributed systems, AI tooling,
            or developer infrastructure — I'd love to hear about it.
          </p>
          <div className="contact-actions">
            <a href="mailto:parikshith.g.kugve@gmail.com" className="btn btn-primary">
              <Mail size={14} /> Send an Email
            </a>
            <a href={`${import.meta.env.BASE_URL}Parikshith.G.pdf`} download className="btn btn-outline">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
