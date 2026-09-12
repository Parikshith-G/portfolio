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
        <h2 className="section-title reveal">Java systems that survive production</h2>
        <p className="section-kicker reveal">
          Production Java, observability, and AI tooling on a real telecom client — not a tutorial stack.
        </p>
        <div className="section-divider reveal" />

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I build backend systems that other teams can trust. At <strong>Capgemini</strong> I own
              the path from design to production: Java microservices, event pipelines, tracing, and
              the AI agents that make messy upgrades cheaper.
            </p>
            <p>
              Recent work includes agents that refactor legacy code to <strong>Java 21/25</strong>,
              onboarding tooling that cuts ramp-up by <strong>45%</strong>, GraphQL over REST to drop
              round-trips by <strong>35%</strong>, and Kafka with retries + DLQs at{' '}
              <strong>&lt;0.01%</strong> failure.
            </p>
            <p>
              Off hours I teach DSA on{' '}
              <a href="https://www.youtube.com/@AlgorithmArena" target="_blank" rel="noreferrer">
                Algorithm Arena
              </a>{' '}
              (150+ videos) and keep a serious LeetCode streak — I like problems that have a clean
              answer and systems that do not.
            </p>
            <p>
              AWS Cloud Practitioner · Azure AZ-900 · MCA, Jain University (CGPA 8.0).
            </p>
          </div>

          <div className="about-stats">
            <div className="about-stat reveal reveal-delay-1">
              <div className="about-stat-value"><CountUp target={2} />+</div>
              <div className="about-stat-label">Years shipping in enterprise</div>
            </div>
            <div className="about-stat reveal reveal-delay-2">
              <div className="about-stat-value">10K+</div>
              <div className="about-stat-label">Req/min on live services</div>
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
