import { Link } from "react-router-dom";
import styles from "./Tabs.module.css";
import classNames from "classnames";

function Tabs({ selected, labels }) {
  const tabLabels = labels.map((label) => (
    <Link key={label.name} to={label.path}>
      <button
        className={classNames(styles.button, {
          [styles.selected]: selected === label.name,
        })}
      >
        {label.name}
      </button>
    </Link>
  ));
  return <nav className={styles.container}>{tabLabels}</nav>;
}

export default Tabs;
