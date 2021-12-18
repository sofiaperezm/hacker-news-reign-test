import { useEffect, useState } from "react";
import Main from "../layouts/Main";
import Dropdown from "../components/Dropdown/Dropdown";
import Post from "../components/Post/Post";
import { DROPDOWN_OPTIONS } from "../utils/constants";
import { getPosts, markAsFavorite } from "../api/post";
import { setItem, getItem } from "../utils/storage";

const DEFAULT_TOPIC = DROPDOWN_OPTIONS[0].value;

function AllPage() {
  const [selectedTopic, setSelectedTopic] = useState(DEFAULT_TOPIC);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const currentFilter = getItem("filter");
    setSelectedTopic(currentFilter || DEFAULT_TOPIC);
  }, []);

  useEffect(() => {
    async function _getPosts() {
      let _posts = await getPosts(selectedTopic);
      _posts = markAsFavorite(_posts);
      setPosts(_posts);
    }
    _getPosts();
  }, [selectedTopic]);

  function handleDropdownChange(value) {
    setSelectedTopic(value);
    setItem("filter", value);
  }

  function handleFavActions() {
    const _posts = markAsFavorite(posts);
    setPosts(_posts);
  }

  return (
    <Main currentPage="All">
      <Dropdown
        options={DROPDOWN_OPTIONS}
        defaultOption={selectedTopic}
        handleChange={handleDropdownChange}
      />
      <div className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            title={post.title}
            url={post.url}
            createdAt={post.createdAt}
            isFav={post.isFav}
            handleFavorite={handleFavActions}
          />
        ))}
      </div>
    </Main>
  );
}

export default AllPage;
