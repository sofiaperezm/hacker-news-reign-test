import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getStorage, setStorage } from "../../utils/storage";
import styles from "./Post.module.css";

dayjs.extend(relativeTime);

function Post({ id, author, title, url, createdAt, isFav }) {
  function navigateToPost() {
    window.open(url);
  }

  function addToFavorites(event) {
    event.stopPropagation();

    const favorites = getStorage("favorites") || [];
    favorites.push({ id, author, title, url, createdAt, isFav: true });
    setStorage("favorites", favorites);
  }

  function removeToFavorites(event) {
    event.stopPropagation();

    const favorites = getStorage("favorites");
    const favIndex = favorites.findIndex((favorite) => favorite.id === id);
    if (favIndex !== -1) {
      favorites.splice(favIndex, 1);
      setStorage("favorites", favorites);
    }
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
        {isFav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.favIcon}
            onClick={removeToFavorites}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.favIcon}
            onClick={addToFavorites}
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
        )}
      </div>
    </article>
  );
}

export default Post;
