import React, { useEffect, useState } from "react";

const LeetCodeSolvedCount = ({ username }) => {
  const [solved, setSolved] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLeetcodeSolvedCount = async () => {
      try {
        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${username}`
        );
        const data = await response.json();
        setSolved(data.totalSolved);
      } catch (err) {
        setError(true);
      }
    };

    fetchLeetcodeSolvedCount();
  }, [username]);

  if (error) return <>Error loading</>;
  if (solved === null) return <>Loading...</>;

  return <>{solved}</>;
};

export default LeetCodeSolvedCount;
