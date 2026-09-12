import React from 'react';

const experience = [
  {
    role: 'Senior Analyst — Software Engineer',
    company: 'Capgemini · Charter Communications',
    period: 'Apr 2024 – Present',
    bullets: [
      'Built custom AI agents to refactor legacy codebases to Java 21/25 — cut upgrade effort by 60% across client projects.',
      'Shipped an AI onboarding tool for architecture + env setup — reduced ramp-up time by 45%.',
      'Designed Java microservices from scratch (Factory, Strategy, Observer) now handling 10K+ req/min.',
      'Extended Golang telemetry with gRPC — throughput up 60%, p99 latency down to 12 ms.',
      'Instrumented the fleet with AWS ADOT → X-Ray + CloudWatch — MTTR cut by 50%.',
      'Added Spring GraphQL over REST — 35% fewer API round-trips, no over-fetching.',
      'Kafka pipelines with retries and DLQs — message failure rate under 0.01%.',
      'Docker + GitLab CI/CD — 40% faster deploys and painless rollbacks.',
    ],
    tags: ['Java 17/25', 'Spring Boot', 'Golang', 'gRPC', 'GraphQL', 'Kafka', 'AWS ADOT', 'X-Ray', 'EKS', 'Docker', 'GitLab CI/CD', 'PostgreSQL'],
  },
  {
    role: 'Technology Intern',
    company: 'Grant Thornton LLP',
    period: 'Feb 2023 – May 2023',
    bullets: [
      'Worked with fintech teams on backend specs and data flows for scalable banking systems.',
      'Lived inside agile: standups, reviews, and shipping with people who actually used the code.',
    ],
    tags: ['Python', 'SQL', 'REST APIs', 'Git'],
  },
];

const METRIC = /(\d+(?:\.\d+)?%|\d+K\+|\d+\s?ms|0\.01%|\d+\+)/g;

function highlight(text) {
  return text.split(METRIC).map((part, i) =>
    /^\d/.test(part) ? <span className="metric" key={i}>{part}</span> : part
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section-label reveal">Experience</p>
      <h2 className="section-title reveal">Proof, with numbers attached</h2>
      <p className="section-kicker reveal">
        Every line below is something a hiring manager can ask about on a call.
      </p>
      <div className="section-divider reveal" />

      <div className="timeline">
        {experience.map((e, i) => (
          <div className={`timeline-item reveal reveal-delay-${i + 1}`} key={i}>
            <div className="timeline-header">
              <div>
                <div className="timeline-role">{e.role}</div>
                <div className="timeline-company">{e.company}</div>
              </div>
              <span className="timeline-period">{e.period}</span>
            </div>
            <ul className="timeline-bullets">
              {e.bullets.map((b, j) => <li key={j}>{highlight(b)}</li>)}
            </ul>
            <div className="timeline-tags">
              {e.tags.map((t) => <span className="tag tag-neutral" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
