"use client";

import Link from "next/link";
import { cardsData } from "@/app/Components/data";
import styles from "./TopStories.module.css";

export default function TopStoriesTicker() {
  return (
    <div className={styles.topStoriesWrapper}>
      <div className={styles.topStoriesLabel}><p>●</p> Top Stories</div>

      <div className={styles.tickerTrack}>
        <div className={styles.tickerContent}>
          {cardsData.concat(cardsData).map((story, index) => (
            <Link
              key={`story-${index}-${story.id}`}
              href={`/blog/${story.id}`}
              className={styles.topStoryItem}
            >
              <img
                src={story.imageUrl}
                alt={story.title}
                className={styles.topStoryImage}
              />
              <div className={styles.topStoryText}>
                <span className={styles.topStoryDate}>{story.date}</span>
                <span className={styles.topStoryTitle}>{story.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
