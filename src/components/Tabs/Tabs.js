import { Link } from "react-router-dom";
import styles from "./Tabs.module.css";

function Tabs({ selected, labels }) {
  const tabLabels = labels.map((label) => (
    <Link key={label} to="/">
      <button
        className={`${selected} === ${label} ? ${styles.selected} : ${styles.button}`}
      >
        {label}
      </button>
    </Link>
  ));
  return <nav className={styles.container}>{tabLabels}</nav>;
}

export default Tabs;
