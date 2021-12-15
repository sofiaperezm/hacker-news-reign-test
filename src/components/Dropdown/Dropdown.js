import { useState } from "react";

function Dropdown({ options, defaultOption, handleChange = () => {} }) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  function changeOption(e) {
    const { value } = e.target;
    setSelectedOption(value);
    handleChange(value);
  }

  return (
    <select value={selectedOption} onChange={changeOption}>
      {options.map((option) => (
        <option key={option.name} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
