import styles from "./Dropdown.module.css";
import { useState, useEffect } from "react";

function Dropdown({ options, defaultOption, handleChange = () => {} }) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  useEffect(() => {
    setSelectedOption(defaultOption);
  }, [defaultOption]);

  function changeOption(e) {
    const { value } = e.target;
    setSelectedOption(value);
    handleChange(value);
  }

  return (
    <select
      aria-label="frontend technologies"
      value={selectedOption}
      onChange={changeOption}
      className={styles.dropdown}
    >
      {options.map((option) => (
        <option key={option.name} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
