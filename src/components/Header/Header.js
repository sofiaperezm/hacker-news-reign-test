import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Hacker News</h1>
    </header>
  );
}

export default Header;
