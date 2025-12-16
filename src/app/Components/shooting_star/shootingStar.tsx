import React from "react";
import styles from "./shootingStar.module.css";

const ShootingStars: React.FC = () => {
  return (
    <div className={styles.night}>
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className={styles.shooting_star}></div>
      ))}
    </div>
  );
};

export default ShootingStars;
