import React, { useEffect } from "react";

export default function RainbowTrail() {
  useEffect(() => {
    const colors = [
      "#ff0000",
      "#ff7f00",
      "#ffff00",
      "#00ff00",
      "#0000ff",
      "#4b0082",
      "#9400d3",
    ];

    const createTrailDot = (x, y, color) => {
      const dot = document.createElement("div");
      dot.style.position = "fixed";
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.borderRadius = "50%";
      dot.style.backgroundColor = color;
      dot.style.pointerEvents = "none";
      dot.style.zIndex = "9999";
      dot.style.transition = "opacity 0.8s ease-out";
      dot.style.opacity = "1";
      document.body.appendChild(dot);

      requestAnimationFrame(() => {
        dot.style.opacity = "0";
      });

      setTimeout(() => {
        dot.remove();
      }, 800);
    };

    let colorIndex = 0;
    const handleMouseMove = (e) => {
      createTrailDot(e.clientX, e.clientY, colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
