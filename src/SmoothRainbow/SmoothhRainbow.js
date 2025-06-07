import React, { useEffect, useRef } from "react";

export default function SmoothRainbowTrail() {
  const canvasRef = useRef(null);
  const trail = useRef([]);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvasRef.current = canvas;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    const maxTrailLength = 100;

    const handleMouseMove = (e) => {
      trail.current.push({ x: e.clientX, y: e.clientY, time: Date.now() });
      if (trail.current.length > maxTrailLength) {
        trail.current.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const rainbow = (t) => {
      const f = (n, k = 0) => Math.floor(128 + 128 * Math.sin(t / 100 + n + k));
      return `rgb(${f(0)},${f(2)},${f(4)})`;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (let i = 1; i < trail.current.length; i++) {
        const p1 = trail.current[i - 1];
        const p2 = trail.current[i];
        const age = Date.now() - p2.time;
        const alpha = Math.max(1 - age / 800, 0);
        ctx.strokeStyle = rainbow(p2.time);
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      canvas.remove();
    };
  }, []);

  return null;
}
