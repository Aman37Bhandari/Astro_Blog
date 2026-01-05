"use client";
import { useState, useEffect } from "react";
import styles from "./comment.module.css";

interface Comment {
  name: string;
  text: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  // ✅ Load comments from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("comments");
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, []);

  // ✅ Save comments to localStorage
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (!name.trim() || !newComment.trim()) return;
    const updated = [...comments, { name, text: newComment }];
    setComments(updated);
    setNewComment("");
  };

  return (
    <div className={styles.commentSection}>
      <h3>Comments</h3>
      <div className={styles.commentForm}>
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
