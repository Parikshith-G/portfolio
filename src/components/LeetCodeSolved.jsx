import React, { useEffect, useState } from 'react';

export default function LeetCodeSolved({ username }) {
  const [solved, setSolved] = useState(null);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then(r => r.json())
      .then(d => setSolved(d.totalSolved))
      .catch(() => setSolved('500+'));
  }, [username]);

  return <>{solved ?? '...'}</>;
}
