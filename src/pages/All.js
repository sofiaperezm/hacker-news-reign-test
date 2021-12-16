import Main from "../layouts/Main";
import Dropdown from "../components/Dropdown/Dropdown";
import { DROPDOWN_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const DEFAULT_TOPIC = DROPDOWN_OPTIONS[0].value;

function AllPage() {
  const [selectedTopic, setSelectedTopic] = useState(DEFAULT_TOPIC);

  useEffect(() => {
    requestNews(selectedTopic);
  }, [selectedTopic]);

  async function requestNews(APIurl) {
    const response = await fetch(`${APIurl}`);
    const APIdata = await response.json();
    console.log(APIdata);
    console.log(APIdata.hits[1].story_title);
    return APIdata;

    // TO DO: implement try and catch
  }

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
