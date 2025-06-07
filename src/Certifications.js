import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";

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
  },
  {
    title: "Udemy",
    providers: [
      {
        name: "Udemy",
        link: "https://github.com/Parikshith-G/Certificates-Udemy-/tree/main",
      },
    ],
  },
  {
    title: "LinkedIn Learning",
    providers: [
      { name: "LinkedIn", link: "https://online.fliphtml5.com/vuohl/yjpx/#p%3D1" },
    ],
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
  },
  {
    title: "Spring Boot",
    providers: [
      {
        name: "Springboot Dependency Injection",
        link: "https://github.com/Parikshith-G/Coursera-/blob/main/Coursera%20W3WXTCVAXE2H.pdf",
      },
    ],
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
  },
  {
    title: "Agile",
    providers: [
      {
        name: "Agile Software Development",
        link: "https://github.com/Parikshith-G/Coursera-/blob/main/Coursera%209MG96U24SDJ3.pdf",
      },
    ],
  },
  {
    title: "AWS",
    providers: [
      {
        name: "AWS Cloud Practitioner",
        link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/aa6ce89195d147b8a91649a776b7a3a8",
      },
    ],
  },
];

export default function Certifications() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const hoverTimeout = useRef(null);
  const popupRef = useRef(null);

  const handleMouseEnter = (cert) => {
    clearTimeout(hoverTimeout.current);
    setHoveredCard(cert);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredCard(null);
    }, 300); // prevent flicker
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setHoveredCard(null);
      }
    };

    if (hoveredCard) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hoveredCard]);

  return (
    <section className="pt-3 pb-5 bg-dark text-light position-relative">
      <div className="container">
        <h2 className="text-start mb-4 text-warning display-6 fw-bold">
          Certifications
        </h2>
        <div className="row gy-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ backgroundColor: "#2c2c2c", cursor: "pointer" }}
                onMouseEnter={() => handleMouseEnter(cert)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="card-body">
                  <h5 className="card-title text-warning">{cert.title}</h5>
                  <p className="card-text text-light">
                    {cert.providers.map((p, i) => (
                      <span key={i}>
                        {p.name}
                        {i < cert.providers.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {hoveredCard &&
        ReactDOM.createPortal(
          <>
            <div className="cert-overlay" />

            <div
              className="cert-popup"
              onMouseEnter={() => clearTimeout(hoverTimeout.current)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={popupRef}
                className="card bg-dark text-light border-warning shadow-lg"
                style={{
                  width: "35vw",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem",
                  borderRadius: "12px",
                  borderWidth: "2px",
                  textAlign: "center",
                  boxShadow: "0 0 20px rgba(255, 193, 7, 0.3)",
                }}
              >
                <h3
                  className="text-warning mb-3"
                  style={{ fontSize: "1.75rem" }}
                >
                  {hoveredCard.title}
                </h3>
                {hoveredCard.providers.map((p, i) => (
                  <p
                    key={i}
                    className="text-light"
                    style={{
                      fontSize: "1rem",
                      maxWidth: "90%",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warning text-decoration-none"
                    >
                      {p.name}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <style>
              {`
                .cert-overlay {
                  position: fixed;
                  top: 0;
                  left: 0;
                  height: 100vh;
                  width: 100vw;
                  background: rgba(0, 0, 0, 0.4);
                  z-index: 9990;
                }

                .cert-popup {
                  position: fixed;
                  top: 0;
                  left: 0;
                  height: 100vh;
                  width: 100vw;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  z-index: 9999;
                  transition: all 0.4s ease;
                  padding: 1rem;
                }
              `}
            </style>
          </>,
          document.body
        )}
    </section>
  );
}
