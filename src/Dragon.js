import React, { useEffect, useRef } from "react";

export default function DragonTrail() {
  const trailRef = useRef([]);
  const positions = useRef([]); // to store mouse positions history

  useEffect(() => {
    const trailContainer = document.createElement("div");
    trailContainer.style.position = "fixed";
    trailContainer.style.top = 0;
    trailContainer.style.left = 0;
    trailContainer.style.width = "100%";
    trailContainer.style.height = "100%";
    trailContainer.style.pointerEvents = "none";
    trailContainer.style.zIndex = 9999;
    document.body.appendChild(trailContainer);

    const headUrl = "https://example.com/dragon-head.png";
    const bodyUrl = "https://example.com/dragon-body.png";
    const tailUrl = "https://example.com/dragon-tail.png";

    const length = 10; // length of the dragon trail

    for (let i = 0; i < length; i++) {
      const img = document.createElement("img");
      if (i === 0) img.src = headUrl;
      else if (i === length - 1) img.src = tailUrl;
      else img.src = bodyUrl;

      img.style.width = "40px";
      img.style.height = "40px";
      img.style.position = "absolute";
      img.style.transition = "transform 0.1s ease";
      img.style.pointerEvents = "none";
      trailContainer.appendChild(img);
      trailRef.current.push(img);
    }

    // Initialize positions array with current mouse position
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;

    for (let i = 0; i < length * 5; i++) {
      // more history than trail length for smoothness
      positions.current.push({ x: lastX, y: lastY });
    }

    const handleMouseMove = (e) => {
      positions.current.push({ x: e.clientX, y: e.clientY });
      if (positions.current.length > length * 5) {
        positions.current.shift(); // keep positions array size manageable
      }
    };

    const animate = () => {
      // For each dragon part, position it on an earlier recorded mouse position
      trailRef.current.forEach((img, index) => {
        // The factor controls how much delay between parts
        const posIndex = positions.current.length - 1 - index * 5;
        if (posIndex >= 0) {
          const pos = positions.current[posIndex];
          img.style.transform = `translate(${pos.x - 20}px, ${pos.y - 20}px)`; // -20 to center image on cursor
        }
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      trailContainer.remove();
    };
  }, []);

  return null; // no visible react output, trail is DOM elements added to body
}
