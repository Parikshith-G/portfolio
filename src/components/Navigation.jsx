import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const resumeHref = `${import.meta.env.BASE_URL}Parikshith.G.pdf`;

export default function Navigation() {
  const [active, setActive] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="nav">
        <a href="#" className="nav-logo">Parikshith <span>G</span></a>
        <div className="nav-right">
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`nav-link${active === l.href.slice(1) ? ' active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={resumeHref} download className="nav-resume">Resume</a>
          <button className="nav-mobile-btn" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="nav-mobile-menu">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link${active === l.href.slice(1) ? ' active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
            >
              {l.label}
            </a>
          ))}
          <a href={resumeHref} download className="nav-link">Download Resume</a>
        </div>
      )}
    </>
  );
}
