"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import type { BlogsList } from "@/types/types";

import dateToMDY from "@/modules/date-converters/dateToMDY";

import globalConfig from "@/config/globalConfig";

import styles from "./BlogsCards.module.css";

type BlogsCardsProps = {
  blogsList: BlogsList;
  categories: string[];
};

const BlogsCards = ({ blogsList, categories }: BlogsCardsProps) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [filteredBlogsList, setFilteredBlogsList] = useState<BlogsList>([]);

  useEffect(() => {
    let list = [...blogsList];

    if (query) {
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.short_description.toLowerCase().includes(query.toLowerCase()) ||
          item.author.name.toLowerCase().includes(query.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase())
          ) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category) {
      list = list.filter((item) => item.category === category);
    }

    setFilteredBlogsList([...list]);
  }, [blogsList, category, query]);

  return (
    <section className={styles.blogsCards}>
      <div className={styles.blogsCards_searchSection}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, description, author or tags"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.blogsCards_cards}>
        {filteredBlogsList.map((blog, index) => (
          <Link
            href={`/${blog.slug}`}
            key={index}
            className={styles.blogsCards_cards_card}
          >
            <div className={styles.blogsCards_cards_card_thumbnail}>
              <Image
                src={`${globalConfig.apiUrl}/images/blogs/thumbnails/${blog.thumbnail_id}.webp`}
                alt=""
                fill
              />
              <p>{blog.category}</p>
              <p>{dateToMDY(new Date(blog.created_at))}</p>
            </div>
            <div className={styles.blogsCards_cards_card_content}>
              <p className={styles.blogsCards_cards_card_content_title}>
                {blog.title}
              </p>
              <p className={styles.blogsCards_cards_card_content_description}>
                {blog.short_description}
              </p>
              <hr />
              <div className={styles.blogsCards_cards_card_content_author}>
                <div
                  className={styles.blogsCards_cards_card_content_author_pfp}
                >
                  S
                </div>
                <p>{blog.author.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogsCards;
