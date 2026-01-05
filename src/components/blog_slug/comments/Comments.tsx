import styles from "./Comments.module.css";

type CommentsProps = {
  commentsList: {
    id: string;
    author: {
      id: string;
      name: string;
    };
    comment: string;
    created_at: Date;
  }[];
};

const Comments = ({ commentsList }: CommentsProps) => {
  return (
    <section className={styles.comments}>
      <h2>Comments</h2>
      {commentsList.map((comment, index) => (
        <div key={index} className={styles.comments_comment}>
          <div className={styles.comments_comment_author}>
            <span className={styles.comments_comment_author_pfp}>
              {comment.author.name[0]}
            </span>
            <p>{comment.author.name}</p>
          </div>
          <pre>{comment.comment}</pre>
        </div>
      ))}
    </section>
  );
};

export default Comments;
