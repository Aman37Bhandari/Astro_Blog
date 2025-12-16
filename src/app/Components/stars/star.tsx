"use client";
import { useMemo } from "react";

export default function Stars() {
  const stars = useMemo(() => {
    return Array.from({ length: 200 }, (_, i) => ({
      id: i,
      width: Math.random() * 2 + 1,
      left: Math.random() * 1500,
      top: Math.random() * 875,
      animationDelay: i * 0.01,
      animationDuration: 1 + Math.random() * 0.5
    }));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "875px",
        overflow: "hidden",
        margin: "0 auto",
        marginTop: "0px",
        position: "relative"
      }}
    >
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
      
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            width: `${star.width}px`,
            height: `${star.width}px`,
            zIndex: 1,
            background: "white",
            borderRadius: "50%",
            position: "absolute",
            opacity: 1,
            marginLeft: `${star.left}px`,
            marginTop: `${star.top}px`,
            animation: `twinkle ${star.animationDuration}s linear infinite`,
            animationDelay: `${star.animationDelay}s`
          }}
        />
      ))}
    </div>
  );
}