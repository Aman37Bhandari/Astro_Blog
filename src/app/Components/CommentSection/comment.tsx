"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./comment.module.css";

interface Comment {
  name: string;
  text: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
  
  useEffect(() => {
    try {
      const saved = localStorage.getItem("comments");
      if (saved) {
        setComments(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Failed to load comments:", error);
    }
  }, []);

  useEffect(() => {
    if (comments.length > 0) {
      const timeoutId = setTimeout(() => {
        try {
          localStorage.setItem("comments", JSON.stringify(comments));
        } catch (error) {
          console.error("Failed to save comments:", error);
        }
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [comments]);

  const handleAddComment = useCallback(() => {
    if (!name.trim() || !newComment.trim()) return;
    
    setComments(prev => [...prev, { name, text: newComment }]);
    setNewComment("");
    setName("");
  }, [name, newComment]);

  return (
    <div className={styles.commentSection}>
      <h3>Comments</h3>
      <div className={styles.commentForm}>
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Save</button>
      </div>

      <div className={styles.commentList}>
        {comments.map((c, index) => (
          <div key={index} className={styles.commentItem}>
            <img
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${c.name}`}
              alt={c.name}
              className={styles.commentAvatar}
            />
            <div className={styles.commentContent}>
              <div className={styles.commentText}>{c.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}