import React, { useEffect, useRef, useState } from "react";

export default function DragonTrailOne() {
  const trailRef = useRef([]);
  const headRef = useRef(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get head position
      const head = headRef.current;
      if (!head) return;

      const rect = head.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const rad = Math.atan2(dy, dx);
      const deg = rad * (180 / Math.PI);
      setAngle(deg);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 100,
        left: 100,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <img
        ref={headRef}
        src="head.png"
        alt="Dragon Head"
        style={{
          width: 60,
          height: 60,
          transform: `rotate(${angle}deg)`,
          transformOrigin: "center center",
          transition: "transform 0.1s linear",
          position: "absolute",
        }}
      />
      <img
        src="/dragon/body.png"
        alt="Dragon Body"
        style={{ width: 50, height: 50, position: "absolute", left: 50 }}
      />
      <img
        src="/dragon/tail.png"
        alt="Dragon Tail"
        style={{ width: 40, height: 40, position: "absolute", left: 100 }}
      />
    </div>
  );
}
