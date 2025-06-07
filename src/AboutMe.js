import React, { useState, useRef } from "react";
import TopVideos from "./Youtube";

// export default function AboutMe() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const linkRef = useRef(null);
//   return (
//     <section className="py-4">
//       <h2 className="h3 fw-semibold mb-3">About Me</h2>
//       <p className="fs-5">
//         Software Developer with 1.5+ years of hands-on experience building
//         scalable backend systems using Golang, Scala, Java, and hybrid cloud
//         architectures. Skilled in optimizing critical workflows, migrating
//         legacy services, and delivering production-ready microservices. Strong
//         foundation in data structures and algorithms, with 530+ problems solved
//         on LeetCode and 160+ algorithm tutorials published on my YouTube
//         channel,{" "}
//         <a href="https://www.youtube.com/@AlgorithmArena">Algorithm Arena</a>.
//         {isDropdownOpen && (
//           <div
//             style={{
//               position: "absolute",
//               top:
//                 linkRef.current?.getBoundingClientRect().bottom +
//                 window.scrollY +
//                 8,
//               left:
//                 linkRef.current?.getBoundingClientRect().left + window.scrollX,
//               zIndex: 1000,
//             }}
//             onMouseEnter={() => setIsDropdownOpen(true)} // keep open if hovered dropdown
//             onMouseLeave={() => setIsDropdownOpen(false)} // close on leave
//           >
//             <TopVideos isDropdownOpen={true} />
//           </div>
//         )}
//       </p>
//     </section>
//   );
// }

export default function AboutMe() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const linkRef = useRef(null);

  return (
    <section className="py-4" style={{ position: "relative" }}>
      <h2 className="h3 fw-semibold mb-3">About Me</h2>
      <p className="fs-5">
        Software Developer with 1.5+ years of hands-on experience building
        scalable backend systems using Golang, Scala, Java, and hybrid cloud
        architectures. Skilled in optimizing critical workflows, migrating
        legacy services, and delivering production-ready microservices. Strong
        foundation in data structures and algorithms, with 530+ problems solved
        on LeetCode and 160+ algorithm tutorials published on my YouTube
        channel,{" "}
        <a
          href="#!"
          ref={linkRef}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setIsDropdownOpen(false)}
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
          aria-describedby="topVideosTooltip"
        >
          Algorithm Arena (hover to see my top performing videos)
        </a>
        .
      </p>

      {isDropdownOpen && (
        <div
          style={{
            position: "absolute",
            top:
              linkRef.current?.getBoundingClientRect().bottom +
              window.scrollY +
              8,
            left:
              linkRef.current?.getBoundingClientRect().left + window.scrollX,
            zIndex: 1000,
          }}
          onMouseEnter={() => setIsDropdownOpen(true)} // keep open if hovered dropdown
          onMouseLeave={() => setIsDropdownOpen(false)} // close on leave
        >
          <TopVideos isDropdownOpen={true} />
        </div>
      )}
    </section>
  );
}
