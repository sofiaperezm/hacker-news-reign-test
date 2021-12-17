import { useEffect, useState } from "react";
import Main from "../layouts/Main";
import Dropdown from "../components/Dropdown/Dropdown";
import Post from "../components/Post/Post";
import { DROPDOWN_OPTIONS } from "../utils/constants";
import { getPosts } from "../api/post";
import { setStorage, getStorage } from "../utils/storage";

const DEFAULT_TOPIC = DROPDOWN_OPTIONS[0].value;

function AllPage() {
  const [selectedTopic, setSelectedTopic] = useState(DEFAULT_TOPIC);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const currentFilter = getStorage("filter");
    setSelectedTopic(currentFilter || DEFAULT_TOPIC);
  }, []);

  useEffect(() => {
    async function _getPosts() {
      const _posts = await getPosts(selectedTopic);
      setPosts(_posts);
    }
    _getPosts();
  }, [selectedTopic]);

  function handleDropdownChange(value) {
    setSelectedTopic(value);
    setStorage("filter", value);
  }

  return (
    <Main currentPage="All">
      <Dropdown
        options={DROPDOWN_OPTIONS}
        defaultOption={selectedTopic}
        handleChange={handleDropdownChange}
      />
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            title={post.title}
            url={post.url}
            createdAt={post.createdAt}
            isFav={true}
          />
        ))}
      </div>
    </Main>
  );
}

export default AllPage;
