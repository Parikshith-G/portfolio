import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import LeetCodeSolvedCount from './LeetCodeSolved';
import { Link } from 'react-router-dom';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["Golang", "Scala", "Java", "Python", "JavaScript", "TypeScript"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Spring Boot", "Django", "REST APIs", "Microservices"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Angular", "HTML5", "CSS3"],
      color: "from-orange-400 to-yellow-400"
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS (EC2, EMR, EKS)", "Azure", "Docker", "Kubernetes", "CI/CD", "Apache Airflow", "Apache Flink"],
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "Databases & Storage",
      icon: "🗄️",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Apache Hive", "Apache Iceberg", "Apache Trino"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Tools & Practices",
      icon: "🛠️",
      skills: ["Git", "Agile/Scrum", "VS Code", "IntelliJ", "JIRA", "Postman"],
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-3d group"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className={`h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-orange-500/30 backdrop-blur-sm transition-all duration-500 ${
                hoveredCategory === index ? 'glow-orange scale-105' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto mt-2 rounded`}></div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="transform transition-all duration-300 hover:scale-105"
                        style={{ 
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`,
                          opacity: hoveredCategory === index || hoveredCategory === null ? 1 : 0.7
                        }}
                      >
                        <Badge 
                          className={`w-full justify-center py-2 text-sm bg-gradient-to-r ${category.color}/20 text-white border-2 border-transparent hover:border-orange-400/50 transition-all duration-300`}
                        >
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Interactive 3D Skills Showcase */}
        <div className="mt-16 text-center">
          <div className="inline-block card-3d">
            <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-2 border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Algorithm Expertise</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-yellow-400 mb-2"><LeetCodeSolvedCount username={'worms_Sama'}/></div>
                    <div className="text-gray-300">LeetCode Problems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-orange-400 mb-2">160+</div>
                    <div className="text-gray-300">YouTube Tutorials</div>
                  </div>
                </div>
                <p className="text-gray-400 mt-4">
                  Published on <span className="text-yellow-400 font-semibold"><a href='https://www.youtube.com/@AlgorithmArena'>Algorithm Arena</a></span> channel
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;