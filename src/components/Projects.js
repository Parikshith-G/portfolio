import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Cryptography Web App",
      tech: "Django, Python",
      link: "https://github.com/Parikshith-G/Encryption-and-decryption-website",
      desc: "Secure text file encryption using custom-made symmetric & asymmetric algorithms.",
      category: "Security",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "E-Commerce Platform",
      tech: "MERN Stack",
      link: "https://github.com/Parikshith-G/ecommerce-application-main-project",
      desc: "Responsive app with JWT auth and REST APIs.",
      category: "Full-Stack",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "AI-Driven Flappy Bird",
      tech: "Python, NEAT",
      link: "https://github.com/Parikshith-G/Flappy-bird-game-and-reinceforcement-learning",
      desc: "AI agent plays Flappy Bird using NEAT neural nets.",
      category: "AI/ML",
      gradient: "from-yellow-500 to-orange-400"
    },
    {
      title: "RBAC (Role Based Authentication)",
      tech: "Java, Spring Boot, Angular",
      link: "https://github.com/Parikshith-G/JwtAuth",
      desc: "A template for RBAC in Springboot and Angular.",
      category: "Authentication",
      gradient: "from-orange-400 to-red-400"
    },
    {
      title: "CiniFlex",
      tech: "Java, Spring Boot, Angular",
      link: "https://github.com/Parikshith-G/TheaterManagementSystem",
      desc: "Theatre booking microservice with JWT and OTP auth.",
      category: "Microservices",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Gesture-Controlled Volume Adjustment",
      tech: "Python, OpenCV, MediaPipe, PyCaw",
      link: "https://github.com/Parikshith-G/Python-advanced",
      desc: "Controlling system functionality using hand gestures.",
      category: "Computer Vision",
      gradient: "from-orange-500 to-yellow-400"
    },
    {
      title: "Chess Game Development",
      tech: "Python, Pygame",
      link: "https://github.com/Parikshith-G/Chess",
      desc: "Developing Chess in Python and Pygame.",
      category: "Game Development",
      gradient: "from-red-400 to-orange-400"
    },
    {
      title: "Mapty: Workout Tracking",
      tech: "HTML, CSS, JavaScript, Leaflet.js",
      link: "https://github.com/Parikshith-G/Mapty-Js",
      desc: "A full exercise mapping application.",
      category: "Web Development",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Forkify: Recipe Management",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/Parikshith-G/Forkify-JS",
      desc: "A recipe management application.",
      category: "Web Development",
      gradient: "from-orange-600 to-yellow-500"
    },
    {
      title: "Snake Game",
      tech: "Python, Pygame",
      link: "https://github.com/Parikshith-G/Snake-Game_PY/tree/master",
      desc: "Snake Game in Python.",
      category: "Game Development",
      gradient: "from-orange-400 to-red-500"
    }
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
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            A collection of projects showcasing expertise in various technologies and domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-3d group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className={`h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-2 backdrop-blur-sm transition-all duration-500 ${
                hoveredProject === index 
                  ? 'border-orange-500/60 glow-orange scale-105' 
                  : 'border-orange-500/20'
              }`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <Badge className={`bg-gradient-to-r ${project.gradient}/20 text-white border border-orange-500/30`}>
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl text-white leading-tight">
                    {project.title}
                  </CardTitle>
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech.split(', ').map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-gray-700/50 text-gray-300 border-gray-600/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>
                  
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      size="sm"
                      className={`flex-1 bg-gradient-to-r ${project.gradient} hover:scale-105 transition-all duration-300 text-white`}
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink size={16} />
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
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 glow-orange"
            onClick={() => window.open('https://github.com/Parikshith-G', '_blank')}
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