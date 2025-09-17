import React,{useState,useEffect} from 'react';
import { Card, CardContent } from './ui/card';
import { Code, Database, Cloud, Cpu } from 'lucide-react';
import LeetCodeSolvedCount from './LeetCodeSolved';

const About = () => {
  const [solved, setSolved] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const solvedCount = async () => {
      try {
        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/worms_Sama`
        );
        const data = await response.json();
        setSolved(data.totalSolved);
      } catch (err) {
        setError(true);
      }
    };

    solvedCount();
  }, []);
  const highlights = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Expert in Golang, Scala, Java with microservices architecture"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Experience with Apache Hive, Iceberg, Trino for big data processing"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS EC2, EMR, EKS deployment with Docker and Kubernetes"
    },
    {
    icon: Cpu,
    title: "Algorithm Expert",
    description: error ? (
      "Error loading LeetCode stats"
    ) : solved === null ? (
      "Loading LeetCode stats..."
    ) : (
      <>
        {solved} LeetCode problems solved,{" "}
        <a
          href="https://www.youtube.com/@AlgorithmArena"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          <span className="text-yellow-400 font-semibold">YouTube educator</span>
        </a>
      </>
    ),
  },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="card-3d">
              <Card className="bg-gray-900/50 border-orange-500/20 backdrop-blur-sm glow-orange">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Software Developer with <span className="text-orange-400 font-semibold">1.5+ years</span> of hands-on experience 
                    building scalable backend systems using modern technologies and cloud architectures.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="card-3d">
              <Card className="bg-gray-900/50 border-yellow-500/20 backdrop-blur-sm glow-gold">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Specialized in optimizing critical workflows, migrating legacy services, and delivering 
                    production-ready microservices. Strong foundation in data structures and algorithms.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="card-3d">
              <Card className="bg-gray-900/50 border-orange-500/20 backdrop-blur-sm glow-orange">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    YouTube educator with <span className="text-orange-400 font-semibold">160+</span> algorithm tutorials 
                    published on <span className="text-yellow-400 font-semibold"><a href='https://www.youtube.com/@AlgorithmArena'>Algorithm Arena</a></span> channel, 
                    helping others to learn DSA.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="card-3d group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-orange-500/30 backdrop-blur-sm h-full transform group-hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                        <item.icon size={28} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;