import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Cryptography Web App",
    tech: "Django, Python",
    link: "https://github.com/Parikshith-G/Encryption-and-decryption-website",
    desc: "Secure text file encryption using custom-made symmetric & asymmetric algorithms.",
  },
  {
    title: "E-Commerce Platform",
    tech: "MERN Stack",
    link: "https://github.com/Parikshith-G/ecommerce-application-main-project",
    desc: "Responsive app with JWT auth and REST APIs.",
  },
  {
    title: "AI-Driven Flappy Bird",
    tech: "Python, NEAT",
    link: "https://github.com/Parikshith-G/Flappy-bird-game-and-reinceforcement-learning",
    desc: "AI agent plays Flappy Bird using NEAT neural nets.",
  },
  {
    title: "RBAC(Role Based Authentication)",
    tech: "Java, Spring Boot, Angular",
    link: "https://github.com/Parikshith-G/JwtAuth",
    desc: "A template for RBAC in Springboot and Angular.",
  },
  {
    title: "CiniFlex",
    tech: "Java, Spring Boot, Angular",
    link: "https://github.com/Parikshith-G/TheaterManagementSystem",
    desc: "Theatre booking microservice with JWT and OTP auth.",
  },
  {
    title: "Gesture-Controlled Volume Adjustment using Hand Tracking",
    tech: "Python, OpenCV, MediaPipe, Hand Tracking, Gesture Recognition, PyCaw",
    link: "https://github.com/Parikshith-G/Python-advanced",
    desc: "Controlling some functionality of system using hand gestures.",
  },
  {
    title: "Chess Game Development using Pygame",
    tech: "Python, Pygame",
    link: "https://github.com/Parikshith-G/Chess",
    desc: "Developing Chess in Python and Pygame.",
  },
  {
    title: "Mapty: Workout Tracking and Mapping Application",
    tech: "HTML, CSS, JavaScript, Leaflet.js",
    link: "https://github.com/Parikshith-G/Mapty-Js",
    desc: "A full on exercise mapping application.",
  },
  {
    title: "Forkify: Recipe Management Application",
    tech: "HTML, CSS, JavaScript",
    link: "https://github.com/Parikshith-G/Forkify-JS",
    desc: "A recipe management application.",
  },
  {
    title: "Snake Game in Pygame",
    tech: " Python, Pygame",
    link: "https://github.com/Parikshith-G/Snake-Game_PY/tree/master",
    desc: "Snake Game in Python.",
  },
];

const Projects = () => {
  const [rotation, setRotation] = useState(0);
  const anglePerCard = 360 / projects.length;
  const autoRotateInterval = useRef(null); // Use useRef to hold the interval ID
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Function to start auto-rotation
  const startAutoRotate = () => {
    if (autoRotateInterval.current) {
      clearInterval(autoRotateInterval.current); // Clear any existing interval
    }
    autoRotateInterval.current = setInterval(() => {
      setRotation((prev) => prev + anglePerCard); // Rotate one step
    }, 2300); // Rotate every 3 seconds (adjust as needed)
    setIsAutoRotating(true);
  };

  // Function to stop auto-rotation
  const stopAutoRotate = () => {
    if (autoRotateInterval.current) {
      clearInterval(autoRotateInterval.current);
      autoRotateInterval.current = null; // Clear the ref
    }
    setIsAutoRotating(false);
  };

  // Effect to start auto-rotation when the component mounts
  // And clean up when it unmounts
  useEffect(() => {
    startAutoRotate();

    return () => {
      stopAutoRotate(); // Clean up the interval when the component unmounts
    };
  }, []); // Empty dependency array means this runs once on mount and once on unmount

  const rotate = (dir) => {
    stopAutoRotate(); // Stop auto-rotation when a button is clicked
    setRotation((prev) => prev + dir * anglePerCard);
    // You could optionally restart auto-rotation after a short delay here
    setTimeout(startAutoRotate, 5000);
  };

  return (
    <section className="py-5 text-white bg-dark text-center">
      <h2 className="h3 fw-semibold mb-5">Projects</h2>
      <div className="carousel-3d-container">
        <div
          className="carousel-3d"
          style={{ transform: `rotateY(${-rotation}deg)` }}
        >
          {projects.map((p, i) => {
            const angle = i * anglePerCard;
            return (
              <div
                className="carousel-face"
                key={i}
                style={{ transform: `rotateY(${-angle}deg) translateZ(450px)` }}
              >
                <div className="card bg-secondary text-white">
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <h6 className="card-subtitle mb-2 text-light">{p.tech}</h6>
                    <p className="card-text">{p.desc}</p>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-info"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="btn-3d left" onClick={() => rotate(-1)}>
          ◀
        </button>
        <button className="btn-3d right" onClick={() => rotate(1)}>
          ▶
        </button>
      </div>
    </section>
  );
};

export default Projects;
