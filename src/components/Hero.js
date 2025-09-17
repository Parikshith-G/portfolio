import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Youtube, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import LeetCodeSolvedCount from './LeetCodeSolved';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      heroRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      hero.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      <div 
        ref={heroRef}
        className="relative z-10 text-center max-w-4xl mx-auto px-4 transition-transform duration-300 ease-out"
      >
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
            <span className="block text-white">Parikshith</span>
            <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent">
              G
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-2">
            Software Developer
          </div>
          
          <div className="text-lg text-orange-400 mb-8 font-medium">
            Golang • Python • Spark • Java
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building scalable backend systems with 1.5+ years of experience. 
            Passionate about algorithms with <span className="text-orange-400 font-semibold"><LeetCodeSolvedCount username={'worms_Sama'}/></span> LeetCode problems solved 
            and <span className="text-orange-400 font-semibold">160+</span> algorithm tutorials on YouTube.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 glow-orange"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          {[
            { icon: Github, href: "https://github.com/Parikshith-G", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/parikshith-g", label: "LinkedIn" },
            { icon: Youtube, href: "https://youtube.com/@AlgorithmArena", label: "YouTube" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-orange-400" />
      </div>
    </section>
  );
};

export default Hero;