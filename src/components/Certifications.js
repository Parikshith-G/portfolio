import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certifications = [
    {
      title: "AlgoExpert",
      providers: [
        {
          name: "AlgoExpert",
          link: "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-801e03a197",
        },
        {
          name: "SystemsExpert",
          link: "https://certificate.algoexpert.io/SystemsExpert%20Certificate%20SE-6e76a31384",
        },
      ],
      category: "Algorithms & Systems",
      gradient: "from-orange-500 to-red-500",
      icon: "🧠"
    },
    {
      title: "Machine Learning",
      providers: [
        {
          name: "Machine Learning by Andrew NG",
          link: "https://github.com/Parikshith-G/Coursera-/blob/main/Coursera%20WS3SNTDMO86D.pdf",
        },
        {
          name: "Supervised Machine Learning by Andrew NG",
          link: "https://github.com/Parikshith-G/Coursera-/blob/main/Coursera%20YLZBFXY7B7XE.pdf",
        },
        {
          name: "Advanced Learning by Andrew NG",
          link: "https://github.com/Parikshith-G/Coursera-/blob/main/Coursera%20FIN1CQGP8J57.pdf",
        },
        {
          name: "Introduction to Data Analytics by META",
          link: "https://www.coursera.org/account/accomplishments/verify/0S26BBLRK36N",
        },
      ],
      category: "AI/ML",
      gradient: "from-yellow-500 to-orange-500",
      icon: "🤖"
    },
    {
      title: "Golang",
      providers: [
        {
          name: "Getting Started with GO",
          link: "https://coursera.org/verify/DZ6ZA4HHLOE3",
        },
        {
          name: "Functions, Interfaces and Methods in GO",
          link: "https://coursera.org/verify/21SAP8OO98JY",
        },
        {
          name: "Concurrency in GO",
          link: "https://coursera.org/verify/LJXS8AOPOC5Y",
        },
        {
          name: "Microservices in GO",
          link: "https://coursera.org/verify/IKRU3KJTMS3A",
        },
      ],
      category: "Programming",
      gradient: "from-orange-400 to-yellow-400",
      icon: "⚡"
    },
    {
      title: "Cloud Platforms",
      providers: [
        {
          name: "AWS Cloud Practitioner",
          link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/aa6ce89195d147b8a91649a776b7a3a8",
        },
        {
          name: "Microsoft Azure AZ 900",
          link: "https://learn.microsoft.com/api/credentials/share/en-us/GParikshith-1306/455345456C59CEDB?sharingId=EA391A80288803F4",
        },
      ],
      category: "Cloud",
      gradient: "from-yellow-400 to-orange-400",
      icon: "☁️"
    },
    {
      title: "Spring Boot",
      providers: [
        {
          name: "Springboot Dependency Injection",
          link: "https://github.com/Parikshith-G/Coursera-/blob/main/Coursera%20W3WXTCVAXE2H.pdf",
        },
      ],
      category: "Framework",
      gradient: "from-orange-500 to-yellow-500",
      icon: "🍃"
    },
    {
      title: "Professional Development",
      providers: [
        {
          name: "Agile Software Development",
          link: "https://github.com/Parikshith-G/Coursera-/blob/main/Coursera%209MG96U24SDJ3.pdf",
        },
        {
          name: "LinkedIn Learning Portfolio",
          link: "https://online.fliphtml5.com/vuohl/yjpx/#p%3D1",
        },
        {
          name: "Udemy Certificates",
          link: "https://github.com/Parikshith-G/Certificates-Udemy-/tree/main",
        },
      ],
      category: "Soft Skills",
      gradient: "from-orange-600 to-yellow-500",
      icon: "📚"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-3d group"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className={`h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-2 backdrop-blur-sm transition-all duration-500 ${
                hoveredCert === index 
                  ? 'border-orange-500/60 glow-orange scale-105' 
                  : 'border-orange-500/20'
              }`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${cert.gradient} text-white text-3xl`}>
                      {cert.icon}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-white mb-2">
                    {cert.title}
                  </CardTitle>
                  
                  <Badge className={`bg-gradient-to-r ${cert.gradient}/20 text-orange-300 border border-orange-500/30`}>
                    {cert.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {cert.providers.map((provider, providerIndex) => (
                    <div 
                      key={providerIndex}
                      className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <Award size={16} className="text-orange-400" />
                        <span className="text-sm text-gray-300 font-medium">
                          {provider.name}
                        </span>
                      </div>
                      <Button 
                        size="sm"
                        variant="ghost"
                        className="p-2 text-orange-400 hover:text-white hover:bg-orange-500/20"
                        onClick={() => window.open(provider.link, '_blank')}
                      >
                        <ExternalLink size={14} />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block card-3d">
            <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-2 border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Award size={32} className="text-orange-400" />
                  <h3 className="text-2xl font-bold text-orange-400">Certified Professional</h3>
                </div>
                <p className="text-gray-300 text-lg">
                  Committed to continuous learning and staying updated with the latest technologies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;