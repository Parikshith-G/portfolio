import React from 'react';

const experience = [
  {
    role: 'Senior Analyst — Software Engineer',
    company: 'Capgemini (Charter Communications)',
    period: 'Apr 2024 – Present',
    bullets: [
      'Built custom AI agents to refactor legacy codebases to Java 21/25 standards — cut upgrade effort by 60% and accelerated migration timelines across client projects.',
      'Created an AI-powered engineer onboarding tool covering architecture walkthroughs and dev environment setup — reduced ramp-up time by 45%.',
      'Designed new Java microservices from scratch using LLD principles (Factory, Strategy, Observer) — services handle 10K+ req/min in production.',
      'Extended legacy Golang telemetry services with a gRPC interface — throughput up 60%, p99 latency reduced to 12 ms.',
      'Instrumented the microservices fleet with AWS Distro for OpenTelemetry (ADOT) — distributed traces, metrics, and logs shipped to AWS X-Ray + CloudWatch; MTTR cut by 50%.',
      'Exposed a GraphQL API layer over existing REST services (Spring for GraphQL) — eliminated over-fetching and reduced API round-trips by 35%.',
      'Built Kafka pipelines with retry logic and dead-letter queues — message failure rate under 0.01%.',
      'Set up Docker + GitLab CI/CD pipelines — deployment time cut by 40%, rollbacks made frictionless.',
    ],
    tags: ['Java 17/25', 'Spring Boot', 'Golang', 'gRPC', 'GraphQL', 'Apache Kafka', 'AWS ADOT', 'AWS X-Ray', 'CloudWatch', 'EC2', 'EKS', 'Docker', 'GitLab CI/CD', 'PostgreSQL'],
  },
  {
    role: 'Technology Intern',
    company: 'Grant Thornton LLP',
    period: 'Feb 2023 – May 2023',
    bullets: [
      'Worked with fintech teams to design backend specs and data flows for scalable banking systems.',
      'Gained hands-on experience in agile ceremonies, code reviews, and cross-functional collaboration.',
    ],
    tags: ['Python', 'SQL', 'REST APIs', 'Git'],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section-label reveal">Experience</p>
      <h2 className="section-title reveal">Professional History</h2>
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
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <div className="timeline-tags">
              {e.tags.map((t, j) => <span className="tag tag-neutral" key={j}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
