"use client";

import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { cardsData } from "@/app/Components/data";
import EventBox from "@/app/Components/Events/EventBox";
import Link from "next/link";
import { Navbar } from "@/app/Components/navbar/navbar";
import CommentSection from "@/app/Components/CommentSection/comment";
import ImageSlider from "@/app/Components/Imgslider/ImgSlider";
import styles from "./detail.module.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaLink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function getPost(id: string) {
  return cardsData.find((p) => p.id === parseInt(id, 10));
}

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const CommentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const ViewIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

function ShareButtons({ post }: { post: any }) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Copy failed");
    }
  };

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <div className={styles.share}>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.facebook}`}>
        <FaFacebookF />
      </a>
      <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.twitter}`}>
        <FaXTwitter />
      </a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.linkedin}`}>
        <FaLinkedinIn />
      </a>
      <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.instagram}`}>
        <FaInstagram />
      </a>
      <button onClick={handleCopy} className={`${styles.icon} ${styles.copy}`} title="Copy Link">
        <FaLink />
      </button>
      {copied && <span className={styles.copyFeedback}>Link copied!</span>}
    </div>
  );
}

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = getPost(params.id);
  if (!post) notFound();

  const currentIndex = cardsData.findIndex((p) => p.id === post!.id);
  const prevPost = currentIndex > 0 ? cardsData[currentIndex - 1] : null;
  const nextPost = currentIndex < cardsData.length - 1 ? cardsData[currentIndex + 1] : null;

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.mainContent}>
        <article className={styles.blogArticle}>
          <header className={styles.header}>
            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.meta}>
              <div className={styles.authorInfo}>
                <img src={post.author.avatarUrl} alt={post.author.name} className={styles.authorAvatar} />
                <span>By {post.author.name}</span>
              </div>

              <div className={styles.dateContainer}>
                <div className={styles.dateInfo}>
                  <CalendarIcon />
                  <span>{post.date}</span>
                </div>
                <div className={styles.stats}>
                  <CommentIcon /> <span>50</span> <ViewIcon /> <span>35</span>
                </div>
              </div>

              <div className={styles.categoryContainer}>
                <div className={styles.categoryPill}>{post.category}</div>
                <ShareButtons post={post} />
              </div>
            </div>

            <div className={styles.line}></div>
          </header>

          {post.sliderImages?.length ? (
            <ImageSlider images={post.sliderImages} />
          ) : (
            <img src={post.imageUrl} alt={post.title} className={styles.mainImage} />
          )}

          <div className={styles.content}>
            {post.content.map((block, index) => {
              if (block.type === "paragraph") {
                return <p key={index}>{block.text}</p>;
              } else if (block.type === "image") {
                return <img key={index} src={block.src} alt={block.alt} className={styles.inlineImage} />;
              }
              return null;
            })}
          </div>

          <div className={styles.updatedAt}>Last updated - 20/20/2020</div>

          <footer className={styles.footer}>
            <div className={styles.tags}>
              <span>Popular Tags:</span>
              <div className={styles.tagContainer}>
                <button className={styles.tagButton}>UI Design</button>
                <button className={styles.tagButton}>Website</button>
              </div>
            </div>
            <ShareButtons post={post} />
          </footer>

          <div className={styles.postNavigation}>
            {prevPost && (
              <div className={styles.navItem}>
                <h3 className={styles.navHeading}>Previous Post :</h3>
                <Link href={`/blog/${prevPost.id}`} className={styles.navLink}>
                  <img src={prevPost.imageUrl} alt={prevPost.title} className={styles.navImage} />
                  <div className={styles.navText}>
                    <span className={styles.navTitle}>{prevPost.title}</span>
                    <span className={styles.navDate}>{prevPost.date}</span>
                  </div>
                </Link>
              </div>
            )}

            {nextPost && (
              <div className={styles.navItem} style={{ textAlign: "right" }}>
                <h3 className={styles.navHeading}>Next Post :</h3>
                <Link href={`/blog/${nextPost.id}`} className={styles.navLink} style={{ flexDirection: "row-reverse" }}>
                  <img src={nextPost.imageUrl} alt={nextPost.title} className={styles.navImage} />
                  <div className={styles.navText}>
                    <span className={styles.navTitle}>{nextPost.title}</span>
                    <span className={styles.navDate}>{nextPost.date}</span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <CommentSection />
        </article>
      </main>
      <EventBox />
    </div>
  );
}
