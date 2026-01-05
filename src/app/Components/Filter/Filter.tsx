"use client";
import { useState } from "react";
import styles from "./Filter.module.css";

interface FiltersProps {
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export default function Filters({ categories, onSearchChange, onCategoryChange }: FiltersProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = (value: string) => {
    setSearch(value);
    onSearchChange(value);
  };

  const handleCategory = (value: string) => {
    setCategory(value);
    onCategoryChange(value);
  };

  return (
    <div className={styles.filters}>
      <input
        type="text"
        placeholder="Search by title, description or content..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        className={styles.searchBar}
      />
      <select
        value={category}
        onChange={(e) => handleCategory(e.target.value)}
        className={styles.dropdown}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
