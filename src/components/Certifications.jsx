import React from 'react';
import { ExternalLink } from 'lucide-react';

const certs = [
  {
    category: 'Cloud',
    title: 'AWS Certified Cloud Practitioner',
    items: ['Amazon Web Services'],
    link: 'https://github.com/Parikshith-G/resume/blob/main/AWS%20Certified%20Cloud%20Practitioner.pdf',
    linkLabel: 'View certificate',
  },
  {
    category: 'Cloud',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    items: ['Microsoft Azure'],
    link: 'https://github.com/Parikshith-G/resume/blob/main/Axure%20az%20900%20certificate.pdf',
    linkLabel: 'View certificate',
  },
  {
    category: 'Algorithms',
    title: 'AlgoExpert',
    items: ['AlgoExpert', 'SystemsExpert'],
  },
  {
    category: 'AI / ML',
    title: 'Machine Learning Specialization',
    items: ['Andrew Ng ML + Deep Learning', 'META Data Analytics'],
  },
  {
    category: 'Programming',
    title: 'Golang Specialization',
    items: ['Getting Started with Go', 'Concurrency in Go'],
  },
  {
    category: 'Framework',
    title: 'Spring Boot & Agile',
    items: ['Spring Boot — Udemy', 'Agile — LinkedIn Learning'],
  },
];

export default function Certifications() {
  return (
    <div className="section-alt" id="certifications">
      <div className="section-alt-inner">
        <p className="section-label reveal">Certifications</p>
        <h2 className="section-title reveal">Credentials on the record</h2>
        <p className="section-kicker reveal">Cloud plus algorithms — the combo most JDs ask for.</p>
        <div className="section-divider reveal" />
        <div className="cert-grid">
          {certs.map((c, i) => (
            <div className={`cert-card reveal reveal-delay-${(i % 3) + 1}`} key={c.title}>
              <div className="cert-category">{c.category}</div>
              <div className="cert-title">{c.title}</div>
              <ul className="cert-items">
                {c.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {c.link && (
                <a href={c.link} target="_blank" rel="noreferrer" className="cert-link">
                  <ExternalLink size={11} /> {c.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
