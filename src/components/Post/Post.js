import styles from "./Post.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function Post({ id, author, title, url, createdAt, isFav }) {
  function navigateToPost() {
    window.open(url);
  }

  return (
    <article className={styles.container} onClick={navigateToPost}>
      <div className={styles.postContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.clockIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className={styles.date}>
          {dayjs(createdAt).fromNow()} by {author}
        </span>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.favContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.favIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
    </article>
  );
}

export default Post;
