"use client";
import React, { useState, useEffect } from "react";
import styles from "./parallax.module.css";
import Image from "next/image";
import Stars from "../Components/stars/star";
import Login from "../Components/login/login";
import ShootingStars from "../Components/shooting_star/shootingStar";
import BlackHole from "../Components/blackhole/blackhole";

export default function Parallax() {

  return (
    <>
      <div className={styles.background}>
        
        <div className={styles.shootingStars}>
          <ShootingStars />
        </div>

        <div className={styles.blackHole}>
          <BlackHole />
        </div>

        <div className={styles.layer_0}>
          <Image
            className={styles.layer_0_image}
            src="/images/layer 0.png"
            alt="Layer 0"
            fill
            priority
          />
        </div>

        <div className={styles.layer_7}>
          <Image
            className={styles.layer_7_image}
            src="/images/layer 7.png"
            alt="Layer 7"
            fill
            priority
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