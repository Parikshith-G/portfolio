import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Capgemini",
      position: "Software Developer",
      period: "Apr 2024 – Present",
      location: "India",
      achievements: [
        "Reduced runtimes of critical backend jobs by ~60%, enhancing system performance and reducing operational costs",
        "Migrated backend workflows from Golang to Scala, significantly improving modularity and long-term maintainability",
        "Built a hybrid Java-Scala application to enable seamless integration between legacy systems and new pipelines",
        "Owned the end-to-end lifecycle of multiple Golang-based jobs — from development and testing to deployment and monitoring",
        "Deployed services across AWS EC2 and EMR clusters; integrated workflow monitoring using Apache Airflow",
        "Delivered high-impact POCs for real-time data processing, directly accelerating project delivery timelines",
        "Collaborated with directors and cross-functional leads to resolve live production issues with rapid turnaround"
      ],
      technologies: ["Golang", "Scala", "Java", "AWS", "Apache Airflow", "EMR", "EC2"]
    },
    {
      company: "Grant Thornton LLP",
      position: "Intern",
      period: "Feb 2023 – May 2023",
      location: "India",
      achievements: [
        "Collaborated with cross-functional finance-tech teams",
        "Learned agile development and teamwork",
        "Gained exposure to enterprise-level financial technology solutions"
      ],
      technologies: ["Agile", "Teamwork", "Financial Technology"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="card-3d"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-orange-500/30 backdrop-blur-sm glow-orange">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-white mb-2 flex items-center gap-3">
                        <Building className="text-orange-400" size={28} />
                        {exp.company}
                      </CardTitle>
                      <p className="text-xl text-orange-400 font-semibold">{exp.position}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 leading-relaxed flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge 
                          key={i}
                          className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-300 border-orange-500/30 hover:from-orange-500/30 hover:to-yellow-500/30 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;