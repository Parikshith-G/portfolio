import React from 'react';

const skills = [
  { title: 'Languages',        tags: ['Java (17/21/25)', 'Python', 'Golang', 'JavaScript', 'SQL'] },
  { title: 'Frameworks',       tags: ['Spring Boot', 'Spring Cloud', 'Spring for GraphQL', 'React.js', 'Node.js', 'Hibernate', 'JPA'] },
  { title: 'APIs & Protocols', tags: ['REST', 'gRPC', 'GraphQL'] },
  { title: 'AI / ML',          tags: ['LLM Integration', 'Gemini AI', 'OpenAI', 'AI Agents', 'Prompt Engineering'] },
  { title: 'Cloud & DevOps',   tags: ['AWS EC2', 'EKS', 'Lambda', 'S3', 'Secrets Manager', 'X-Ray', 'CloudWatch', 'AWS ADOT', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Nginx'] },
  { title: 'Databases',        tags: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'] },
  { title: 'Messaging',        tags: ['Apache Kafka', 'RabbitMQ'] },
  { title: 'Architecture',     tags: ['Microservices', 'Event-Driven', 'LLD', 'Design Patterns', 'System Design'] },
  { title: 'Observability',    tags: ['AWS ADOT', 'Distributed Tracing', 'AWS X-Ray', 'CloudWatch'] },
  { title: 'Tools',            tags: ['Git', 'Maven', 'Gradle', 'Postman', 'Swagger', 'Linux', 'Agile/Scrum'] },
];

export default function Skills() {
  return (
    <div className="section-alt" id="skills">
      <div className="section-alt-inner">
        <p className="section-label reveal">Skills</p>
        <h2 className="section-title reveal">Technical Skills</h2>
        <div className="section-divider reveal" />
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className={`skill-card reveal reveal-delay-${(i % 4) + 1}`} key={i}>
              <div className="skill-card-title">{s.title}</div>
              <div className="skill-tags">
                {s.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
