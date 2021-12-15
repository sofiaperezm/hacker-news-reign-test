import Main from "../layouts/Main";
import Dropdown from "../components/Dropdown/Dropdown";
import { DROPDOWN_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const DEFAULT_TOPIC = DROPDOWN_OPTIONS[0].value;

function AllPage() {
  const [selectedTopic, setSelectedTopic] = useState(DEFAULT_TOPIC);

  useEffect(() => {
    console.log("Make a request", selectedTopic);
  }, [selectedTopic]);

  function handleDropdownChange(value) {
    setSelectedTopic(value);
  }

  return (
    <Main currentPage="All">
      <Dropdown
        options={DROPDOWN_OPTIONS}
        defaultOption={selectedTopic}
        handleChange={handleDropdownChange}
      />
    </Main>
  );
}

export default AllPage;
