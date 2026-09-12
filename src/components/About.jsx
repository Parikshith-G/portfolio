import React, { useEffect, useRef, useState } from 'react';
import LeetCodeSolved from './LeetCodeSolved.jsx';

function CountUp({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  return (
    <div className="section-alt" id="about">
      <div className="section-alt-inner">
        <p className="section-label reveal">About</p>
        <h2 className="section-title reveal">Who I Am</h2>
        <div className="section-divider reveal" />

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Software Engineer with <strong>2+ years</strong> building production-grade Java
              microservices, AI-powered tools, and full-stack platforms at{' '}
              <strong>Capgemini</strong>. I work across the full lifecycle — design, build,
              instrument, and ship.
            </p>
            <p>
              My work spans building AI agents for legacy code migration, designing microservices
              handling <strong>10K+ req/min</strong>, instrumenting distributed systems with{' '}
              <strong>AWS ADOT</strong>, and shipping Kafka pipelines with sub-0.01% failure rates.
            </p>
            <p>
              Outside work I run{' '}
              <a href="https://www.youtube.com/@AlgorithmArena" target="_blank" rel="noreferrer">
                Algorithm Arena
              </a>{' '}
              on YouTube — 150+ DSA tutorials — and grind LeetCode to keep problem-solving sharp.
            </p>
            <p>
              AWS Certified Cloud Practitioner &middot; Azure AZ-900 &middot; MCA from Jain
              University (CGPA 8.0).
            </p>
          </div>

          <div className="about-stats">
            <div className="about-stat reveal reveal-delay-1">
              <div className="about-stat-value"><CountUp target={2} />+</div>
              <div className="about-stat-label">Years professional experience</div>
            </div>
            <div className="about-stat reveal reveal-delay-2">
              <div className="about-stat-value">10K+</div>
              <div className="about-stat-label">Requests / min in production</div>
            </div>
            <div className="about-stat reveal reveal-delay-3">
              <div className="about-stat-value"><LeetCodeSolved username="worms_sama" /></div>
              <div className="about-stat-label">LeetCode problems solved</div>
            </div>
            <div className="about-stat reveal reveal-delay-4">
              <div className="about-stat-value"><CountUp target={150} />+</div>
              <div className="about-stat-label">YouTube DSA tutorials</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
