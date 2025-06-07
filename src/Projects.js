import React from "react";

const Projects = () => {
  return (
    <section className="py-5 text-center">
      <h2 className="h3 fw-semibold mb-4">Projects</h2>
      <div className="cylinder-wrapper">
        <div className="cylinder" id="cylinder">
          {[
            {
              title: "Cryptography Web App",
              tech: "Django, Python",
              link: "https://github.com",
              desc: "Secure text file encryption using symmetric & asymmetric algorithms.",
            },
            {
              title: "E-Commerce Platform",
              tech: "MERN Stack",
              link: "https://github.com",
              desc: "Responsive app with JWT auth and REST APIs.",
            },
            {
              title: "AI-Driven Flappy Bird",
              tech: "Python, NEAT",
              link: "https://github.com",
              desc: "AI agent plays Flappy Bird using NEAT neural nets.",
            },
            {
              title: "CiniFlex",
              tech: "Java, Spring Boot, Angular",
              link: "https://github.com",
              desc: "Theatre booking microservice with JWT and OTP auth.",
            },
          ].map((p, i) => (
            <div key={i} className="cylinder-face">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <h6 className="card-subtitle mb-2 text-white">{p.tech}</h6>
                  <p className="card-text">{p.desc}</p>
                  <a href={p.link} className="text-info">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
