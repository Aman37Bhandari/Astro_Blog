"use client";
import React, { useState, useEffect } from "react";
import styles from "./parallax.module.css";
import Image from "next/image";
import Stars from "../Components/stars/star";
import Login from "../Components/login/login";
import ShootingStars from "../Components/shooting_star/shootingStar";

export default function Parallax() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getLayerStyle = (depth: number) => ({
    transform: `translate(${mousePos.x * depth}px, ${mousePos.y * depth}px)`
  });

  const Mountain2 = () => (
  <svg
  id="visual"
  viewBox="0 0 3000 400"
  width="3000"
  height="400"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
>
  <defs>
    <linearGradient id="mountain2Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#4a5a80" />
      <stop offset="100%" stopColor="#353f66" />
    </linearGradient>
  </defs>

  <path
    d="M0 194L26.3 200.8C52.7 207.7 105.3 221.3 158 243C210.7 264.7 263.3 294.3 316 307.5C368.7 320.7 421.3 317.3 474 303.7C526.7 290 579.3 266 631.8 275.8C684.3 285.7 736.7 329.3 789.2 319.7C841.7 310 894.3 247 947 230.7C999.7 214.3 1052.3 244.7 1105 219C1157.7 193.3 1210.3 111.7 1263 124.8C1315.7 138 1368.3 246 1421 284.5C1473.7 323 1526.3 292 1579 283C1631.7 274 1684.3 287 1737 249.7C1789.7 212.3 1842.3 124.7 1895 128.2C1947.7 131.7 2000.3 226.3 2053 283.8C2105.7 341.3 2158.3 361.7 2210.8 327C2263.3 292.3 2315.7 202.7 2368.2 203C2420.7 203.3 2473.3 293.7 2526 317.3C2578.7 341 2631.3 298 2684 285C2736.7 272 2789.3 289 2842 306.2C2894.7 323.3 2947.3 340.7 2973.7 349.3L3000 358L3000 401L0 401Z"
    fill="url(#mountain2Gradient)"
    strokeLinecap="round"
    strokeLinejoin="miter"
  />
</svg>



  );

  const Mountain3 = () => (
    <svg
  viewBox="0 0 1200 600"
  preserveAspectRatio="none"
  style={{ width: "100%", height: "100%" }}
>
  <defs>
    <linearGradient id="mountain3Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#7a87b1ff" />
      <stop offset="100%" stopColor="#5b6487ff" />
    </linearGradient>
  </defs>

  <path
    d="
      M0 488
      L28.6 415
      C57.2 342 114.4 197 171.5 181
      C228.7 165 285.8 279 343 280
      C400 281 457.2 170 514.3 161
      C571.5 150 628.7 241 685.8 278
      C743 314 800 297 857.2 248
      C914.3 198 971.5 116 1028.7 129
      C1085.8 143 1143 253 1171.5 308
      L1200 363
      L1200 600
      L0 600
      Z
    "
    fill="url(#mountain3Gradient)"
  />
</svg>

  );

  return (
    <>
    <div className={styles.background}>
      <div className={styles.shootingStars}>
    <ShootingStars />
  </div>
        <div className={styles.layer_0}>
            <Image
                className={styles.layer_0_image}
                src="/images/layer 0.png"
                alt="Layer 0"
                fill
            />
        </div>

        <div className={styles.layer_1} style={getLayerStyle(5)}>
            <Image
                className={styles.layer_1_image}
                src="/images/layer 1.png"
                alt="Layer 1"
                fill
            />
        </div>
       
        <div className={styles.layer_2} style={getLayerStyle(10)}>
            <Image
                className={styles.layer_2_image}
                src="/images/layer 2.png"
                alt="Layer 2"
                fill
            />
        </div>

        <div className={styles.layer_3} style={getLayerStyle(8)}>
            <Image
                className={styles.layer_3_image}
                src="/images/layer 3.png"
                alt="Layer 3"
                fill
            />
        </div>

        <div className={styles.layer_5} style={getLayerStyle(30)}>
            <Mountain2 />
        </div>

        <div className={styles.layer_6} style={getLayerStyle(35)}>
            <Mountain3 />
        </div>

        <div className={styles.layer_7} style={getLayerStyle(3)}>
            <Image
                className={styles.layer_7_image}
                src="/images/layer 7 logo.png"
                alt="Layer 7"
                fill
            />
        </div>
        <div className={styles.tagline}>
          <h1>
            Beyond books,<br />
            beyond Earth — into the future
          </h1>
        </div>

        <div className={styles.stars}>
            <Stars />
        </div>
      </div>

      <div className={styles.login}>
            <Login />
      </div>
    </>
    
        
    


    
  );
}