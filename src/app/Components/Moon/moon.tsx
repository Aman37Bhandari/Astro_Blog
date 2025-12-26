import React from "react";

const Moon: React.FC = () => {
    return(
        <div style={{
          position: "absolute",
          top: "220px",
          left: "20%",
          width: "110px",
          height: "110px",
          pointerEvents: "none",
          zIndex: 1
        }}>
            {Array.from({ length: 6 }).map((_, i) => (
                <div 
                  key={i} 
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 30% 30%, #ffffff, #e6e6e6 45%, #cfcfcf 70%)",
                    ...(i === 0 && {
                      filter: "blur(0px)",
                      opacity: 1,
                      boxShadow: "0 0 30px rgba(255,255,255,0.4)"
                    }),
                    ...(i === 1 && {
                      filter: "blur(4px)",
                      opacity: 0.6,
                      transform: "scale(1.05)"
                    }),
                    ...(i === 2 && {
                      filter: "blur(8px)",
                      opacity: 0.4,
                      transform: "scale(1.12)"
                    }),
                    ...(i === 3 && {
                      filter: "blur(14px)",
                      opacity: 0.25,
                      transform: "scale(1.2)"
                    }),
                    ...(i === 4 && {
                      filter: "blur(20px)",
                      opacity: 0.15,
                      transform: "scale(1.3)"
                    }),
                    ...(i === 5 && {
                      filter: "blur(30px)",
                      opacity: 0.08,
                      transform: "scale(1.45)"
                    })
                  }}
                ></div>
            ))}
        </div>
    );
};

export default Moon;