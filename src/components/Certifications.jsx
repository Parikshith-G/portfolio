import React from 'react';
import { ExternalLink } from 'lucide-react';

const certs = [
  {
    category: 'Cloud',
    title: 'AWS Certified Cloud Practitioner',
    items: ['Amazon Web Services'],
    link: 'https://github.com/Parikshith-G/resume/blob/main/AWS%20Certified%20Cloud%20Practitioner.pdf',
    linkLabel: 'View Certificate',
  },
  {
    category: 'Cloud',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    items: ['Microsoft Azure'],
    link: 'https://github.com/Parikshith-G/resume/blob/main/Axure%20az%20900%20certificate.pdf',
    linkLabel: 'View Certificate',
  },
  {
    category: 'Algorithms',
    title: 'AlgoExpert',
    items: ['AlgoExpert', 'SystemsExpert'],
  },
  {
    category: 'AI / ML',
    title: 'Machine Learning Specialization',
    items: ['Machine Learning — Andrew Ng (Coursera)', 'Deep Learning Specialization — Andrew Ng', 'META Data Analytics'],
  },
  {
    category: 'Programming',
    title: 'Golang Specialization',
    items: ['Getting Started with Go (Coursera)', 'Functions, Methods & Interfaces in Go', 'Concurrency in Go (Coursera)'],
  },
  {
    category: 'Framework',
    title: 'Spring Boot & Professional Development',
    items: ['Spring Boot — Udemy', 'Agile Development — LinkedIn Learning'],
  },
];

export default function Certifications() {
  return (
    <div className="section-alt" id="certifications">
      <div className="section-alt-inner">
        <p className="section-label reveal">Certifications</p>
        <h2 className="section-title reveal">Credentials</h2>
        <div className="section-divider reveal" />
        <div className="cert-grid">
          {certs.map((c, i) => (
            <div className={`cert-card reveal reveal-delay-${(i % 3) + 1}`} key={i}>
              <div className="cert-category">{c.category}</div>
              <div className="cert-title">{c.title}</div>
              <ul className="cert-items">
                {c.items.map((item, j) => <li key={j}>{item}</li>)}
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
