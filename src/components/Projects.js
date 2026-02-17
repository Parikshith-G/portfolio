import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "ResumeGPT – AI Resume Optimizer",
      tech: "React, Spring Boot, LLM API",
      type: "website",
      link: "https://resumegpt-frontend.onrender.com/",
      desc: "AI-powered resume optimization platform that analyzes resumes against job descriptions and provides ATS-friendly improvements with real-time feedback and validation.",
      category: "AI Application",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      title: "API Load Tester & Performance Analyzer",
      tech: "Go, React, REST APIs, Concurrency",
      type: "code",
      link: "https://github.com/Parikshith-G/PerfromanceAPI/tree/master",
      desc: "High-concurrency API load testing tool generating concurrent requests and visualizing accepted vs rejected requests.",
      category: "Backend Systems",
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "RBAC Authentication System",
      tech: "Java, Spring Boot, Angular, JWT",
      type: "code",
      link: "https://github.com/Parikshith-G/JwtAuth",
      desc: "Role-Based Access Control system with JWT authentication and secure authorization layers.",
      category: "Authentication",
      gradient: "from-yellow-500 to-orange-400",
    },
    {
      title: "CiniFlex – Theatre Booking Microservice",
      tech: "Java, Spring Boot, Angular, JWT, OTP",
      type: "code",
      link: "https://github.com/Parikshith-G/TheaterManagementSystem",
      desc: "Microservice-based theatre booking platform with JWT authentication and OTP verification.",
      category: "Microservices",
      gradient: "from-orange-400 to-red-400",
    },
    {
      title: "AI-Driven Flappy Bird",
      tech: "Python, NEAT",
      type: "code",
      link: "https://github.com/Parikshith-G/Flappy-bird-game-and-reinceforcement-learning",
      desc: "AI agent trained using NEAT to autonomously learn and play Flappy Bird.",
      category: "AI/ML",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Cryptography Web App",
      tech: "Django, Python",
      type: "code",
      link: "https://github.com/Parikshith-G/Encryption-and-decryption-website",
      desc: "Secure text and file encryption web app implementing symmetric and asymmetric encryption.",
      category: "Security",
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      title: "E-Commerce Platform",
      tech: "MERN Stack, JWT",
      type: "code",
      link: "https://github.com/Parikshith-G/ecommerce-application-main-project",
      desc: "Full-stack e-commerce platform with secure JWT authentication and REST APIs.",
      category: "Full-Stack",
      gradient: "from-orange-600 to-yellow-500",
    },
    {
      title: "Retro Pong",
      tech: "Python, Pygame",
      type: "code",
      link: "https://github.com/Parikshith-G/Pong_py",
      desc: "Classic Pong arcade game with smooth paddle physics and scoring mechanics.",
      category: "Game Development",
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "Arcade Snake (Pygame Edition)",
      tech: "Python, Pygame",
      type: "code",
      link: "https://github.com/Parikshith-G/Snake-Game_PY",
      desc: "Classic Snake arcade game featuring collision detection and increasing difficulty.",
      category: "Game Development",
      gradient: "from-red-400 to-orange-400",
    },
    {
      title: "Gesture-Controlled Volume Adjustment",
      tech: "Python, OpenCV, MediaPipe, PyCaw",
      type: "code",
      link: "https://github.com/Parikshith-G/Python-advanced",
      desc: "Computer vision system that controls system volume using real-time hand gesture recognition.",
      category: "Computer Vision",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      title: "Mapty – Workout Tracking App",
      tech: "HTML, CSS, JavaScript, Leaflet.js",
      type: "code",
      link: "https://github.com/Parikshith-G/Mapty-Js",
      desc: "Interactive workout tracking app visualizing exercise sessions using Leaflet.js.",
      category: "Web Development",
      gradient: "from-orange-600 to-yellow-500",
    },
    {
      title: "Forkify – Recipe Management",
      tech: "HTML, CSS, JavaScript",
      type: "code",
      link: "https://github.com/Parikshith-G/Forkify-JS",
      desc: "Modern JavaScript app for searching and bookmarking recipes using external APIs.",
      category: "Web Development",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-3d group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card
                className={`h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-2 backdrop-blur-sm transition-all duration-500 ${
                  hoveredProject === index
                    ? "border-orange-500/60 glow-orange scale-105"
                    : "border-orange-500/20"
                }`}
              >
                <CardHeader>
                  <Badge
                    className={`bg-gradient-to-r ${project.gradient}/20 text-white border border-orange-500/30`}
                  >
                    {project.category}
                  </Badge>

                  <CardTitle className="text-xl text-white mt-3">
                    {project.title}
                  </CardTitle>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech.split(", ").map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-gray-700/50 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow">
                  <p className="text-gray-300 text-sm mb-6 flex-grow">
                    {project.desc}
                  </p>

                  {/* Centered Button Based On Type */}
                  <div className="flex justify-center mt-auto">
                    <Button
                      size="sm"
                      className={`px-6 bg-gradient-to-r ${project.gradient} hover:scale-105 transition-all duration-300 text-white`}
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      {project.type === "code" ? (
                        <>
                          <Github size={16} className="mr-2" />
                          View Code
                        </>
                      ) : (
                        <>
                          <ExternalLink size={16} className="mr-2" />
                          Visit Website
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300"
            onClick={() =>
              window.open("https://github.com/Parikshith-G", "_blank")
            }
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
