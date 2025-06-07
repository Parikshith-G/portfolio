import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopVideos from "./Youtube";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import MainLinks from "./MainLinks";
import Certifications from "./Certifications"

export default function Portfolio() {
  return (
    <main className="bg-dark text-white p-4 min-vh-100">
      <section className="text-center py-5">
        <div className="mb-4">
          <img
            src="newpic.jpg" // ⬅️ Replace this with actual image path (can be local or a URL)
            alt="Parikshith G"
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          />
        </div>
        <h1 className="display-4 fw-bold">Parikshith G</h1>
        <MainLinks />
      </section>

      <AboutMe />
      <Experience />
   

      <Skills />
      <Certifications/>
      <Projects />

      <footer className="text-center py-4 small text-light">
        © 2025 Parikshith G | Algorithm Arena
      </footer>
    </main>
  );
}
