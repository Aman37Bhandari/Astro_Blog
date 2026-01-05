"use client";

import React from "react";
import { CardData } from "../data";
import styles from "./cards.module.css";

interface CardProps {
  card: CardData;
  onCategoryClick?: (category: string) => void;
}

const Card = ({ card, onCategoryClick }: CardProps) => {
  const { imageUrl, category, title, description, author, date } = card;
  const placeholderImg = "https://placehold.co/600x400/222/FFF?text=Image+Error";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeholderImg;
  };

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCategoryClick) onCategoryClick(category);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <img
            className={styles.cardImage}
            src={imageUrl}
            alt={title}
            onError={handleImageError}
          />
          <div
            className={styles.cardCategory}
            onClick={handleCategoryClick}
            style={{ cursor: "pointer" }}
          >
            {category}
          </div>
        </div>
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDescription}>{description}</p>
          <div className={styles.cardFooter}>
            <img
              className={styles.cardAuthorAvatar}
              src={author.avatarUrl}
              alt={`Avatar of ${author.name}`}
              onError={handleImageError}
            />
            <div className={styles.cardAuthorInfo}>
              <p className={styles.cardAuthorName}>{author.name}</p>
            </div>
            <div className={styles.cardDateInfo}>
              <p className={styles.cardDateLabel}>Date</p>
              <p className={styles.cardDateValue}>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
