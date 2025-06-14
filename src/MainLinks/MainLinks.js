import React from "react";
import LeetCodeSolvedCount from "../LeetcodeSolved/LeetCodeSolved";

const MainLinks = () => {
  return (
    <>
      <p className="lead mt-3">
        Software Developer | Golang, Scala, Java |{" "}
        <a href="https://leetcode.com/u/Worms_Sama/">
          {" "}
          {<LeetCodeSolvedCount />} Leetcode Problems
        </a>{" "}
        |{" "}
        <a href="https://www.youtube.com/@AlgorithmArena">
          YouTube: Algorithm Arena
        </a>
      </p>
      <div className="mt-4">
        <a
          href="https://github.com/Parikshith-G"
          className="btn btn-outline-primary me-2"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/parikshith-g/"
          className="btn btn-outline-primary me-2"
        >
          LinkedIn
        </a>
        <a
          href="mailto:parikshithkugve@gmail.com"
          className="btn btn-outline-primary"
        >
          Email
        </a>{" "}
        <a
          href={`${process.env.PUBLIC_URL}/Parikshith.G.pdf`}
          className="btn btn-outline-primary"
          download
        >
          Resume (Click will download resume)
        </a>
      </div>
    </>
  );
};

export default MainLinks;
