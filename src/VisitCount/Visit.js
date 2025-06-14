import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.countapi.xyz/update/parikshith-g/portfolio/?amount=1")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => setCount("Error"));
  }, []);

  return (
    <div style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
      👁️ Visitors: <strong>{count}</strong>
    </div>
  );
};

export default VisitorCounter;
