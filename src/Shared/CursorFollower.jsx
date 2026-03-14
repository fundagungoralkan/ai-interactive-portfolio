import { useEffect, useRef, useState } from "react";

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const animate = () => {
    setCursorPos((prev) => {
      const dx = mousePos.x - prev.x;
      const dy = mousePos.y - prev.y;
      const speed = 0.15; 
      return {
        x: prev.x + dx * speed,
        y: prev.y + dy * speed,
      };
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePos]);

  return (
    <div
      ref={cursorRef}
      className={`
        pointer-events-none fixed top-0 left-0 w-7 h-7
        border-4 border-lime-400 rounded-full
        transition-transform duration-150 z-999 animate-pulse
      `}
      style={{
        transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
        boxShadow: clicked
          ? "0 0 15px 5px rgba(132, 204, 22, 0.7)"  
          : "0 0 20px 2px rgba(132,204,22,0.5)",  
      }}
    />
  );
};

export default CursorFollower;

 