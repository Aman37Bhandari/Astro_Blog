"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Navbar } from "./Components/navbar/navbar";
import { Card } from "./Components/cards/cards";
import { cardsData } from "./Components/data";
import Link from "next/link";
import TopStoriesTicker from "./Components/topStories/TopStories";
import Filters from "./Components/Filter/Filter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(cardsData.map((c) => c.category))];

  const filteredCards = cardsData.filter((card) => {
    const matchesSearch =
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.description.toLowerCase().includes(search.toLowerCase()) ||
      card.content.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || card.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (category: string) => {
    setCategory(category);
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <TopStoriesTicker />
      <main className={styles.mainContent}>
        <div className={styles.headingData}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          incidunt?
        </div>

        {/* Filters Component */}
        <Filters
          categories={categories}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
        />

        {/* Cards */}
        <div className={styles.cardsContainer}>
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <Link
                key={card.id}
                href={`/blog/${card.id}`}
                className={styles.cardLink}
              >
                <Card card={card} onCategoryClick={handleCategoryClick} />
              </Link>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
