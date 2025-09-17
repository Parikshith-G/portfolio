import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Youtube, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "parikshith.g.kugve@gmail.com",
      href: "mailto:parikshith.g.kugve@gmail.com",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Parikshith-G",
      href: "https://github.com/Parikshith-G",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/parikshith-g",
      href: "https://linkedin.com/in/parikshith-g",
      gradient: "from-orange-400 to-yellow-400",
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "Algorithm Arena",
      href: "https://youtube.com/@AlgorithmArena",
      gradient: "from-yellow-400 to-orange-400",
    },
  ];

  const handleDownloadResume = () => {
    // This would typically link to your actual resume file
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Let's connect and discuss opportunities in software development,
            backend systems, or algorithm education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-3d">
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-orange-500/30 backdrop-blur-sm glow-orange">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <MapPin className="text-orange-400" size={28} />
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 card-3d"
                      >
                        <div
                          className={`p-3 rounded-full bg-gradient-to-r ${contact.gradient} text-white`}
                        >
                          <contact.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-400 text-sm">
                            {contact.label}
                          </div>
                          <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-medium hover:text-orange-400 transition-colors duration-300"
                          >
                            {contact.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="card-3d">
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-yellow-500/30 backdrop-blur-sm glow-gold">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Current Status
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 mb-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">
                      Available for Opportunities
                    </span>
                  </div>
                  <p className="text-gray-300">
                    Open to discussing full-time positions, consulting projects,
                    and collaboration opportunities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <div className="card-3d">
              <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-2 border-orange-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Let's Build Something Amazing
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Backend Development & Microservices</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Cloud Architecture & DevOps</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Algorithm Education & Content Creation</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Performance Optimization & System Design</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 glow-orange"
                      onClick={() =>
                        window.open(
                          "mailto:parikshith.g.kugve@gmail.com",
                          "_blank"
                        )
                      }
                    >
                      <Mail size={20} className="mr-2" />
                      Send Email
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <a
                        href={`${process.env.PUBLIC_URL}/Parikshith.G.pdf`}
                        className="btn btn-outline-primary"
                        download
                      >
                        Download Resume
                      </a>{" "}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="card-3d">
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-orange-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    Follow My Journey
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      className="bg-gray-800/50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 text-white transform hover:scale-105 transition-all duration-300 h-16"
                      onClick={() =>
                        window.open("https://github.com/Parikshith-G", "_blank")
                      }
                    >
                      <div className="flex flex-col items-center gap-1">
                        <Github size={20} />
                        <span className="text-xs">GitHub</span>
                      </div>
                    </Button>

                    <Button
                      className="bg-gray-800/50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 text-white transform hover:scale-105 transition-all duration-300 h-16"
                      onClick={() =>
                        window.open(
                          "https://linkedin.com/in/parikshith-g",
                          "_blank"
                        )
                      }
                    >
                      <div className="flex flex-col items-center gap-1">
                        <Linkedin size={20} />
                        <span className="text-xs">LinkedIn</span>
                      </div>
                    </Button>

                    <Button
                      className="bg-gray-800/50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 text-white transform hover:scale-105 transition-all duration-300 h-16 col-span-2"
                      onClick={() =>
                        window.open(
                          "https://youtube.com/@AlgorithmArena",
                          "_blank"
                        )
                      }
                    >
                      <div className="flex items-center gap-2">
                        <Youtube size={20} />
                        <span>Algorithm Arena Channel</span>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500">
            © 2025 Parikshith G |{" "}
            <span className="text-yellow-400 font-semibold">
              <a href="https://youtube.com/@AlgorithmArena">Algorithm Arena</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
